import React from 'react';
import Note from './Note';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Note title="Jenkins" date="21/09/1997" />
        <Note title="Mengha" date="1/09/1997" />
        <Note title="Chenga" date="2/09/1997" />
      </div>
      <div className="content">

      </div>
    </div>

  );
}

export default App;
