import {LETTER_CHECK, WORD_CHECK_COMPLETED} from '../actions'

const wordState = {
    selected:['a','p','p','l','e'],
    reduced:['a','p','p','l','e'],
    progress:[],
    completed:false
}

export default (state = wordState,action) => {
    
    let reduceWord = state.reduced;
    let progressWord = state.progress;
    let selectedWord = state.selected.toString().toUpperCase();

    switch(action.type){
        case LETTER_CHECK:
            
            if(reduceWord[0].toUpperCase() === action.payload){
                reduceWord.shift()
                progressWord.push(action.payload)
            }

            return {
                ...state,
                reduced : reduceWord,
                progress : progressWord
            }
        
        case WORD_CHECK_COMPLETED:
           
            progressWord = state.progress.toString().toUpperCase();

            if(selectedWord === progressWord){
                return {
                    ...state,
                    completed : true
                }
            }

            return state
            
        default:
                return state;
    }
       
}