import React from 'react';
import {ImageWrapper,ImageColumn} from '../styles/image'
import {connect} from 'react-redux'
import {
   Image
} from 'react-bootstrap'


const ImageOverlay = (props) => (
    <ImageWrapper isVisible={props.image.image}>
        <ImageColumn>
            <Image src={props.image.image.url} style={{width:'100vw',height:'100vh'}} responsive />
        </ImageColumn>
    </ImageWrapper>
)

export default connect(
    (state) => ({
      image:state.image
    }),
    {}
  )(ImageOverlay)