import React from 'react'

const FlagSomalia = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#4189DD" d="M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/><path fill="#FFF" d="M19.405 16.066L18 11.741l-1.405 4.325h-4.548l3.679 2.673-1.405 4.325L18 20.391l3.679 2.673-1.405-4.325 3.679-2.673z"/></svg>
  )
}

export default FlagSomalia
