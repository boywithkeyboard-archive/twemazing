import React from 'react'

const FlagNorthMacedonia = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D20000" d="M34.618 5.998L32 6l-1.5-1H20l-2 1-2-1H5.5L4 6l-2.618-.002C.542 6.731 0 7.797 0 9v6.5L1 18l-1 2.5V27c0 1.203.542 2.269 1.382 3.002L4 30l1.5 1H16l2-1 2 1h10.5l1.5-1 2.618.002C35.458 29.269 36 28.203 36 27v-6.5L35 18l1-2.5V9c0-1.203-.542-2.269-1.382-3.002z"/><path fill="#FFE600" d="M36 20.5v-5l-13.681 1.9c-.101-.724-.369-1.391-.779-1.957l13.091-9.455C33.928 5.373 33.008 5 32 5h-1.5l-9.663 9.691c-.659-.566-1.482-.932-2.392-1.026L20 5h-4l1.555 8.665c-.911.094-1.733.46-2.392 1.026L5.5 5H4c-1.008 0-1.928.373-2.632.988l13.092 9.455c-.41.566-.678 1.233-.779 1.957L0 15.5v5l13.681-1.9c.101.724.369 1.391.779 1.957L1.368 30.012l.001.001C2.072 30.628 2.993 31 4 31h1.5l9.663-9.691c.659.566 1.482.932 2.392 1.026L16 31h4l-1.555-8.665c.911-.094 1.733-.46 2.392-1.026L30.5 31H32c1.008 0 1.929-.373 2.632-.988L21.54 20.557c.41-.566.678-1.233.779-1.957L36 20.5z"/><path fill="#D20000" d="M18 13.62c-2.415 0-4.38 1.965-4.38 4.38s1.965 4.38 4.38 4.38 4.38-1.965 4.38-4.38-1.965-4.38-4.38-4.38zm0 7.737c-1.851 0-3.357-1.506-3.357-3.357s1.506-3.357 3.357-3.357 3.357 1.506 3.357 3.357-1.506 3.357-3.357 3.357z"/></svg>
  )
}

export default FlagNorthMacedonia