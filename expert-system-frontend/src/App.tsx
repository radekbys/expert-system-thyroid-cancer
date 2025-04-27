import './App.css'
import Header from './components/header/Header.tsx'
import Main from './components/main/Main.tsx'
import * as ort from 'onnxruntime-web'

async function createSession () {
  const session = await ort.InferenceSession.create('model.onnx')
}

await createSession()

function App () {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
