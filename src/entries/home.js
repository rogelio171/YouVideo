import {createStore} from 'redux'
import {render} from 'react-dom'

import React from 'react'
import Home from '../pages/containers/home'
import data from '../../api.json'
import {Provider} from 'react-redux'

const initialState = {
    data: {
        ...data
    }
}

const store = createStore(
    (state) => state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState())

const homeContainer = document.getElementById('home-container')

render(
    <Provider store={store}>
        <Home />
    </Provider>, 
    homeContainer)