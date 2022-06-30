import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';


const initialState = {
  message: 'hi'
};

function reducer(state, action) {
  switch(action.type) {
    case "yell":
    return {
      message: `HEY!! I just said ${state.message}`
    }
    case "whisper": {
      return {
        message: `excuse me`
      }
    }
  }
}


function App() {
    const [state, dispatch] = useReducer(
    reducer,
    initialState
    );
  return (
    <>
  <h1>message: {state.message}</h1>
  <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
  <button onClick={() => dispatch({ type: "whisper" })}>whisper</button>
    </>
  )
}


// function App() {
//     const [number, setNumber] = useReducer(
//     (number , newNumber) => number + newNumber,
//     0
//     );
//   return <h1 onClick={() => setNumber(1)}>{number}</h1>
// }



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
