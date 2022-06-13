import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'

import style from './chatListItem.module.scss'

function ChatListItem({ name }) {
    return (
        <NavLink to={name}>
            <ListItem className={style.chat_list_item}>{name}</ListItem>
        </NavLink>
    )
}

ChatListItem.defaultProps = {
    name: '',
}

ChatListItem.propTypes = {
    name: PropTypes.string,
}

export default ChatListItem
