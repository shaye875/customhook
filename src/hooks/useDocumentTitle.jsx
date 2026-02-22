import React, { useState } from 'react'

function useDocumentTitle(title1) {
    const [title,setTitle] = useState(title1)
    return {title}
}

export default useDocumentTitle
