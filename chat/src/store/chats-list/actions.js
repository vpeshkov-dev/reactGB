import ADD_CHAT_ROOM from './types'

const getMessages = (chatRoomData) => ({
    type: ADD_CHAT_ROOM,
    payload: chatRoomData,
})

export default getMessages
