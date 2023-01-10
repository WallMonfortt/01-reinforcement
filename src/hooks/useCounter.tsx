import { useState } from 'react'

const useCounter = ( initialValue : number = 0) => {
  const [value, setValue] = useState(initialValue);

    const handleAdd = (num:number) => {
        setValue(value + num);
    }
  return {
    value,
    handleAdd,
    setValue
  }
}

export default useCounter
