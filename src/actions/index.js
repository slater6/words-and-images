import firebase from '../services/firebase'
import axios from 'axios'

export const LETTER_CHECK = 'LETTER_CHECK'
export const WORD_CHECK_COMPLETED = 'WORD_CHECK_COMPLETED'
export const WORD_COMPLETED = 'WORD_COMPLETED'
export const NEW_WORD = 'NEW_WORD'
export const FETCH_WORDS = 'FETCH_WORDS'


export const loadWords = () => {
    return (dispatch) => {
        firebase
        .database()
        .ref('words')
        .on('value', snapshot => {
            dispatch({
                type:FETCH_WORDS,
                payload:snapshot.val()
            })
            dispatch(getNewWord())
        })
        
    } 
}

export const checkLetter = (key) => {
    return (dispatch) => {
        dispatch({
            type:LETTER_CHECK,
            payload:key
        })
    } 
}

export const checkWordCompleted = () => {
    return (dispatch) => {
        dispatch({
            type:WORD_CHECK_COMPLETED
        })
    } 
}

export const wordCompleted = (word) => {
    const url = 'https://pixabay.com/api/';

    const params = {
        params:{
            key:'6728037-ebcb9080c79881fc16f7f00a2',
            q:  word.join('').toLowerCase(),
            safesearch:true
        }
    }

    return (dispatch) => {
        axios.get(url,params).then((response)=> {
            dispatch({
                type:WORD_COMPLETED,
                payload:response['data']['hits']
            })
        })
       
    } 
}

export const getNewWord = () => {
    return (dispatch) => {
        dispatch({
            type:NEW_WORD
        })
    } 
}