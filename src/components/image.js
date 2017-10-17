import React from 'react';
import {ImageWrapper,ImageDisplayer} from '../styles/image'

export const Image = (props) => (
    <ImageWrapper>
        <ImageDisplayer src={props.src}></ImageDisplayer>
    </ImageWrapper>
)