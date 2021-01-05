import React, { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [ positions, setPositions ] = useState({ x: 0, y: 0})

   useEffect(()=> {
      const updateMouse = (e) => {

        setPositions({ x: e.clientX, y: e.clientY })
      }

      document.addEventListener('mousemove', updateMouse)

      return () => document.removeEventListener('mousemove', updateMouse)
   }, [])

   return positions
}


function Custom () {
  const postions = useMousePosition()
  return (
    <div>
      { postions.x} * { postions.y }
    </div>
  )
}

export default Custom