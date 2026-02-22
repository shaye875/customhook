import React, { useState } from 'react'

function useCounter(initial) {
    const [value,setValue] = useState(initial)
    function inc(){
        setValue(value + 1)
    }
    function dec(){
        setValue(value - 1)
    }
    function reset(){
        setValue(initial)
    }
  return { value, inc, dec, reset }
}

export default useCounter
