const getMessagesByID = (roomID) => (state) => state.messages[roomID] ?? []

export default getMessagesByID
