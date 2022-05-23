import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { TextField, Button } from '@mui/material/'

import styles from './chat-input.module.scss'

function ChatInput({ getMessageData }) {
    const [chatInputValue, setChatInputValue] = useState('')
    const inpputRef = useRef()

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

    useEffect(() => inpputRef.current.children[0].children[0].focus())

    return (
        <form className={styles.chatInput} onSubmit={sendMessageData}>
            <TextField
                id="filled-basic"
                variant="filled"
                placeholder="Сообщение..."
                value={chatInputValue}
                onInput={(e) => setChatInputValue(e.target.value)}
                className={styles.chatInput_text}
                ref={inpputRef}
            />

            <Button
                variant="outlined"
                onClick={sendMessageData}
                className={styles.chatInput_button}
                disabled={chatInputValue ? null : true}
            >
                Отправить
            </Button>
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
