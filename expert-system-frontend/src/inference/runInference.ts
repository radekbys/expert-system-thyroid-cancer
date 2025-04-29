import * as ort from 'onnxruntime-web'
import INumericalData from '../interfaces/NumericalData'
import IRiskFactors from '../interfaces/RiskFactors'

ort.env.wasm.wasmPaths = '/'
ort.env.wasm.simd = true
ort.env.wasm.proxy = true // for multithreading
ort.env.wasm.numThreads = 1

async function runInference (
  gender: string | undefined,
  ethnicity: string | undefined,
  numericalData: INumericalData,
  riskFactors: IRiskFactors
): Promise<string | undefined> {
  if (
    gender === undefined ||
    ethnicity === undefined ||
    numericalData === undefined ||
    numericalData.age === undefined ||
    numericalData.tsh === undefined ||
    numericalData.t3 === undefined ||
    numericalData.t4 === undefined ||
    numericalData.noduleSize === undefined ||
    riskFactors === undefined
  )
    return undefined

  const inputData = new Float32Array(24).fill(0)

  inputData[0] = numericalData.age / 100.0
  inputData[1] = numericalData.tsh / 10.0
  inputData[2] = numericalData.t3 / 3.5
  inputData[3] = numericalData.t4 / 12.0
  inputData[4] = numericalData.noduleSize / 5.0

  if (gender === 'female') inputData[5] = 1.0
  if (gender === 'male') inputData[6] = 1.0

  if (ethnicity === 'african') inputData[7] = 1.0
  if (ethnicity === 'asian') inputData[8] = 1.0
  if (ethnicity === 'caucasian') inputData[9] = 1.0
  if (ethnicity === 'hispanic') inputData[10] = 1.0
  if (ethnicity === 'middle-eastern') inputData[11] = 1.0

  if (!riskFactors.smoking) inputData[12] = 1.0
  else inputData[13] = 1.0

  if (!riskFactors.obesity) inputData[14] = 1.0
  else inputData[15] = 1.0

  if (!riskFactors.diabetes) inputData[16] = 1.0
  else inputData[17] = 1.0

  if (!riskFactors.familyHistory) inputData[18] = 1.0
  else inputData[19] = 1.0

  if (!riskFactors.radiationExposure) inputData[20] = 1.0
  else inputData[21] = 1.0

  if (!riskFactors.iodineDeficiency) inputData[22] = 1.0
  else inputData[23] = 1.0

  const tensor = new ort.Tensor('float32', inputData, [24])

  try {
    const session = await ort.InferenceSession.create('/nn_model.onnx', {
      executionProviders: ['wasm']
    })

    // @ts-ignore: Disable error about Tensor not being a named export
    const feeds: Record<string, ort.Tensor> = {}
    const inputName = session.inputNames[0]
    feeds[inputName] = tensor

    const results = await session.run(feeds)
    const outputName = session.outputNames[0]
    const outputData = results[outputName].data as Float32Array

    const sigmoid = (x: number) => 1 / (1 + Math.exp(-x))
    const probability = sigmoid(outputData[0])

    const prediction = probability > 0.5 ? 'Malignant' : 'Benign'
    return prediction
  } catch (e: any) {
    console.error('💥 error.message:', e.message)
  }

  return undefined
}

export default runInference
