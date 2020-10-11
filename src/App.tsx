import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import 'minireset.css'
import './App.css';
import { ImageArea } from './features/image-area';

function App() {
  return (
    <div className="App">
      <ImageArea />
    </div>
  );
}

export default App;
