import React, { useRef, useState } from 'react'

function useOutsideClick(ref, onOutsideClick) {
    const [clic1k,setClick] = useState(ref)
    function outt(){
        setClick(onOutsideClick)
            
    }


    
    
  return {clic1k,outt}
}

export default useOutsideClick
