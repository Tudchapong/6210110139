import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.word = {props}
  }

  function App() {
    return (
      <div>
        <label>
          Word input: 
        </label>
        <input type="text" value={this.word}/>
      </div>
    );
  }
}

  /*function App() {
    return (
      <div>
      {
        //<WordCard value="hello"/>
      }
      </div>
    );
  }

export default App;*/
