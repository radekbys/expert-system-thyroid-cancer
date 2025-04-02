import './NumericalData.css'
import INumericalData from '../../../interfaces/NumericalData'

interface NumericalDataProps {
  setNumericalData: (
    value: (prevState: INumericalData) => INumericalData
  ) => void
  numericalData: INumericalData
}

export default function NumericalData ({
  setNumericalData,
  numericalData
}: NumericalDataProps) {
  const changeProp = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: keyof INumericalData
  ) => {
    const val: number = parseInt(event.target.value)

    setNumericalData((previousNumericalData: INumericalData) => {
      const newData: INumericalData = { ...previousNumericalData }
      newData[key] = val
      return newData
    })
  }

  return (
    <div className='numerical-data data-box'>
      <h3>{'Numerical\u00A0Data'}</h3>
      <label htmlFor='numerical-data-age'>
        Age:
        <input
          type='number'
          id='numerical-data-age'
          value={numericalData.age || ''}
          onChange={event => changeProp(event, 'age')}
        />
      </label>
      <label htmlFor='numerical-data-tsh'>
        TSH Level:
        <input
          type='number'
          id='numerical-data-tsh'
          value={numericalData.tsh || ''}
          onChange={event => changeProp(event, 'tsh')}
        />
      </label>

      <label htmlFor='numerical-data-t3'>
        T3 Level:
        <input
          type='number'
          id='numerical-data-t3'
          value={numericalData.t3 || ''}
          onChange={event => changeProp(event, 't3')}
        />
      </label>

      <label htmlFor='numerical-data-t4'>
        T4 Level:
        <input
          type='number'
          id='numerical-data-t4'
          value={numericalData.t4 || ''}
          onChange={event => changeProp(event, 't4')}
        />
      </label>

      <label htmlFor='numerical-data-nodule-size'>
        Nodule Size:
        <input
          type='number'
          id='numerical-data-nodule-size'
          value={numericalData.noduleSize || ''}
          onChange={event => changeProp(event, 'noduleSize')}
        />
      </label>
    </div>
  )
}
