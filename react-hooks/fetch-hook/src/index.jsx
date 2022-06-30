import React from 'react';
import ReactDOM from 'react-dom/client';
import UseFetch from "./use-fetch";

function App({login}) {
  const { loading, data, error } = UseFetch(`https://api.github.com/users/${login}`);
  if (loading) return <h1>loading...</h1>;
  if (error)
  return (
  <pre>{JSON.stringify(error, null, 2)}</pre>
  );
  return (
    <div>
      <img src={data.avatar_url} alt="avatar image" />
      <h1>{data.login}</h1>
    </div>
  );
}


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App login="RobACurtis"/>);
