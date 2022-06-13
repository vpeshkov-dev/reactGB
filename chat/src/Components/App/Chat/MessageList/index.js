import { useParams } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'

import Message from './Message'

import style from './MessagesList.module.scss'
import ChatInput from '../ChatInput'

function MessageList() {
    const { roomID } = useParams()
    const messages = useSelector(
        (state) => state.messages[roomID] ?? [],
        shallowEqual
    )

    return (
        <div>
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
            <ChatInput roomID={roomID} />
        </div>
    )
}

export default MessageList
