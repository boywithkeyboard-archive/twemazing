import React from 'react'

const SmallBlueDiamond = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#55ACEE" d="M7.707 18.708c-.389-.389-.389-1.025 0-1.414l9.585-9.586c.389-.389 1.025-.389 1.414 0l9.587 9.587c.389.389.389 1.025 0 1.414l-9.587 9.585c-.389.389-1.025.389-1.414 0l-9.585-9.586z"/></svg>
  )
}

export default SmallBlueDiamond
