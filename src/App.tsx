import React from 'react';
import { Button } from './components';

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
        label={'TEXT'}
        onClick={() => {
          console.log('clicked');
        }}
        variant="text"
      ></Button>
      <Button
        label={'CONTAINED'}
        onClick={() => {
          console.log('clicked');
        }}
        variant="contained"
      ></Button>
    </div>
  );
}

export default App;
