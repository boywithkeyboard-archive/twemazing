import React from 'react'

const FlagQatar = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#8D1B3D" d="M32 5H11v26h21c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/><path fill="#EEE" d="M11 28.111l5.295-1.444L11 25.222l5.295-1.444L11 22.333l5.295-1.444L11 19.444 16.295 18 11 16.556l5.295-1.444L11 13.667l5.295-1.444L11 10.778l5.295-1.445L11 7.889l5.295-1.444L11 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h7l5.295-1.444L11 28.111z"/></svg>
  )
}

export default FlagQatar