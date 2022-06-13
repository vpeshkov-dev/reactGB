import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { TextField, Button } from '@mui/material/'
import { nanoid } from 'nanoid'
import styles from './chat-input.module.scss'
import { sendMessage } from '../../../../store/messages/actions'
import getMessagesByID from '../../../../store/messages/selectors'

function ChatInput({ roomID }) {
    const [chatInputValue, setChatInputValue] = useState('')
    const inpputRef = useRef()
    const messages = useSelector(getMessagesByID(roomID))
    const dispatch = useDispatch()

    const sendMessageForm = useCallback(
        (e) => {
            e.preventDefault()

            if (chatInputValue !== '') {
                const message = {
                    messageText: chatInputValue,
                    messageAuthor: 'Y',
                    messageDate: `${new Date().getDate()}.0${
                        new Date().getMonth() + 1
                    }  ${new Date().getHours()}:${new Date().getMinutes()}`,
                    id: nanoid(),
                }
                dispatch(sendMessage({ [roomID]: [...messages, message] }))
                setChatInputValue('')
            }
        },
        [chatInputValue]
    )

    useEffect(() => inpputRef.current.children[0].children[0].focus())

    return (
        <form className={styles.chatInput} onSubmit={(e) => sendMessageForm(e)}>
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
                type="submit"
                onClick={(e) => sendMessageForm(e)}
                className={styles.chatInput_button}
                disabled={chatInputValue ? null : true}
            >
                Отправить
            </Button>
        </form>
    )
}

ChatInput.propTypes = {
    roomID: PropTypes.string,
}
ChatInput.defaultProps = {
    roomID: '',
}

export default ChatInput
