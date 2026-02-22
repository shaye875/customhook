import React, { useState } from 'react'

function useDebouncedValue(value, delays) {
    const [value7,setValue] = useState(value)
    function debounce(){
        setValue(delays)
    }
  return {value7,debounce}
}

export default useDebouncedValue

