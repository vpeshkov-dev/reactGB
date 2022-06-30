/* eslint-disable */
import {
    SEND_MESSAGE,
    SEND_MESSAGE_BOT,
    CREATE_NEW_MESSAGES_LIST,
} from './types'
import { nanoid } from 'nanoid'
import { format } from 'date-fns'

const initialSate = {
    chat_1: [
        {
            messageText: 'Cообщение #1',
            messageAuthor: 'Y',
            id: nanoid(),
            messageDate: format(
                new Date(2021, 0, 1, 20, 10, 14),
                'dd.MM HH:mm:ss'
            ),
        },
        {
            messageText: 'Cообщение #2',
            messageAuthor: 'Y',
            messageDate: format(
                new Date(2021, 2, 23, 20, 13, 34),
                'dd.MM HH:mm:ss'
            ),
            id: nanoid(),
        },
        {
            messageText: 'Cообщение #3',
            messageAuthor: 'Y',
            id: nanoid(),
            messageDate: format(
                new Date(2022, 0, 1, 20, 10, 14),
                'dd.MM HH:mm:ss'
            ),
        },
    ],
    chat_2: [],
    chat_3: [],
}

const messagesReducer = (state = initialSate, action) => {
    const { type, payload } = action
    switch (type) {
        case CREATE_NEW_MESSAGES_LIST:
            return {
                ...state,
                ...payload,
            }
        case SEND_MESSAGE:
            const { roomID, message } = payload
            const messages = [...state[roomID], message]
            return {
                ...state,
                [roomID]: messages,
            }
        default:
            return state
    }
}

export default messagesReducer
