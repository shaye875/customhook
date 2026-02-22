import React, { useState } from 'react'

function usePrevious(value) {
    const [value6, setValue] = useState(value)
    function previousValue(e) {
        setValue(e.target.value)
    }
    return {value6,previousValue}
}

export default usePrevious
