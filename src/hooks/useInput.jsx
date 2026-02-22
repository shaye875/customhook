import React, { useState } from 'react'

function useInput(initial) {
    const [value2,setValue] = useState(initial)
    function onChange(e){
        setValue(e.target.value)
    }
    function reset2(){
        setValue(initial)
    }
  return { value2, onChange, setValue, reset2 }
}

export default useInput
