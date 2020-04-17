import {combineReducers} from 'redux'
import parksReducer from './parksReducer'
import commentsReducer from './commentsReducer'

export default combineReducers({
    parks: parksReducer,
    comments: commentsReducer
})