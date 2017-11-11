import {
    NEW_WORD,
    LOAD_REMOTE_IMAGE,
    LOAD_LOCAL_IMAGE,
    LOAD_RANDOM_IMAGE,
    LOAD_PREVIOUS_IMAGE,
    LOAD_NEXT_IMAGE,
    SEARCH_WORD
} from '../actions'

const imageState = {
    images: [],
    image:[],
    history:{
        currentIndex : 0,
        images:[]
    }
}

const getUniqueImage = (state) => {
    const imageCount = state.images.length
    const randomImage = state.images[Math.floor(Math.random() * imageCount)];

    const isImageAlreadyInHistory = state.history.images.find( image => {
        return image.id === randomImage.id_hash
    })

    if(!isImageAlreadyInHistory){
        return randomImage
    }

    return getUniqueImage(state)
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
            const randomImage = getUniqueImage(state)
            return {
                ...state,
                image: {
                    id : randomImage.id_hash,
                    url : randomImage.fullHDURL
                },
                history : {
                    currentIndex : state.history.currentIndex + 1,
                    images: state.history.images.concat({
                        id : randomImage.id_hash,
                        url : randomImage.fullHDURL
                    })
                } 
            }

        case LOAD_PREVIOUS_IMAGE:
            const currentIndexDecreased = state.history.currentIndex - 1
            const previousImage = state.history.images[currentIndexDecreased]    

            return {
                ...state,
                image:{
                    id : previousImage.id,
                    url : previousImage.url
                },
                history : {
                    ...state.history,
                    currentIndex : currentIndexDecreased,
                } 
            }
           

        case LOAD_NEXT_IMAGE:
            const currentIndexIncreased = state.history.currentIndex + 1
            const nextImage = state.history.images[currentIndexIncreased]    

            return {
                ...state,
                image:{
                    id : nextImage.id,
                    url : nextImage.url
                },
                history : {
                    ...state.history,
                    currentIndex : currentIndexIncreased,
                } 
            }
           
        case NEW_WORD: case SEARCH_WORD:
            
            return {
                ...state,
                images : [],
                image : []
            }


        default:
                return state;
    }
       
}