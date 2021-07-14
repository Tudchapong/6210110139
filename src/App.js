import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';
import WordCard from './WordCard';

/*function App() {
  const [data,setData]=useState(null)
  const [print,setPrint]=useState(false)
  
    function getData(val)
    {
      console.warn(val.target.value)
      setData(val.target.value)
      setPrint(false)
    }
    return (
      <div className="App">
       {
         print?
         <h1> {data}</h1>
         :null
       }
      <input type="text" onChange={getData} />
      <button onClick={()=>setPrint(true)} >Print Data</button>
      </div>
    );
  }
  
  export default App;*/

/*export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.in = {word: props.word}
  }
  
  handleWordChanged(event) {
  var word = this.in.word;
  word  = event.target.value;

  this.setState({ word : word });
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
}*/

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
