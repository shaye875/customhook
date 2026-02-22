import React, { useEffect, useState } from 'react'

function useTimeout(callback, delayMs) {
    const [value10, setValue] = useState(callback)
    const [bool, setyBool] = useState(false)
    const [time,setTime] = useState("fyg")
useEffect(() => {
        if (bool) {
            setTime(setTimeout(() => {
                setValue(new Date().toLocaleTimeString())
            }, delayMs))
     
            
        }
    }, [bool])
    function start2() {
        setyBool(true)
    }
    function stop2() {
        setyBool(false)
        clearTimeout(time)
       
    }
    return { value10, start2, stop2 }
}

export default useTimeout
