import React from 'react'

const WhiteMediumSmallSquare = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E6E7E8" d="M29 27c0 1.104-.896 2-2 2H9c-1.104 0-2-.896-2-2V9c0-1.104.896-2 2-2h18c1.104 0 2 .896 2 2v18z"/></svg>
  )
}

export default WhiteMediumSmallSquare
