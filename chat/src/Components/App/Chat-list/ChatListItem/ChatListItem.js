import PropTypes from 'prop-types'
import ListItem from '@mui/material/ListItem'

import style from './chatListItem.module.scss'

function ChatListItem({ name }) {
    return <ListItem className={style.chat_list_item}>{name}</ListItem>
}

ChatListItem.defaultProps = {
    name: '',
}

ChatListItem.propTypes = {
    name: PropTypes.string,
}

export default ChatListItem
