import React from 'react';

/**
 *
 * @param {string} username
 * @returns jsx.component
 */
function App({ username }: { username?: string }) {
  return (
    <div className="App">
      <h1>Stellar UI {username}</h1>
    </div>
  );
}

export default App;
