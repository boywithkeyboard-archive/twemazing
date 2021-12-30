import React from 'react'

const Bald = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFDC5D" d="M34.896 36C30.618 13.677 16.169 2.725 0 1.195V36h34.896z"/></svg>
  )
}

export default Bald
