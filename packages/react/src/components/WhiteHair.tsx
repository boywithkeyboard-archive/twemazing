import React from 'react'

const WhiteHair = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFDC5D" d="M0 21h30v15H0z"/><path fill="#E1E8ED" d="M4.5 1c-1.567 0-3.061.086-4.5.235v23.416c13.81 13.743 6.846-.189 6.846-.189 4.692 4.692 18.769 4.692 18.769 4.692L29.038 36h5.28c.424-2.252.682-5.332.682-9.192C35 15.077 23.269 1 4.5 1z"/></svg>
  )
}

export default WhiteHair