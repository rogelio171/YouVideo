import {createStore} from 'redux'
import {render} from 'react-dom'

import React from 'react'
import Home from '../pages/containers/home'
import {Provider} from 'react-redux'
import reducer from '../reducers/index'

const store = createStore(
    reducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container')

render(
    <Provider store={store}>
        <Home />
    </Provider>, 
    homeContainer)