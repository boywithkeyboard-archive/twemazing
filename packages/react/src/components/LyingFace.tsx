import React from 'react'

const LyingFace = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#FFCC4D" cx="16" cy="18" r="16"/><path fill="#664500" d="M11.471 13.529c0 1.706-.987 3.088-2.206 3.088-1.219 0-2.206-1.382-2.206-3.088 0-1.705.987-3.088 2.206-3.088 1.218 0 2.206 1.383 2.206 3.088zm11.529 0c0 1.706-.987 3.088-2.206 3.088-1.218 0-2.206-1.382-2.206-3.088 0-1.705.988-3.088 2.206-3.088 1.219 0 2.206 1.383 2.206 3.088zM10.118 29.382c1.765-4.412 11.471-4.412 11.471-2.647-.001.883-7.06-.882-11.471 2.647z"/><path fill="#F4900C" d="M32.262 17.5H17c-1.511 0-2.734 1.344-2.734 3 0 1.657 1.224 3 2.734 3h15.262c1.513 0 2.738-1.343 2.738-3 0-1.656-1.226-3-2.738-3z"/></svg>
  )
}

export default LyingFace