import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { TextField, Button } from '@mui/material/'
import styles from './chat-input.module.scss'
import { sendMessageThunk } from '../../../../store/thunks'

function ChatInput({ roomID }) {
    const [chatInputValue, setChatInputValue] = useState('')
    const inpputRef = useRef()
    const dispatch = useDispatch()

    const sendMessageForm = useCallback(
        (e) => {
            e.preventDefault()

            if (chatInputValue !== '') {
                dispatch(sendMessageThunk(roomID, chatInputValue))
                setChatInputValue('')
            }
        },
        [roomID, chatInputValue]
    )

    // const mes = useSelector((state) => state.messages)

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
