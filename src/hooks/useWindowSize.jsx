import React, { useEffect, useState } from 'react'

function useWindowSize() {
    const [width,setWidth] = useState(window.screen.width)
    const [heigth,setHeigth] = useState(screen.height)
    return {width,heigth}
}

export default useWindowSize
