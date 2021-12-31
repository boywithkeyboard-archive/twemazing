import React from 'react'

const HeartWithRibbon = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#DD2E44" d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"/><path fill="#FDD888" d="M36 15c-1 5-4 8-4 8H4s-3-3-4-8h36z"/><path fill="#FDD888" d="M14 18v18l-5-5-5 5V18z"/><path fill="#FDCB58" d="M16.802 9.194l-7.879 5.515-7.878-5.515C.47 8.792 0 9.036 0 9.738v14.658c0 .703.48.965 1.069.582l7.854-5.106 7.854 5.106c.588.383 1.069.121 1.069-.582V9.738c.001-.702-.47-.946-1.044-.544z"/><circle fill="#FDD888" cx="9" cy="17" r="4"/></svg>
  )
}

export default HeartWithRibbon