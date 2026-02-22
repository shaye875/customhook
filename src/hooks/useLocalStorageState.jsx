import React, { useState } from 'react'

function useLocalStorageState(key, defaultValue) {
    localStorage.setItem(key, defaultValue)
    const [value5,setValue1] = useState(defaultValue)
    function setValue3(e) {
       localStorage.setItem(key,e.target.value)
       setValue1(localStorage.getItem(key))
    }
    function remove() {
        localStorage.setItem(key, defaultValue)
         setValue1(localStorage.getItem(key))
    }
    return {value5, setValue3, remove }
}

export default useLocalStorageState
