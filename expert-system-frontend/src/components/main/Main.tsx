import './Main.css'

export default function Main () {
  return (
    <main id='main'>
      <div className='numerical-data'>
        <h3>Numerical data</h3>
        <label htmlFor='age'>
          Age:
          <input type='number' id='age' />
        </label>
        <label htmlFor='tsh'>
          TSH Level:
          <input type='number' id='tsh' />
        </label>

        <label htmlFor='t3'>
          T3 Level:
          <input type='number' id='t3' />
        </label>

        <label htmlFor='t4'>
          T4 Level:
          <input type='number' id='t4' />
        </label>

        <label htmlFor='nodule'>
          Nodule Size:
          <input type='number' id='nodule' />
        </label>
      </div>
    </main>
  )
}
