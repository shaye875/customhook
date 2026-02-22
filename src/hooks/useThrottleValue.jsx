import React, { useState } from 'react'

function useThrottleValue(value, intervalMs) {
    const [value8,setValue] = useState(value)
    function throttledValue(){
        setValue(value+" "+intervalMs)
    }
  return {value8,throttledValue}
}

export default useThrottleValue
