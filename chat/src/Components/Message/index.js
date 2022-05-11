import PropTypes from 'prop-types'
import styles from './Message.module.scss'

function Message({ messageText }) {
    return <li className={styles.message}>{messageText}</li>
}

Message.defaultProps = {
    messageText: 'Текст',
}

Message.propTypes = {
    messageText: PropTypes.string,
}

export default Message
