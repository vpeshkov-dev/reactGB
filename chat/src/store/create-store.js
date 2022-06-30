import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import chatListReducer from './chats-list/reducer'
import profileReducer from './profile/reducer'
import messagesReduser from './messages/reducer'
// import sendMessageThunk from './thunks'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({
        profile: profileReducer,
        chatList: chatListReducer,
        messages: messagesReduser,
    }),
    composeEnhancers(applyMiddleware(thunk))
)

export default store
