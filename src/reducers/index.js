import {combineReducers} from 'redux'
import word from './word'
import image from './image'

const reducer = combineReducers({
    word,
    image
})

export default reducer;