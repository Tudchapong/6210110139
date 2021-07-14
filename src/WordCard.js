import React, { useEffect,useState } from 'react';
import CharacterCard from './CharacterCard';
import _, { attempt } from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toLowerCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false 
    }
}
export default function WordCard(props){
    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c =>{
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('Correct Answer')
                setState({...state, completed: true})
            }else{
                console.log('reset, next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
                if(state.attempt == 4 ){
                    console.log('GAME OVER')
                    setState({...state, completed: true})
                }else{
                    console.log('Hint : word must has meaning ') 
                }
            }
        }
        console.log(guess)

    } 
    return (
    <div>
        { 
        state.chars.map((c, i) => 
            <CharacterCard value={c} key={i} activationHandler = {activationHandler} attempt={state.attempt}/>) 
        }
    </div>
    );
}