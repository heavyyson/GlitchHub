import React from 'react';
import Feed from './components/Feed';
import Upload from './components/Upload';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>$GLITCH – GlitchHub</h1>
      <Upload />
      <Feed />
    </div>
  );
}

export default App;