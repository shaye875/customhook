import React, { useState } from 'react'

function useSessionStorageState(key,defaultValue) {
    sessionStorage.setItem(key, defaultValue)
    const [value4,setValue] = useState(defaultValue)
    function setValue4(e) {
       sessionStorage.setItem(key,e.target.value)
       
       setValue(sessionStorage.getItem(key))
    }
    function remove1() {
        sessionStorage.setItem(key, defaultValue)
         setValue(sessionStorage.getItem(key))
    }
    return {value4, setValue4, remove1 }
}

export default useSessionStorageState
