import { useState } from 'react';
import Joke from './Joke';

function App() {
  const [userQuery, setUserQuery] = useState('');

  const SearchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      SearchQuery();
    }
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
          onKeyDown={handleKeyPress}
        />
        <button onClick={SearchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
    </div>
  );
}

export default App;
