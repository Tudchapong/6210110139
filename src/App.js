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
  var word       = this.in.word;
  word  = event.target.value;

  this.setState({ word: word });
}

  render() {
    return (
      <div>
        <label>
          Word input: 
        </label>
        <input type="text" value={this.in.word} onChange={this.handleWordChanged.bind(this)}/>
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
