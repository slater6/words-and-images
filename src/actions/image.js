import axios from 'axios'

export const LOAD_RANDOM_IMAGE = 'LOAD_RANDOM_IMAGE'
export const WORD_COMPLETED = 'WORD_COMPLETED'

export const wordCompleted = (word) => {
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
            dispatch({
                type:WORD_COMPLETED,
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
