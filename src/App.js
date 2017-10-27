import React, { Component } from 'react';
import Word from './components/word'
import ImageOverlay from './components/image'
import Header from './components/header/header'

class App extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <Word></Word>
        <ImageOverlay/>
      </div>
    )
  }
}

export default App;