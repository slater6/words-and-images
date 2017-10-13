export const LETTER_CHECK = 'LETTER_CHECK'
export const WORD_CHECK_COMPLETED = 'WORD_CHECK_COMPLETED'

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