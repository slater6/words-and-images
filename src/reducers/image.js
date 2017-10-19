import {NEW_WORD,LOAD_REMOTE_IMAGE,LOAD_LOCAL_IMAGE,LOAD_RANDOM_IMAGE} from '../actions'

const imageState = {
    images: [],
    image:[]
}

export default (state = imageState,action) => {
    
    switch(action.type){
        
        case LOAD_REMOTE_IMAGE:
            return {...state,images:action.payload}

        case LOAD_LOCAL_IMAGE:
            return {
                ...state,
                image: {
                    webformatURL : action.payload
                }
            }

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