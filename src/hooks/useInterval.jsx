import React, { useEffect, useState } from 'react'

function useInterval(callback, intervalMs) {
    const [value9, setValue] = useState(callback)
    const [bool, setyBool] = useState(false)
    const [time,setTime] = useState("")
    useEffect(() => {
        if (bool) {
            setTime(setInterval(() => {
                setValue(new Date().toLocaleTimeString())
            }, intervalMs))
     
            
        }        
    }, [bool])
    function start() {
        setyBool(true)
    }
    function stop() {
        setyBool(false)
        clearInterval(time)
       
    }
    return { value9, start, stop }
}

export default useInterval
