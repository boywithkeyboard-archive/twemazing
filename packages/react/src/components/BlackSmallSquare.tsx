import React from 'react'

const BlackSmallSquare = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#31373D" d="M25 24c0 .553-.447 1-1 1H12c-.552 0-1-.447-1-1V12c0-.552.448-1 1-1h12c.553 0 1 .448 1 1v12z"/></svg>
  )
}

export default BlackSmallSquare
