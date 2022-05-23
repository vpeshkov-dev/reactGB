import List from '@mui/material/List'
import PropTypes from 'prop-types'
import ChatListItem from './ChatListItem/ChatListItem'
import styles from './chatList.module.scss'
import FormAddRoom from './formAddRoom/FormAddRoom'

function ChatList({ chatRoomsData, getActiveRoom, addChatRoom }) {
    return (
        <div className={styles.wrapper}>
            <List className={styles.chat_list}>
                {chatRoomsData.map(({ name, id }) => (
                    <ChatListItem
                        key={id}
                        name={name}
                        getActiveRoom={() => getActiveRoom(name)}
                    />
                ))}
            </List>
            <FormAddRoom
                style={{ background: '#ccc' }}
                addChatRoom={addChatRoom}
            />
        </div>
    )
}

ChatList.defaultProps = {
    chatRoomsData: [],
    getActiveRoom: '',
    addChatRoom: '',
}

ChatList.propTypes = {
    chatRoomsData: PropTypes.instanceOf(Array),
    getActiveRoom: PropTypes.func,
    addChatRoom: PropTypes.func,
}

export default ChatList
