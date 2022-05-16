import PropTypes from 'prop-types'
import Message from '../Message'
import style from './MessagesList.module.scss'

function MessageList({ messagesData }) {
    return (
        <div className={style.messageList__wrapper}>
            <ul className={style.messageList}>
                {messagesData.map(
                    ({ messageText, messageAuthor, messageDate, id }) => (
                        <Message
                            key={id}
                            messageText={messageText}
                            messageAuthor={messageAuthor}
                            messageDate={messageDate}
                        />
                    )
                )}
            </ul>
        </div>
    )
}

MessageList.defaultProps = {
    messagesData: [],
}

MessageList.propTypes = {
    messagesData: PropTypes.instanceOf(Array),
}

export default MessageList
