import firebase from '../services/firebase'


export const LETTER_CHECK = 'LETTER_CHECK'
export const WORD_CHECK_COMPLETED = 'WORD_CHECK_COMPLETED'
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

            dispatch(loadWords())
        })
    }
}