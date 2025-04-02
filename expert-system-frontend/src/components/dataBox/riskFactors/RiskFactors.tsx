import IRiskFactors from '../../../interfaces/RiskFactors'

interface RiskFactorsProps {
  riskFactors: IRiskFactors
  setRiskFactors: (val: (prevState: IRiskFactors) => IRiskFactors) => void
}

export default function RiskFactors ({
  setRiskFactors,
  riskFactors
}: RiskFactorsProps) {
  const changeValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: keyof IRiskFactors
  ) => {
    console.log(event.target.value)
    let value: boolean = event.target.checked

    setRiskFactors(
      (prev: IRiskFactors): IRiskFactors => ({
        ...prev,
        [key]: value
      })
    )
  }

  return (
    <div className='risk-factors data-box'>
      <h3>{'Risk\u00A0Factors'}</h3>
      <label htmlFor='risk-factors-smoking'>
        Smoking:
        <input
          type='checkbox'
          id='risk-factors-smoking'
          checked={riskFactors.smoking}
          onChange={event => {
            changeValue(event, 'smoking')
          }}
        />
      </label>
      <label htmlFor='risk-factors-obesity'>
        Obesity:
        <input
          type='checkbox'
          id='risk-factors-obesity'
          checked={riskFactors.obesity}
          onChange={event => {
            changeValue(event, 'obesity')
          }}
        />
      </label>
      <label htmlFor='risk-factors-diabetes'>
        Diabetes:
        <input
          type='checkbox'
          id='risk-factors-diabetes'
          checked={riskFactors.diabetes}
          onChange={event => {
            changeValue(event, 'diabetes')
          }}
        />
      </label>
      <label htmlFor='risk-factors-family-history'>
        Family history:
        <input
          type='checkbox'
          id='risk-factors-family-history'
          checked={riskFactors.familyHistory}
          onChange={event => {
            changeValue(event, 'familyHistory')
          }}
        />
      </label>
      <label htmlFor='risk-factors-iodine-deficiency'>
        Iodine deficiency:
        <input
          type='checkbox'
          id='risk-factors-iodine-deficiency'
          checked={riskFactors.iodineDeficiency}
          onChange={event => {
            changeValue(event, 'iodineDeficiency')
          }}
        />
      </label>
      <label htmlFor='risk-factors-radiation-exposure'>
        Radiation exposure:
        <input
          type='checkbox'
          id='risk-factors-radiation-exposure'
          checked={riskFactors.radiationExposure}
          onChange={event => {
            changeValue(event, 'radiationExposure')
          }}
        />
      </label>
    </div>
  )
}
