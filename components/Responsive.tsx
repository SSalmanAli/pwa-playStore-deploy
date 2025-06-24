'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [text, setText] = useState('Hello, World!');

  useEffect(() => {
    const updateText = () => {
      if (window.innerWidth <= 768) {
        setText('I am Iron Man');
      } else {
        setText('Hello, World!');
      }
    };

    updateText(); // Run on mount
    window.addEventListener('resize', updateText);
    
    return () => window.removeEventListener('resize', updateText);
  }, []);

  return <h1>{text}</h1>;
}
