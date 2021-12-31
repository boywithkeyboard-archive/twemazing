import React from 'react'

const ManShruggingMediumDarkSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#4289C1" d="M27 21H9c-2.209 0-4 1.791-4 4v11h26V25c0-2.209-1.791-4-4-4z"/><path fill="#2A6797" d="M10 27h1v9h-1z"/><path fill="#90603E" d="M4.702 26.495l-.283-.059h-.511c0-.058.023-.112.035-.169-.348-.215-.546-.625-.458-1.048.112-.542.643-.89 1.186-.779l2.091.433h1.676c.863 0 1.562.7 1.562 1.564V28H6.253s-1.481-.669-1.551-1.505z"/><path fill="#AF7E57" d="M0 25.655c0-.432.35-.782.781-.782l4.69.782h3.747c.432 0 .781.351.781.781V28H5L.781 26.437S0 26.087 0 25.655z"/><path fill="#4289C1" d="M4 36h6v-8H5z"/><path fill="#2A6797" d="M25 27h1v9h-1z"/><path fill="#90603E" d="M31.298 26.495l.283-.059h.511c0-.058-.023-.112-.035-.169.348-.215.546-.625.458-1.048-.112-.542-.642-.89-1.185-.779l-2.091.433h-1.676c-.863 0-1.562.7-1.562 1.564V28h3.747c-.001 0 1.48-.669 1.55-1.505z"/><path fill="#AF7E57" d="M36 25.655c0-.432-.35-.782-.781-.782l-4.691.782h-3.747c-.432 0-.781.351-.781.781V28h5l4.219-1.563s.781-.35.781-.782z"/><path fill="#4289C1" d="M32 36h-6v-8h5z"/><path fill="#AF7E57" d="M9 7v10c0 4.971 4.029 9 9 9s9-4.029 9-9V7H9z"/><path fill="#AF7E57" d="M10.847 13.715c0 1.58-.8 2.861-1.788 2.861s-1.788-1.281-1.788-2.861c0-1.58.801-2.861 1.788-2.861s1.788 1.281 1.788 2.861zm17.882 0c0 1.58-.8 2.861-1.788 2.861s-1.788-1.281-1.788-2.861c0-1.58.8-2.861 1.788-2.861s1.788 1.281 1.788 2.861z"/><path fill="#60352A" d="M18 .823c-7.019 0-10.139 4.684-10.139 8.588 0 3.903 1.343 4.986 1.56 3.903.78-3.903 3.12-5.101 3.12-5.101 4.68 3.904 3.9.781 3.9.781 4.679 4.684 2.34 0 2.34 0 1.56 1.562 6.239 1.562 6.239 1.562s.78 1.198 1.559 2.759c.78 1.562 1.56 0 1.56-3.903 0-3.905-3.9-8.589-10.139-8.589z"/><path fill="#915A34" d="M19 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5zm1.5 3.5H20c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.5c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path fill="#662113" d="M14 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1z"/></svg>
  )
}

export default ManShruggingMediumDarkSkinTone