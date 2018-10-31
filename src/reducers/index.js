import data from './data'
import isLoading from './loading'
import modal from './modal'
import {combineReducers} from 'redux-immutable'

const rootReducer = combineReducers({
    data,
    isLoading,
    modal
})

export default rootReducer