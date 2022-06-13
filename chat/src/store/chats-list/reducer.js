/* eslint-disable */
import ADD_CHAT_ROOM from './types'
import { nanoid } from 'nanoid'

const initialSate = [
    {
        name: 'chat_1',
        id: nanoid(),
    },
    {
        name: 'chat_2',
        id: nanoid(),
    },
    {
        name: 'chat_3',
        id: nanoid(),
    },
]

const chatListReducer = (state = initialSate, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_CHAT_ROOM:
            return [...state, payload]
        default:
            return state
    }
}

export default chatListReducer
