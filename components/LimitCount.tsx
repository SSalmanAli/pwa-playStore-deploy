"use client"
import React from 'react'
import { useState } from 'react'
const Limitcounter = () => {

  const [count , setcount] = useState(1)
  
  const handleAdd = () => {
    if (count < 10){
      setcount(count + 1)
    }
  }

  const handlesubtract = () => {
    if (count > 0){
      setcount(count - 1)
    }
  }
  
  return (
<div>
      <div className="w-full flex flex-col items-center gap-4">
      <div className="bg-slate-500 text-white p-4 rounded-md">Count: {count}</div>

      <div className="flex gap-4">
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Increase
        </button>
        <button
          onClick={handlesubtract}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Decrease
        </button>
      </div>
    {count === 0 && <p className="text-yellow-500">Minimum limit reached</p>}
    {count === 10 && <p className="text-yellow-500">Maximum limit reached</p>}
    </div>
    </div>
  )
}

export default Limitcounter
