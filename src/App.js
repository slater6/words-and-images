import React, { Component } from 'react';
import {connect} from 'react-redux'
import {checkLetter,checkWordCompleted} from './actions'
import './App.css';

class App extends Component {
  
  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (event) => {

    let pressedKey = event.key.toUpperCase()

    if(this.props.word.completed){
      return
    }

    
    this.props.checkLetter(pressedKey)
    this.props.checkWordCompleted()
  }

  handleLabel = () => {
    let label = this.props.word.selected.map( (letter, i) => {
    
      if(letter.toUpperCase() === this.props.word.progress[i]){
        return <span key={i} className="completed">{letter}</span>
      }

      return <span key={i}>{letter}</span>
    })

    return label
  }
  
  render() {
    return (
      <div className="label">
        <h1>{this.handleLabel()}</h1>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    word:state.word
  }),
  {checkLetter,checkWordCompleted}
)(App)
