"use client"
import { useState } from "react";

export default function Sidebar() {
  const [Class , setClass] = useState("h-screen hidden md:block w-64 bg-gray-900 text-white p-4 fixed left-0 top-0")


  const removeClass = (classNameToRemove: string) => {
    setClass((prev) =>
      prev
        .split(" ")
        .filter((className) => className !== classNameToRemove)
        .join(" ")
    );
  };

  const addClass = (newClass: string) => {
    setClass((prev) => (!prev.includes(newClass) ? `${prev} ${newClass}` : prev));
  };


  return (<div>
<div>
  <button onClick={() => removeClass("hidden")} >OPEN</button>
</div>
    <div className= {Class}>
      <div className="flex justify-between">
      <h1 className="text-xl font-bold mb-6">Sidebar</h1>
      <button onClick={() => addClass("hidden")} className="">X</button>
      </div>
      
      <ul className="space-y-4">
        <li>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">Home</a>
        </li>
        <li>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">About</a>
        </li>
        <li>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">Services</a>
        </li>
        <li>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">Contact</a>
        </li>
      </ul>
    </div>
  </div>
  );
}

