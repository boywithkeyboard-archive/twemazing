import React from 'react'

const FlagStMartin = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#ED2939" d="M36 27c0 2.209-1.791 4-4 4h-8V5h8c2.209 0 4 1.791 4 4v18z"/><path fill="#002495" d="M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h8V5H4z"/><path fill="#EEE" d="M12 5h12v26H12z"/></svg>
  )
}

export default FlagStMartin
