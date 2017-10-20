import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
    getNewWord,
    loadWords,
    checkLetter,
    checkWordCompleted,
    deleteWord,
    getRemoteImage,
    loadRandomImage,
    getLocalImage
} from '../actions'
import {
    Header,
    WordDisplayer,
    Highlighter,
    Button,
    ImageIndicator
} from '../styles/word'


class Word extends Component{
    
    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress);
        this.props.loadWords();
    }
    
    handleKeyPress = (event) => {
        
        switch(event.keyCode){
            case 13:
                this.props.getNewWord() 
                break;

            case 32:
                if(this.props.word.completed){
                    this.props.loadRandomImage()
                }
                break;
            
            default:
                
                this.props.checkLetter(event.key.toUpperCase())
                this.props.checkWordCompleted()

                if(!this.props.word.completed){
                    return;
                }
                

                if(!this.props.word.imgSrc){
                    this.props.getRemoteImage(this.props.word.selected);  
                    return;
                }

                this.props.getLocalImage(this.props.word.imgSrc);  
                    
                
                break;
        }
       
        
      
    }
    
    handleLabel = () => {
        return this.props.word.selected.map((letter, i) => {

            let lastIndex = this.props.word.progress.length - 1;
            
            if(i === lastIndex){
                return <Highlighter active key={i}>{letter}</Highlighter>
            }
        
            if(letter === this.props.word.progress[i]){
                return <Highlighter highlight key={i}>{letter}</Highlighter>
            }

            return <Highlighter key={i}>{letter}</Highlighter>
        })

    }

    handleDelete = () => {
        this.props.deleteWord(this.props.word.id)
    }
    
    render() {
        return (
            <Header>
                <WordDisplayer>
                    {this.handleLabel()}
                    <ImageIndicator isVisible={this.props.word.imgSrc} src="/img/icon-image.png"></ImageIndicator>
                </WordDisplayer>
                <Button danger onClick={this.handleDelete}>x</Button>
            </Header>
        )
    }
}

export default connect(
    (state) => ({
      word:state.word
    }),
    {
        getNewWord,
        loadWords,
        checkLetter,
        checkWordCompleted,
        getRemoteImage,
        getLocalImage,
        deleteWord,
        loadRandomImage
    }
  )(Word)