import {NEW_WORD,LETTER_CHECK, WORD_CHECK_COMPLETED,FETCH_WORDS} from '../actions'

const wordState = {
    words:[],
    wordCount:0,
    selected:[],
    reduced:[],
    progress:[],
    completed:false
}

export default (state = wordState,action) => {
    
    let reduceWord = state.reduced
    let progressWord = state.progress
    let selectedWord = state.selected

    switch(action.type){
        case LETTER_CHECK:
           
            if(reduceWord[0] === action.payload){
                reduceWord.shift()
                progressWord.push(action.payload)
            }

            return {
                ...state,
                reduced : reduceWord,
                progress : progressWord
            }
        
        case WORD_CHECK_COMPLETED:
           
            if(selectedWord.toString() === progressWord.toString()){
                return {
                    ...state,
                    completed : true
                }
            }

            return state
           
        
        case NEW_WORD:
            let randomWord = state.words[Math.floor(Math.random() * state.wordCount)]['word'].toUpperCase()
        
            return {
                ...state,
                selected : [...randomWord],
                reduced:[...randomWord],
                progress:[],
                completed:false
            }

        case FETCH_WORDS:
            return {
                ...state,
                words : action.payload,
                wordCount: action.payload.length
            }
          

        default:
                return state;
    }
       
}