import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';
import WordCard from './WordCard';

//const word = "Hello";

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.in = {word: props.word}
  }
  
  handleWordChanged(event) {
  let word = this.in.word;
  word  = event.target.value;

  this.setState({ word: word });
}

handleButtonClicked() {
  console.log(this.in.word);
}

  render() {
    return (
      <div>
        <label>
          Word input: 
        </label>
        <input type="const" value={this.in.word} onChange={this.handleWordChanged.bind(this)}/>
        <hr/>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Save 
        </button>
        <WordCard value={this.in.word}/>
      </div>
    );
  }
}

/*  function App() {
    return (
      <div>
      {
        <WordCard value={word}/>
      }
      </div>
    );
  }

export default App;*/
