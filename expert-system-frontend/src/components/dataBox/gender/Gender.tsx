import './Gender.css'

interface GenderProps {
  setGender: (value: string) => void
}

export default function Gender ({ setGender }: GenderProps) {
  return (
    <div className='gender data-box'>
      <h3>Gender</h3>
      <label htmlFor='gender-male'>
        Male:
        <input
          type='radio'
          name='gender'
          id='gender-male'
          onClick={() => {
            setGender('male')
          }}
        />
      </label>
      <label htmlFor='gender-female'>
        Female:
        <input
          type='radio'
          name='gender'
          id='gender-female'
          onClick={() => {
            setGender('female')
          }}
        />
      </label>
    </div>
  )
}
