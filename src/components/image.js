import React from 'react';
import {ImageWrapper,ImageColumn,ImageDisplayer} from '../styles/image'
import {Button} from '../styles/word'
import {connect} from 'react-redux'
import {saveImage} from '../actions'


const btnSave = (props) => {
    if(props.auth.isAuth){
        return <Button primary onClick={ () => props.saveImage(props.word.id,props.image.image.webformatURL)}>Save Image</Button>
        
    }
    
}

const Image = (props) => (
    <ImageWrapper isVisible={props.image.image}>
        <ImageColumn>
            <ImageDisplayer src={props.image.image.webformatURL}></ImageDisplayer>
            { btnSave(props )}
        </ImageColumn>
    </ImageWrapper>
)

export default connect(
    (state) => ({
      word:state.word,
      image:state.image,
      auth:state.auth
    }),
    {
        saveImage
    }
  )(Image)