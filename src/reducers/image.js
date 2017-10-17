import {NEW_WORD,WORD_COMPLETED} from '../actions'

const imageState = {
    src:null
}

export default (state = imageState,action) => {
    
    switch(action.type){
        
        case WORD_COMPLETED:
            console.log(action.payload);
            let randomImageSrc = action.payload[Math.floor(Math.random() * 20)]['webformatURL']
           
            return {...state,src:randomImageSrc}
           
        
        case NEW_WORD:
            

            return {
                ...state,
                src : null
            }


        default:
                return state;
    }
       
}