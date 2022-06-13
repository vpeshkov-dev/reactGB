import {
    CREATE_NEW_MESSAGES_LIST,
    SEND_MESSAGE,
    SEND_MESSAGE_BOT,
} from './types'

const sendMessage = (message) => ({
    type: SEND_MESSAGE,
    payload: message,
})

const sendMessageBot = (message) => ({
    type: SEND_MESSAGE_BOT,
    payload: message,
})

const createNewMessagesList = (listName) => ({
    type: CREATE_NEW_MESSAGES_LIST,
    payload: listName,
})
export { sendMessage, sendMessageBot, createNewMessagesList }
