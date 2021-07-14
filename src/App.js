import React from 'react';
import React, { useEffect,useState } from 'react';
import './App.css';
//import WordCard from './WordCard';

const word = [
  {id:1,char: "R"},
  {id:2,char: "e"},
  {id:3,char: "l"},
  {id:4,char: "o"},
  {id:5,char: "a"},
  {id:6,char: "d"}
];

const pairword = [...word,...word];

function flipCard(index) {
  setOpenedCard((opened) => [...opened, index]);
}

  function App() {
    return (
      <div>
      {
        //<WordCard value="hello"/>
      }
      </div>
    );
  }

export default App;
