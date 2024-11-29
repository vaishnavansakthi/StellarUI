import React from 'react';
import { Button } from './components/Button/Button';

/**
 *
 * @param {string} username
 * @returns jsx.component
 */
function App({ username }: { username?: string }) {
  return (
    <div className="App">
      <h1>Stellar UI {username}</h1>
      <Button
        label={'Hello'}
        onClick={() => {
          console.log('clicked');
        }}
      ></Button>
    </div>
  );
}

export default App;
