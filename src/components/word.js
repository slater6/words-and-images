import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
    getNewWord,
    loadWords,
    checkLetter,
    checkWordCompleted,
    getRemoteImages,
    loadPreviousImage,
    loadNextImage,
    getLocalImage
} from '../actions'
import {
    WordHeader,
    WordDisplayer,
    Highlighter,
    ImageIndicator
} from '../styles/word'

class Word extends Component{
    
    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress);
        this.props.loadWords();
    }
    
    handleKeyPress = (event) => {

        if(this.props.auth.inputsFocused){
            return;
        }
        
        switch(event.keyCode){
            case 13:
                this.props.getNewWord() 
                break;

            case 39:
                if(this.props.word.completed){
                    this.props.loadNextImage()
                }
                break;

            case 37:
                if(this.props.word.completed){
                    this.props.loadPreviousImage()
                }
                break;
            
            default:
                
                this.props.checkLetter(event.key.toUpperCase())
                this.props.checkWordCompleted()

                if(!this.props.word.completed){
                    return;
                }
                

                if(!this.props.word.imgId){
                    this.props.getRemoteImages(this.props.word.selected);  
                     return;
                }

                this.props.getLocalImage(this.props.word.imgId);  
                    
                break;
        }
       
        
      
    }
    
    handleLabel = () => {
        return this.props.word.selected.map((letter, i) => {

            let lastIndex = this.props.word.progress.length - 1;

            if(this.props.word.progress.toString() === this.props.word.selected.toString()){
                return <Highlighter completed key={i}>{letter}</Highlighter>
            }
            
            if(i === lastIndex){
                return <Highlighter active key={i}>{letter}</Highlighter>
            }
        
            if(letter === this.props.word.progress[i]){
                return <Highlighter highlight key={i}>{letter}</Highlighter>
            }

            return <Highlighter key={i}>{letter}</Highlighter>
        })

    }

  
    
    render() {
        
        return (
            <WordHeader>
                <WordDisplayer>
                    {this.handleLabel()}
                    <ImageIndicator isVisible={this.props.word.imgId} src="/img/icon-image.png"></ImageIndicator>
                </WordDisplayer>
            </WordHeader>
        )
    }
}

export default connect(
    (state) => ({
      word:state.word,
      auth:state.auth
    }),
    {
        getNewWord,
        loadWords,
        checkLetter,
        checkWordCompleted,
        getRemoteImages,
        getLocalImage,    
        loadPreviousImage,
        loadNextImage
    }
  )(Word)