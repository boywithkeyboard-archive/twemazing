import React from 'react'

const WhiteExclamationMark = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#CCD6DD" cx="18" cy="32" r="3"/><path fill="#CCD6DD" d="M21 24c0 1.657-1.343 3-3 3s-3-1.343-3-3V5c0-1.657 1.343-3 3-3s3 1.343 3 3v19z"/></svg>
  )
}

export default WhiteExclamationMark
