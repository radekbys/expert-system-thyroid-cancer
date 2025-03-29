import './Gender.css'

export default function Gender () {
  return (
    <div className='gender data-box'>
      <h3>Gender</h3>
      <label htmlFor='gender-male'>
        Male:
        <input type='radio' name='gender' id='gender-male' />
      </label>
      <label htmlFor='gender-female'>
        Female:
        <input type='radio' name='gender' id='gender-female' />
      </label>
    </div>
  )
}
