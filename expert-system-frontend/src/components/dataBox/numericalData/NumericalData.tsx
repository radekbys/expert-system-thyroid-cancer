import './NumericalData.css'

export default function NumericalData () {
  return (
    <div className='numerical-data data-box'>
      <h3>{'Numerical\u00A0Data'}</h3>
      <label htmlFor='numerical-data-age'>
        Age:
        <input type='number' id='numerical-data-age' />
      </label>
      <label htmlFor='numerical-data-tsh'>
        TSH Level:
        <input type='number' id='numerical-data-tsh' />
      </label>

      <label htmlFor='numerical-data-t3'>
        T3 Level:
        <input type='number' id='numerical-data-t3' />
      </label>

      <label htmlFor='numerical-data-t4'>
        T4 Level:
        <input type='number' id='numerical-data-t4' />
      </label>

      <label htmlFor='numerical-data-nodule-size'>
        Nodule Size:
        <input type='number' id='numerical-data-nodule-size' />
      </label>
    </div>
  )
}
