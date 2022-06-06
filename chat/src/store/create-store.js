import { createStore, combineReducers } from 'redux'
import profileReducer from './profile/reducer'

const store = createStore(combineReducers({ profile: profileReducer }))

export default store
