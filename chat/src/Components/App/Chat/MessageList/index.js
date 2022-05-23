import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import Message from './Message'

import style from './MessagesList.module.scss'

function MessageList({ chatData }) {
    const { roomID } = useParams()
    const messages = chatData[roomID]?.messages ?? []

    return (
        <div className={style.messageList__wrapper}>
            <ul className={style.messageList}>
                {messages.map(
                    ({ messageText, messageAuthor, messageDate, id }) => (
                        <Message
                            key={id}
                            messageText={messageText}
                            messageAuthor={messageAuthor}
                            messageDate={messageDate}
                            roomName={roomID}
                        />
                    )
                )}
            </ul>
            <h3>{roomID}</h3>
        </div>
    )
}

MessageList.defaultProps = {
    chatData: {},
}

MessageList.propTypes = {
    chatData: PropTypes.instanceOf(Object),
}

export default MessageList
