import React, { useEffect, useRef } from 'react'

function useOutsideClick(ref, onOutsideClick) {
    const clic1k = useRef(ref)
    function outt(){
        clic1k.current = onOutsideClick
            
    }


    
    
  return {clic1k,outt}
}

export default useOutsideClick
