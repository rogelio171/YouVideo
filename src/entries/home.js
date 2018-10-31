import {createStore, applyMiddleware} from 'redux'
import {render} from 'react-dom'

import React from 'react'
import Home from '../pages/containers/home'
import {Provider} from 'react-redux'
import reducer from '../reducers/index'
import {Map as map} from 'immutable'

const logger = ({getState, dispatch}) => next => action => {
    console.log('PREVIOUS_STATE: ', getState().toJS())
    console.log('ACTION: ', action)
    const result = next(action)
    console.log('NEW_STATE: ', getState().toJS())
    return result
}

const store = createStore(
    reducer,
    map(),
    applyMiddleware(logger)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container')

render(
    <Provider store={store}>
        <Home />
    </Provider>, 
    homeContainer)