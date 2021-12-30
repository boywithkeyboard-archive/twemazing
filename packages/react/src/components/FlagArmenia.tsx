import React from 'react'

const FlagArmenia = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D90012" d="M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z"/><path fill="#F2A800" d="M4 31h28c2.209 0 4-1.791 4-4v-4H0v4c0 2.209 1.791 4 4 4z"/><path fill="#0033A0" d="M0 13h36v10H0z"/></svg>
  )
}

export default FlagArmenia
