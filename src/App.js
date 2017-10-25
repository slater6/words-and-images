import React, { Component } from 'react';
import Word from './components/word'
import Image from './components/image'
import Header from './components/header/header'

class App extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <Word></Word>
        <Image></Image>
      </div>
     
    )
  }
}

export default App;