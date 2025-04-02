interface EthnicityProps {
  setEthnicity: (value: string) => void
}

export default function Ethnicity ({ setEthnicity }: EthnicityProps) {
  return (
    <div className='ethnicity data-box'>
      <h3>Ethnicity</h3>
      <label htmlFor='ethnicity-caucasian'>
        Caucasian:
        <input
          type='radio'
          name='race'
          id='ethnicity-caucasian'
          onClick={() => {
            setEthnicity('caucasian')
          }}
        />
      </label>
      <label htmlFor='ethnicity-asian'>
        Asian:
        <input
          type='radio'
          name='race'
          id='ethnicity-asian'
          onClick={() => {
            setEthnicity('asian')
          }}
        />
      </label>
      <label htmlFor='ethnicity-african'>
        African:
        <input
          type='radio'
          name='race'
          id='ethnicity-african'
          onClick={() => {
            setEthnicity('african')
          }}
        />
      </label>
      <label htmlFor='ethnicity-hispanic'>
        Hispanic:
        <input
          type='radio'
          name='race'
          id='ethnicity-hispanic'
          onClick={() => {
            setEthnicity('hispanic')
          }}
        />
      </label>
      <label htmlFor='ethnicity-middle-eastern'>
        Middle-eastern:
        <input
          type='radio'
          name='race'
          id='ethnicity-middle-eastern'
          onClick={() => {
            setEthnicity('middle-eastern')
          }}
        />
      </label>
    </div>
  )
}
