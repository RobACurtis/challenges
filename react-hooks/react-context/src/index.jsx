import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app";


const TreesContext = createContext();

export const useTrees = () => useContext(TreesContext);
const trees = [
  {id: "1", type: "maple"},
  {id: "2", type: "oak"},
  {id: "3", type: "palm"},
  {id: "4", type: "coconut"}
];


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <TreesContext.Provider value={ { trees } }>
      <App />
  </ TreesContext.Provider >
);
