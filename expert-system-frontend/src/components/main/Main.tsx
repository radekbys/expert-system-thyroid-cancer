import { useState } from 'react'

import './Main.css'
import '../dataBox/dataBox.css'
import Ethnicity from '../dataBox/ethnicity/Ethnicity'
import Gender from '../dataBox/gender/Gender'
import NumericalData from '../dataBox/numericalData/NumericalData'
import RiskFactors from '../dataBox/riskFactors/RiskFactors'
import INumericalData from '../../interfaces/NumericalData'
import IRiskFactors from '../../interfaces/RiskFactors'
import runInference from '../../inference/runInference'

export default function Main () {
  const [gender, setGender] = useState<string | undefined>(undefined)
  const [ethnicity, setEthnicity] = useState<string | undefined>(undefined)

  const [numericalData, setNumericalData] = useState<INumericalData>({
    age: undefined,
    tsh: undefined,
    t3: undefined,
    t4: undefined,
    noduleSize: undefined
  })

  const [riskFactors, setRiskFactors] = useState<IRiskFactors>({
    diabetes: false,
    familyHistory: false,
    obesity: false,
    iodineDeficiency: false,
    radiationExposure: false,
    smoking: false
  })

  const [severity, setSeverity] = useState<string | undefined>(undefined)

  const predictSeverityFn = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()

    if (gender === undefined || ethnicity === undefined) return
    for (const val in numericalData) {
      if (val === undefined) return
    }

    const result = await runInference(
      gender,
      ethnicity,
      numericalData,
      riskFactors
    )

    setSeverity(result)
  }

  return (
    <main id='main'>
      <Gender setGender={setGender} />
      <NumericalData
        setNumericalData={setNumericalData}
        numericalData={numericalData}
      />
      <Ethnicity setEthnicity={setEthnicity} />
      <RiskFactors setRiskFactors={setRiskFactors} riskFactors={riskFactors} />
      <button className='run-prediction-button' onClick={predictSeverityFn}>
        Predict Severity
      </button>
      {severity && (
        <div>
          <h2>{severity}</h2>
        </div>
      )}
    </main>
  )
}
