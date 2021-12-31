import React from 'react'

const MutedSpeaker = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#8899A6" d="M9 10s-2 0-2 2v12c0 2 2 2 2 2h6l8 8s1 1 2 1h1s1 0 1-1V2s0-1-1-1h-1c-1 0-2 1-2 1l-8 8H9z"/><path fill="#CCD6DD" d="M15 26l8 8s1 1 2 1h1s1 0 1-1V2s0-1-1-1h-1c-1 0-2 1-2 1l-8 8v16z"/><path fill="#DD2E44" d="M31.003 33.003L3.997 5.997c-.551-.551-.551-1.443 0-1.994l.006-.006c.551-.551 1.443-.551 1.994 0l27.006 27.006c.551.551.551 1.443 0 1.994l-.006.006c-.551.551-1.443.551-1.994 0z"/></svg>
  )
}

export default MutedSpeaker