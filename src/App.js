import { useState } from 'react';

function App() {
  const [userQuery, setUserQuery] = useState('');

  const SearchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  const updateUserQuery = (e) => {
    setUserQuery(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello Jason</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
        />
        <button onClick={SearchQuery}>Search</button>
      </div>
    </div>
  );
}

export default App;
