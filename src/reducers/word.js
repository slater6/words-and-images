import {NEW_WORD,LETTER_CHECK, WORD_CHECK_COMPLETED,FETCH_WORDS} from '../actions'

const wordState = {
    id:[],
    imgSrc:null,
    words:[],
    wordCount:0,
    selected:[],
    reduced:[],
    progress:[],
    completed:false
}

const checkRandomIdValidity = (arr,length) => {
  let randomNumber = Math.floor(Math.random() * length);

  let keys = [...arr.keys()];

  let isValidId = (keys.find((item) => item === randomNumber))

  if(isValidId >= 0 && arr[randomNumber]){
    return randomNumber;
  }

   return checkRandomIdValidity(arr,length)

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
            let randomWordId = checkRandomIdValidity(state.words,state.wordCount);
            console.log( randomWordId)
            let randomWord = state.words[randomWordId]['word'].toUpperCase()
            let randomImage = state.words[randomWordId]['imgSrc'] !== undefined ? state.words[randomWordId]['imgSrc'] : null;
        
            return {
                ...state,
                id: randomWordId,
                imgSrc:randomImage,
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