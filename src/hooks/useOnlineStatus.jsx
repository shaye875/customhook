import React from 'react'

function useOnlineStatus() {
    function isOnline1() {
        return (navigator.onLine)
    }
    const isOnline = isOnline1()
    return {  isOnline}

}

export default useOnlineStatus
