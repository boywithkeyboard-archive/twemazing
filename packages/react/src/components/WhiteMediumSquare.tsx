import React from 'react'

const WhiteMediumSquare = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E6E7E8" d="M33 30c0 1.657-1.343 3-3 3H6c-1.657 0-3-1.343-3-3V6c0-1.657 1.343-3 3-3h24c1.657 0 3 1.343 3 3v24z"/></svg>
  )
}

export default WhiteMediumSquare
