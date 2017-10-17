import {NEW_WORD,WORD_COMPLETED,LOAD_RANDOM_IMAGE} from '../actions'

const imageState = {
    images: [],
    image:[]
}

export default (state = imageState,action) => {
    
    switch(action.type){
        
        case WORD_COMPLETED:
            return {...state,images:action.payload}

        case LOAD_RANDOM_IMAGE:
            return {...state,image: state.images[Math.floor(Math.random() * 99)]}
           
        case NEW_WORD:
            
            return {
                ...state,
                images : [],
                image : []
            }


        default:
                return state;
    }
       
}