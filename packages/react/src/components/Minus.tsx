import React from 'react'

const Minus = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#31373D" d="M34 18c0 1.657-1.343 3-3 3H5c-1.657 0-3-1.343-3-3s1.343-3 3-3h26c1.657 0 3 1.343 3 3z"/></svg>
  )
}

export default Minus
