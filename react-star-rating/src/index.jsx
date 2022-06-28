import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { FaStar } from 'react-icons/fa';


const createArray = (length) => [
  ...Array(length)
];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
}

function StarRating({ totalStars = 5} ) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
    <div className='stars'>
    {createArray(totalStars).map((n, i) => {
    return <Star key={i} selected={ selectedStars > i } onSelect={() => setSelectedStars(i + 1)} />
   })}
  </div>
  <p>{selectedStars} / {totalStars}</p>
    </>
  )
}

function App() {
  return <StarRating totalStars={8} />
}


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
