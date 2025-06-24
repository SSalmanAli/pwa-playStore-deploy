"use client";

import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleMinus() {
    setCount(count - 1);
  }

  return (
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
          onClick={handleMinus}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Count;
