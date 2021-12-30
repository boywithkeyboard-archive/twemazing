import React from 'react'

const FlagBotswana = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#EEE" d="M0 13h36v10H0z"/><path fill="#75AADB" d="M32 5H4C1.791 5 0 6.791 0 9v5h36V9c0-2.209-1.791-4-4-4zM0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-5H0v5z"/><path fill="#141414" d="M0 16h36v4H0z"/></svg>
  )
}

export default FlagBotswana
