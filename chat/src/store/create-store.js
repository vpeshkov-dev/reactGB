/* eslint-disable */

import { createStore, combineReducers } from 'redux'
import chatListReducer from './chats-list/reducer'
import profileReducer from './profile/reducer'
import messagesReduser from './messages/reducer'

const store = createStore(
    combineReducers({
        profile: profileReducer,
        chatList: chatListReducer,
        messages: messagesReduser,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
