import firebase from '../services/firebase'
import speak from '../services/speaker'
import {getSourceOfError, getSourceOfSuccess} from '../services/sounder'

export const LETTER_CHECK = 'LETTER_CHECK'
export const WORD_CHECK_COMPLETED = 'WORD_CHECK_COMPLETED'
export const NEW_WORD = 'NEW_WORD'
export const FETCH_WORDS = 'FETCH_WORDS'
export const PLAY_FAIL_SOUND = 'PLAY_FAIL_SOUND'

export const loadWords = () => {
    return (dispatch) => {
        firebase
        .database()
        .ref('words')
        .once('value', snapshot => {
            dispatch({
                type:FETCH_WORDS,
                payload:snapshot.val()
            })
            dispatch(getNewWord())
        })
        
    } 
}

export const checkLetter = (key) => {

    return (dispatch, getState ) => {

        const { word } = getState()
        const soundMeta = getSourceOfError()

        if(word.reduced[0] !== key){
            
            dispatch({
                type:PLAY_FAIL_SOUND,
                meta:{ sound : soundMeta }
            })
            return;
        }

        speak(key)

        dispatch({
            type:LETTER_CHECK,
            payload:key
        })
    } 
}

export const checkWordCompleted = () => {
    return (dispatch, getState) => {

        const { word } = getState();
        const soundMeta = getSourceOfSuccess()

        if(word.selected.toString() !== word.progress.toString()){
            return;
        }

        speak(word.selected.join(''))

        dispatch({
            type:WORD_CHECK_COMPLETED,
            meta:{ sound : soundMeta }
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

export const deleteWord = (id) =>{
    return (dispatch) => {
        firebase
        .database()
        .ref('words/' + id)
        .remove((error) => {
            if(error){
                console.log('Error Deleting word')
                return
            }
           
        }).then((res) => {
            dispatch(loadWords())
        })
    }
}