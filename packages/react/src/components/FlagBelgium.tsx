import React from 'react'

const FlagBelgium = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#141414" d="M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h8V5H4z"/><path fill="#FEE833" d="M12 5h12v26H12z"/><path fill="#EE232C" d="M32 5h-8v26h8c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/></svg>
  )
}

export default FlagBelgium
