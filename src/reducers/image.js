import {NEW_WORD,LOAD_REMOTE_IMAGE,LOAD_LOCAL_IMAGE,LOAD_RANDOM_IMAGE} from '../actions'

const imageState = {
    images: [],
    image:[]
}

const getBiggerImage = (imgUrl) =>{
    return imgUrl.replace('_640','_960')
} 

export default (state = imageState,action) => {
    
    switch(action.type){
        
        case LOAD_REMOTE_IMAGE:
            return {...state,images:action.payload}

        case LOAD_LOCAL_IMAGE:
            return {
                ...state,
                image: {
                    url : action.payload
                }
            }

        case LOAD_RANDOM_IMAGE:
            const imageCount = state.images.length
            const image = state.images[Math.floor(Math.random() * imageCount)];
            return {
                ...state,
                image: {
                    id : image.id_hash,
                    url : image.fullHDURL
                } 
            }
           
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