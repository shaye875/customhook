import React, { useState } from 'react'

function useTextarea(initial) {
    const [value3,setValue2] = useState(initial)
    function onChange2(e){
        setValue2(e.target.value)
    }
    function reset3(){
        setValue2(initial)
    }
  return { value3, onChange2, setValue2, reset3}
}

export default useTextarea
