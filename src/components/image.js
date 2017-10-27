import React from 'react';
import {ImageWrapper,ImageColumn} from '../styles/image'
import {connect} from 'react-redux'
import {saveImage} from '../actions'
import {
   Button,
   Image
} from 'react-bootstrap'


const btnSave = (props) => {
    if(props.auth.isAuth){
        return <Button bsStyle="primary" style={{position:'absolute',right:'0',bottom:'0'}} onClick={ () => props.saveImage(props.word.id,props.image.image.id)}>Save Image</Button>
    }
    
}

const ImageOverlay = (props) => (
    <ImageWrapper isVisible={props.image.image}>
        <ImageColumn>
            <Image src={props.image.image.url} style={{width:'100vw',height:'100vh'}} responsive />
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
  )(ImageOverlay)