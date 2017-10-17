import React, { Component } from 'react';
import Word from './components/word'
import {Image} from './components/image'
import {connect} from 'react-redux'

class App extends Component {

  render() {
    return (
      <div>
        <Word></Word>
        <Image src={this.props.image.src}></Image>
      </div>
     
    )
  }
}

export default connect(
  (state) => ({
    word:state.word,
    image:state.image
  })
)(App)