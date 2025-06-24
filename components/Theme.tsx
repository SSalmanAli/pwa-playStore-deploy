"use client"
import React, { useState } from 'react'

const Theme = () => {

  const [theme , setTheme] = useState(0)

  const handleTheme = () => {
    setTheme((prev) => (prev === 0 ? 1 : 0 ))
  }

  return (
    <div className={`w-screen h-screen flex justify-center items-center ${theme ? "bg-white text-black" : "bg-black text-white" }`}>
      <button onClick={handleTheme} >change bg</button>

    </div>
  )
}

export default Theme