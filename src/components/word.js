import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getNewWord,loadWords,checkLetter,checkWordCompleted,wordCompleted} from '../actions'
import {Header,WordDisplayer,Highlighter} from '../styles/word'


class Word extends Component{
    
    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress);
        this.props.loadWords();
    }
    
    handleKeyPress = (event) => {

        let pressedKey = event.key.toUpperCase()

        if(this.props.word.completed){
            this.props.wordCompleted(this.props.word.selected);
            return
        }

        this.props.checkLetter(pressedKey)

        this.props.checkWordCompleted()
    }
    
    handleLabel = () => {
        return this.props.word.selected.map( (letter, i) => {
        
            if(letter.toUpperCase() === this.props.word.progress[i]){
                return <Highlighter highlight key={i}>{letter}</Highlighter>
            }

            return <Highlighter key={i}>{letter}</Highlighter>
        })

    }
    
    render() {
        return (
            <Header>
                <WordDisplayer>
                    {this.handleLabel()}
                </WordDisplayer>
            </Header>
        )
    }
}

export default connect(
    (state) => ({
      word:state.word
    }),
    {getNewWord,loadWords,checkLetter,checkWordCompleted,wordCompleted}
  )(Word)