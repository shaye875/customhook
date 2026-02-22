import React, { use, useState } from 'react'

function useCounterWithStep(initial, step) {
    const [value1, setValue] = useState(initial)
    function inc1() {
        setValue(value1 + step)
    }
    function dec1() {
        setValue(value1 - step)
    }
    function reset1(){
        setValue(initial)
    }
    return { value1, inc1, dec1, reset1 }
}

export default useCounterWithStep
