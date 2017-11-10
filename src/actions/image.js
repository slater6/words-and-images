import firebase from '../services/firebase'
import {getImagesByQuery,getImageById} from '../services/pixabay'
import {getNewWord} from './word'

export const LOAD_RANDOM_IMAGE = 'LOAD_RANDOM_IMAGE'
export const LOAD_LOCAL_IMAGE = 'LOAD_LOCAL_IMAGE'
export const LOAD_REMOTE_IMAGE = 'LOAD_REMOTE_IMAGE'
export const SAVE_IMAGE = 'SAVE_IMAGE'

export const getRemoteImages = (word) => {

    return (dispatch) => {
        getImagesByQuery(word)
        .then((response)=> {
            
            dispatch({
                type:LOAD_REMOTE_IMAGE,
                payload:response['data']['hits']
            })

            dispatch(loadRandomImage())
        })
       
    } 
}

export const loadRandomImage = () => {
    return (dispatch) => {
        dispatch({
            type:LOAD_RANDOM_IMAGE
        })
    } 
}

export const getLocalImage = (imgId) => {
    return (dispatch) => {
        getImageById(imgId)
        .then((response) => {
            dispatch({
                type:LOAD_LOCAL_IMAGE,
                payload : response['data']['hits'][0]['fullHDURL']
            })
        })
        .catch()
        
    } 
}

export const saveImage = (wordId,imgId) => {
    return (dispatch) => {
        firebase
        .database()
        .ref()
        .child('words/' + wordId)
        .update({imgId:imgId})
        .then(() => {
        
            dispatch({
                type: SAVE_IMAGE,
                payload : {
                    wordId,
                    imgId
                }
            })

            dispatch(getNewWord())
        });
        
    }
}
