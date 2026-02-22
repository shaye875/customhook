import React, { useState } from 'react'

function useClipboard(text) {
    const [value12,setValue] = useState(text)

  return {value12}
}

export default useClipboard
