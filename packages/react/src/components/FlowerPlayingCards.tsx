import React from 'react'

const FlowerPlayingCards = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#DD2E44" d="M32 28H4V4c0-2.209 1.791-4 4-4h20c2.209 0 4 1.791 4 4v24z"/><path d="M8 36h20c2.209 0 4-1.791 4-4v-4c-4.117-2.744-21.139-8.233-28 0v4c0 2.209 1.791 4 4 4z"/><circle fill="#FFF" cx="15.276" cy="12.495" r="7.578"/></svg>
  )
}

export default FlowerPlayingCards
