"use client"
import { useState } from "react";

export default function Toggle() {
const [toggle , setoggle] = useState(0)

// const handletoggle = () => {
//   if (toggle === 0){
//    setoggle(1) 
//   }
//   else{
//     setoggle(0)
//   }
// }

const handletoggle = () => {
setoggle((prev) => (prev === 0 ? 1 : 0))
}

  return (
<div className="w-full h-full ">

  <div className="w-full h-screen justify-center items-center flex">
    <button onClick={handletoggle} className="bg-white  text-black">change bg</button>
    <p>{toggle}</p>
  </div>
</div>  
);
}
