import {combineReducers} from 'redux';
import auth from './auth'
import movie from './movielist'

export default combineReducers({
    auth,
    movie,
})