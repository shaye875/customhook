import React, { useState } from 'react'

function useBodyClass(className) {
    const [classs,setClass] = useState(className)
    const body = document.getElementsByClassName(classs)

    
  
    return {classs}
}

export default useBodyClass
