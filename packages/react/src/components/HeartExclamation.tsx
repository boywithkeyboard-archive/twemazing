import React from 'react'

const HeartExclamation = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#DD2E44" d="M18 4C14.875-2.375 6-.731 6 7c0 7.062 12 17 12 17s12-9.938 12-17c0-7.731-8.875-9.375-12-3z"/><circle fill="#DD2E44" cx="18" cy="31" r="5"/></svg>
  )
}

export default HeartExclamation
