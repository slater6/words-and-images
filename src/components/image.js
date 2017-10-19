import React from 'react';
import {ImageWrapper,ImageDisplayer} from '../styles/image'
import {Button} from '../styles/word'
import {connect} from 'react-redux'
import {saveImage} from '../actions'

const Image = (props) => (
    <ImageWrapper>
        <ImageDisplayer src={props.image.image.webformatURL}></ImageDisplayer>
        <Button onClick={ () => props.saveImage(props.word.id,props.image.image.webformatURL)}>Save Image</Button>
    </ImageWrapper>
)

export default connect(
    (state) => ({
      word:state.word,
      image:state.image
    }),
    {
        saveImage
    }
  )(Image)