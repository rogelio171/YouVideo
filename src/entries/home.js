import { createStore, applyMiddleware } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Map as map } from 'immutable'
import { composeWithDevTools } from 'redux-devtools-extension';

import React from 'react'
import Home from '../pages/containers/home'
import reducer from '../reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(applyMiddleware(logger, thunk))
)

const homeContainer = document.getElementById('home-container')

render(
    <Provider store={store}>
        <Home />
    </Provider>, 
    homeContainer)