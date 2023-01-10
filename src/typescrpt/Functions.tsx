import React from 'react'

const Functions = () => {

    const add = (a: number, b: number): number => {
        return a + b;
    }

  return (
    <>
      <h3>Functions</h3>
        <span>Result: { add(5, 5) }</span>
    </>
  )
}

export default Functions
