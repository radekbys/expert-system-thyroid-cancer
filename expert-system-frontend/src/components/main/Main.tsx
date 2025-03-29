import './Main.css'
import Ethnicity from '../dataBox/ethnicity/Ethnicity'
import Gender from '../dataBox/gender/Gender'
import NumericalData from '../dataBox/numericalData/NumericalData'
import RiskFactors from '../dataBox/riskFactors/RiskFactors'

export default function Main () {
  return (
    <main id='main'>
      <Gender />
      <NumericalData />
      <Ethnicity />
      <RiskFactors />
      <button className='run-prediction-button'>Predict Severity</button>
    </main>
  )
}
