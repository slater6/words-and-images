import {
    NEW_WORD,
    LETTER_CHECK, 
    WORD_CHECK_COMPLETED,
    FETCH_WORDS,
    SAVE_IMAGE
} from '../actions'

const wordState = {
    id:[],
    imgId:null,
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

    switch(action.type){
        case LETTER_CHECK:
           
            reduceWord.shift()
            
            progressWord.push(action.payload)
            
            return {
                ...state,
                reduced : reduceWord,
                progress : progressWord
            }
        
        case WORD_CHECK_COMPLETED:
           
            return {
                ...state,
                completed : true
            }
               
        
        case NEW_WORD:
            let randomWordId = checkRandomIdValidity(state.words,state.wordCount);
            let randomWord = state.words[randomWordId]['word'].toUpperCase()
            let randomImageId = state.words[randomWordId]['imgId'] !== undefined ? state.words[randomWordId]['imgId'] : null;
        
            return {
                ...state,
                id: randomWordId,
                imgId:randomImageId,
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

        case SAVE_IMAGE:
            const updateWords = state.words.map((word,index) => {
                
                if(index === action.payload.wordId){
                    return { ...word, imgId : action.payload.imgId }
                }
                
                return word
            })
            
            return {
                ...state,
                words : updateWords,
               
            }

            
        default:
                return state;
    }
       
}