import React, {useState} from "react";

export default function Search() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState({});
  const [slips, setSlips] = useState([]);
  const url = 'https://api.adviceslip.com/advice/search/' + query;
  const handleClick = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setSlips(data.slips);
  };

  const notFound = data.message;

  return (
    <div>
      <input
        type="text"
        placeholder="Write your query"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button class="btn btn-2" onClick={handleClick}>Search</button>
      <div class="box-wrapper">
        {
          (!slips) ? notFound.text
          : slips.map((slip) => {
            const { id, advice } = slip;
            return <div class="box-1" key={id}>{advice}</div>;
          })
        }
      </div>
    </div>
  );
}