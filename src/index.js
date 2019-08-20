// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    return (
      <div>
<<<<<<< HEAD
        <label className="label" for="name">
=======
        <label class="label" for="name">
>>>>>>> c0c5a0e33627b77e51090bf8e1d0221ccd745cbc
          Enter name:
        </label>
        <input id="name" type="text"/>
        <button style={{ backgroundColor: 'blue', color: 'white' }}>
          Submit
        </button>
      </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
