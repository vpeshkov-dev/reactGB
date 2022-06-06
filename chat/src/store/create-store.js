/* eslint-disable */

import { createStore, combineReducers } from 'redux'
import profileReducer from './profile/reducer'

const store = createStore(
    combineReducers({ profile: profileReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
