/* eslint-disable */

import { nanoid } from 'nanoid'
import { sendMessage } from './messages/actions'

const sendMessageThunk = (roomID, chatInputValue) => (dispatch, getState) => {
    const lastMessage = getState().messages[roomID].splice(-1)

    let message = {
        messageText: chatInputValue ?? '',
        messageAuthor: 'Y',
        messageDate: `${new Date().getDate()}.0${
            new Date().getMonth() + 1
        }  ${new Date().getHours()}:${new Date().getMinutes()}`,
        id: nanoid(),
    }
    dispatch(sendMessage({ roomID, message }))

    if (lastMessage.messageAuthor !== 'B') {
        message = {
            messageText: 'Message by bot',
            messageAuthor: 'B',
            messageDate: `${new Date().getDate()}.0${
                new Date().getMonth() + 1
            }  ${new Date().getHours()}:${new Date().getMinutes()}`,
            id: nanoid(),
        }
        setTimeout(() => {
            dispatch(sendMessage({ roomID, message }))
        }, 1000)
    }
}

export { sendMessageThunk }
