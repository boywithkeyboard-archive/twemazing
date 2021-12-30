import React from 'react'

const PigNose = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E6AAAA" d="M35 18c0 6.075-4.925 11-11 11H12C5.925 29 1 24.075 1 18S5.925 7 12 7h12c6.075 0 11 4.925 11 11z"/><ellipse fill="#662113" cx="10" cy="18" rx="4" ry="6"/><ellipse fill="#662113" cx="26" cy="18" rx="4" ry="6"/></svg>
  )
}

export default PigNose
