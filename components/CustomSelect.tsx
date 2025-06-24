"use client";
import { useState, useEffect } from "react";

export default function CustomSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");
  const [isMobile, setIsMobile] = useState(false);

  const options = ["Option 1", "Option 2", "Option 3"];

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-64 mx-auto mt-10">
      {isMobile ? (
        <>
          {/* Mobile Custom Select */}
          <button
            onClick={() => setIsOpen(true)}
            className="w-full bg-gray-700 text-white py-2 px-4 rounded-md text-left"
          >
            {selected}
          </button>

          {/* Background Overlay (Doesn't block options now) */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          {/* Sliding Bottom Sheet */}
          <div
            className={`fixed bottom-0 left-0 w-full bg-white rounded-t-2xl p-4 h-fit max-h-[300px] transition-transform duration-300 z-50 ${
              isOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <h3 className="text-lg font-semibold text-center">Select an option</h3>
            <ul className="mt-4">
              {options.map((option) => (
                <li
                  key={option}
                  className="py-3 px-4 text-center text-gray-800 hover:bg-gray-200 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents click from closing the modal
                    setSelected(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 py-2 bg-gray-700 text-white rounded-md"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        // Desktop Default Select Dropdown
        <select
          className="w-full bg-gray-700 text-white py-2 px-4 rounded-md"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option disabled>Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
