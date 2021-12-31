import React from 'react'

const FlagFaroeIslands = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#EEE" d="M9.444 5H4C1.791 5 0 6.791 0 9v5.5h9.444V5zM36 14.5V9c0-2.209-1.791-4-4-4H16.5v9.5H36z"/><path fill="#0065BD" d="M36 16v-1.5H16.5V5H15v11zM11 5H9.444v9.5H0V16h11z"/><path fill="#EEE" d="M0 21.5V27c0 2.209 1.791 4 4 4h5.444v-9.5H0zm16.5 0V31H32c2.209 0 4-1.791 4-4v-5.5H16.5z"/><path fill="#ED2939" d="M15 16V5h-4v11H0v4h11v11h4V20h21v-4z"/><path fill="#0065BD" d="M15 20v11h1.5v-9.5H36V20zm-4 0H0v1.5h9.444V31H11z"/></svg>
  )
}

export default FlagFaroeIslands