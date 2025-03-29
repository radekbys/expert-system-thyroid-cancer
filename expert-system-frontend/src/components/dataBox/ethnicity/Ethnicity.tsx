export default function Ethnicity () {
  return (
    <div className='ethnicity data-box'>
      <h3>Ethnicity</h3>
      <label htmlFor='ethnicity-caucasian'>
        Caucasian:
        <input type='radio' name='race' id='ethnicity-caucasian' />
      </label>
      <label htmlFor='ethnicity-asian'>
        Asian:
        <input type='radio' name='race' id='ethnicity-asian' />
      </label>
      <label htmlFor='ethnicity-african'>
        African:
        <input type='radio' name='race' id='ethnicity-african' />
      </label>
      <label htmlFor='ethnicity-hispanic'>
        Hispanic:
        <input type='radio' name='race' id='ethnicity-hispanic' />
      </label>
      <label htmlFor='ethnicity-middle-eastern'>
        Middle-eastern:
        <input type='radio' name='race' id='ethnicity-middle-eastern' />
      </label>
    </div>
  )
}
