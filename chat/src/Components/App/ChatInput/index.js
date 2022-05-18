import { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './chat-input.module.scss'

function ChatInput({ getMessageData }) {
    const [chatInputValue, setChatInputValue] = useState('')

    const sendMessageData = (e) => {
        e.preventDefault()

        getMessageData({
            messageText: chatInputValue,
            messageAuthor: 'Y',
            messageDate: `${new Date().getDate()}.0${
                new Date().getMonth() + 1
            }  ${new Date().getHours()}:${new Date().getMinutes()}`,
            id: Date.now(),
        })

        setChatInputValue('')
    }

    return (
        <form className={styles.chatInput}>
            <input
                className={styles.chatInput_text}
                type="text"
                placeholder="Сообщение..."
                value={chatInputValue}
                onInput={(e) => setChatInputValue(e.target.value)}
            />
            <button
                type="submit"
                onClick={sendMessageData}
                className={styles.chatInput_button}
                disabled={chatInputValue ? null : true}
            >
                Отправить
            </button>
        </form>
    )
}

ChatInput.propTypes = {
    getMessageData: PropTypes.func,
}

ChatInput.defaultProps = {
    getMessageData: '',
}

export default ChatInput
