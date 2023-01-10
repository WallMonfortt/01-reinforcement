import { useState } from 'react'

const Counter = () => {

    const [value, setValue] = useState(0);

    const handleAdd = (num:number) => {
        setValue(value + num);
    }
  return (
    <>
      <h3>Counter <small>{value}</small></h3>
      <button 
        className='btn btn-primary'
        onClick={ () => handleAdd(1)}
      >+1</button> &nbsp;
      <button 
        className='btn btn-secondary'
        onClick={ () => setValue(0)}
        >Reset</button> &nbsp;
      <button 
        className='btn btn-primary'
        onClick={ () => handleAdd(-1)}
      >-1</button>
    </>
  )
}

export default Counter
