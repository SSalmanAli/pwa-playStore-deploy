"use client"
import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [input , setinput] = useState("")
    const [submit , setsubmit] = useState("")
    
    const handlesubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setsubmit(input)

    }

    return (
    <div>
        <form className='text-black' onSubmit={handlesubmit}>
            <input type="text" value={input} onChange={(e) => setinput(e.target.value)} />
            <button type="submit">submit</button>
        </form>
        {submit && <p className="mt-4">Submitted Name: {submit}</p>} 
    </div>
  )
}

export default Form