import {combineReducers} from 'redux'
import word from './word'
import image from './image'
import auth from './auth'

const reducer = combineReducers({
    word,
    image,
    auth
})

export default reducer;