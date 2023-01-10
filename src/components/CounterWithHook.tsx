import useCounter from '../hooks/useCounter';

const CounterWithHook = () => {

    const initialValue = 100;

    const {value, handleAdd, setValue} = useCounter( initialValue );

  return (
    <>
      <h3>Counter with custom hook <small>{value}</small></h3>
      <button 
        className='btn btn-primary'
        onClick={ () => handleAdd(1)}
      >+1</button> &nbsp;
      <button 
        className='btn btn-secondary'
        onClick={ () => setValue(initialValue)}
        >Reset</button> &nbsp;
      <button 
        className='btn btn-primary'
        onClick={ () => handleAdd(-1)}
      >-1</button>
    </>
  )
}

export default CounterWithHook
