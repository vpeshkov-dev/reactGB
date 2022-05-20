import PropTypes from 'prop-types'
import styles from './Message.module.scss'

function Message({ messageText, messageAuthor, messageDate }) {
    const styleMessage =
        messageAuthor !== 'R'
            ? styles.message
            : `${styles.message} ${styles.message_bot}`

    return (
        <li className={styleMessage}>
            <div className={styles.message__text}>{messageText}</div>
            <div className={styles.message__info}>
                <span className={styles.message__author}>{messageAuthor}</span>
                <span className={styles.message__date}>{messageDate}</span>
            </div>
        </li>
    )
}

Message.defaultProps = {
    messageText: 'Текст сообщения',
    messageAuthor: 'User',
    messageDate: '',
}

Message.propTypes = {
    messageText: PropTypes.string,
    messageAuthor: PropTypes.string,
    messageDate: PropTypes.string,
}

export default Message
