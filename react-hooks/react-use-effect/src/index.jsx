import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { FaStar } from 'react-icons/fa';

function App() {
  const [name, setName] = useState("Rob");
  const [admin, setAdmin] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  }, [name]);
  useEffect(() => {
    console.log('hi')
  }, [admin]);

    useEffect(() => {
      fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(setData);
    }, [])

   const usersList = data ? data.map((user) => <li key={user.id}>{user.login}</li>) : null
  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName("Will")}>Change Winner</button>
      <p>  { admin ? "logged in" : "not logged in" } </p>
      <button onClick={() => setAdmin(true)}>Log In</button>

      <p>Users</p>
      <ul>{usersList}</ul>
      <button onClick={() => setData([])}> remove users</button>
    </section>
  )
}



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
