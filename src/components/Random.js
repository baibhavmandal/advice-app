import React, { useState } from 'react';

export default function Random() {
  const [slip, setSlip] = useState({ advice: 'Search For Random Advice' });
  const url = 'https://api.adviceslip.com/advice';
  const handleClick = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setSlip(data.slip);
  };
  return (
    <div>
      <button class="btn btn-2" onClick={handleClick}>Click</button>
      <div>
        <div class="b0x-1">{slip.advice}</div>
      </div>
    </div>
  );
}