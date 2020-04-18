import {combineReducers} from 'redux'
import parksReducer from './parksReducer'
import commentsReducer from './commentsReducer'

const rootReducer = combineReducers({
    parks: parksReducer,
    comments: commentsReducer
})
export default rootReducer