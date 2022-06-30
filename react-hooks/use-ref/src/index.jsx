import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';



function App() {
  const sound = useRef()
  const color = useRef()

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`)
    sound.current.value = "";
    color.current.value = "";
  }


  return (
    <>
      <form action="" onSubmit={submit}>
        <input ref={sound} type="text" placeholder='Sound...' />
        <input ref={color} type="color" />
        <button>ADD</button>
      </form>
    </>
  )
}



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
