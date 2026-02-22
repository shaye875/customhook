import React, { useState } from 'react'

function useToggle(value) {
    const [toglle, setBool] = useState(value)
    function setTrue() {
        setBool(true)
    }
    function setFalse() {
        setBool(false)
    }
    return {
       toglle, setTrue, setFalse 
    }
}

export default useToggle
