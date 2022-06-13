import List from '@mui/material/List'
import { useSelector } from 'react-redux'
import ChatListItem from './ChatListItem/ChatListItem'
import styles from './chatList.module.scss'
import FormAddRoom from './formAddRoom/FormAddRoom'
import getChatList from '../../../../store/chats-list/selectors'

function ChatList() {
    const chatRoomsData = useSelector(getChatList)

    return (
        <div className={styles.wrapper}>
            <List className={styles.chat_list}>
                {chatRoomsData.map(({ name, id }) => (
                    <ChatListItem key={id} name={name} />
                ))}
            </List>
            <FormAddRoom style={{ background: '#ccc' }} />
        </div>
    )
}

export default ChatList
