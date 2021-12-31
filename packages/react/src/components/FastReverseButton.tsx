import React from 'react'

const FastReverseButton = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M0 32c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4H4C1.791 0 0 1.791 0 4v28z"/><path fill="#FFF" d="M6 18L18 7v9.166L28 7v22l-10-9.167V29z"/></svg>
  )
}

export default FastReverseButton