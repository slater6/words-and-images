import axios from 'axios'
import firebase from '../services/firebase'
import {getNewWord} from './word'

export const LOAD_RANDOM_IMAGE = 'LOAD_RANDOM_IMAGE'
export const LOAD_LOCAL_IMAGE = 'LOAD_LOCAL_IMAGE'
export const LOAD_REMOTE_IMAGE = 'LOAD_REMOTE_IMAGE'
export const SAVE_IMAGE = 'SAVE_IMAGE'

export const getRemoteImage = (word) => {
    const url = 'https://pixabay.com/api/';

    const params = {
        params:{
            key:'6728037-ebcb9080c79881fc16f7f00a2',
            q:  word.join('').toLowerCase(),
            safesearch:true,
            per_page:100
        }
    }

    return (dispatch) => {
        axios.get(url,params).then((response)=> {
            console.log(response);
            
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

export const getLocalImage = (imgUrl) => {
    return (dispatch) => {
        dispatch({
            type:LOAD_LOCAL_IMAGE,
            payload : imgUrl
        })
    } 
}

export const saveImage = (wordId,imageSrc) => {
    return (dispatch) => {
        firebase
        .database()
        .ref()
        .child('words/' + wordId)
        .update({imgSrc:imageSrc})
        .then(() => {
            dispatch(getNewWord())
        });
        
    }
}
