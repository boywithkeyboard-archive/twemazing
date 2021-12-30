import React from 'react'

const HeartSuit = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#BE1931" d="M2.067 11.319C2.067 2.521 14.251-.74 18 9.445 21.749-.741 33.933 2.52 33.933 11.319 33.933 20.879 18 33 18 33S2.067 20.879 2.067 11.319z"/></svg>
  )
}

export default HeartSuit
