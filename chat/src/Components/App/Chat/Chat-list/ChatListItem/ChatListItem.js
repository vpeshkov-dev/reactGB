import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'

import style from './chatListItem.module.scss'

function ChatListItem({ name, getActiveRoom }) {
    return (
        <NavLink to={name}>
            <ListItem className={style.chat_list_item} onClick={getActiveRoom}>
                {name}
            </ListItem>
        </NavLink>
    )
}

ChatListItem.defaultProps = {
    name: '',
    getActiveRoom: '',
}

ChatListItem.propTypes = {
    name: PropTypes.string,
    getActiveRoom: PropTypes.func,
}

export default ChatListItem
