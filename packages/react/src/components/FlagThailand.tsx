import React from 'react'

const FlagThailand = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#A7122D" d="M0 26.518V27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-.482H0z"/><path fill="#EEE" d="M0 22.181h36v4.485H0z"/><path fill="#292648" d="M0 13.513h36v8.821H0z"/><path fill="#EEE" d="M0 9.181h36v4.485H0z"/><path fill="#A7122D" d="M0 9.333V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v.333H0z"/></svg>
  )
}

export default FlagThailand
