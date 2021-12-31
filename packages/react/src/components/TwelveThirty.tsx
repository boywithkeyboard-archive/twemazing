import React from 'react'

const TwelveThirty = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#99AAB5" cx="18" cy="18" r="18"/><circle fill="#E1E8ED" cx="18" cy="18" r="14"/><path fill="#66757F" d="M17 18c0-.553.447-1 1-1 .552 0 1 .447 1 1v11c0 .552-.448 1-1 1-.553 0-1-.448-1-1V18z"/><path fill="#66757F" d="M19 18c0 .552-.448 1-1 1s-1-.448-1-1V9c0-.552.448-1 1-1s1 .448 1 1v9z"/></svg>
  )
}

export default TwelveThirty