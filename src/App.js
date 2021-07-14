import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Reload";

 function App() {
    return (
      <div>
      {
        <WordCard value={word}/>
      }
      </div>
    );
  }

export default App;
