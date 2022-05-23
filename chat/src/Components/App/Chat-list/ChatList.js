import List from '@mui/material/List'
import PropTypes from 'prop-types'
import ChatListItem from './ChatListItem/ChatListItem'

import styles from './chatList.module.scss'

function ChatList({ chatsData }) {
    return (
        <List className={styles.chat_list}>
            {chatsData.map(({ chat, id }) => (
                <ChatListItem key={id} name={chat} />
            ))}
        </List>
    )
}

ChatList.defaultProps = {
    chatsData: [],
}

ChatList.propTypes = {
    chatsData: PropTypes.instanceOf(Array),
}

export default ChatList
