import React from 'react'

function useKeyPress(Press) {
    function isKey(){
        return new KeyboardEvent(Press)
    }
    console.log(isKey());
    
    const isPressed = isKey().isTrusted

    return {isPressed}
}

export default useKeyPress
  