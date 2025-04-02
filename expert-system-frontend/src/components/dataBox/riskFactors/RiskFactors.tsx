export default function RiskFactors ({ setRiskFactors }) {
  return (
    <div className='risk-factors data-box'>
      <h3>{'Risk\u00A0Factors'}</h3>
      <label htmlFor='risk-factors-smoking'>
        Smoking:
        <input type='checkbox' id='risk-factors-smoking' />
      </label>
      <label htmlFor='risk-factors-obesity'>
        Obesity:
        <input type='checkbox' id='risk-factors-obesity' />
      </label>
      <label htmlFor='risk-factors-diabetes'>
        Diabetes:
        <input type='checkbox' id='risk-factors-diabetes' />
      </label>
      <label htmlFor='risk-factors-family-history'>
        Family history:
        <input type='checkbox' id='risk-factors-family-history' />
      </label>
      <label htmlFor='risk-factors-iodine-deficiency'>
        Iodine deficiency:
        <input type='checkbox' id='risk-factors-iodine-deficiency' />
      </label>
      <label htmlFor='risk-factors-radiation-exposure'>
        Radiation exposure:
        <input type='checkbox' id='risk-factors-radiation-exposure' />
      </label>
    </div>
  )
}
