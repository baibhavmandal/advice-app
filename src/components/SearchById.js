import React, { useState } from 'react';

import '../style.css';

export default function SearchById() {
  const [id, setId] = useState();
  const [slip, setSlip] = useState({});
  const url = '	https://api.adviceslip.com/advice/' + id;
  const handleClick = async () => {
    const box = document.getElementsByClassName('box-1');
    const response = await fetch(url);
    const data = await response.json();
    setSlip(data.slip);
    box[0].style.display = 'flex';
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search By Id"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button class="btn btn-2" onClick={handleClick}>
        Search
      </button>
      <div class="box-wrapper">
        <div class="box-1" style={{ display: 'none' }}>
          {slip.advice}
        </div>
      </div>
    </div>
  );
}
