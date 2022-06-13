import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import styles from './formAddRoom.module.scss'
import addChatRoom from '../../../../../store/chats-list/actions'
import { createNewMessagesList } from '../../../../../store/messages/actions'

function FormAddRoom() {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    const sendChatRoomName = (e) => {
        e.preventDefault()

        if (inputValue !== '') {
            dispatch(addChatRoom({ name: inputValue, id: nanoid() }))
            dispatch(createNewMessagesList({ [inputValue]: [] }))
        }

        setInputValue('')
    }

    return (
        <form className={styles.form} onSubmit={(e) => sendChatRoomName(e)}>
            <input
                className={styles.input}
                type="text"
                placeholder="Добавить чат"
                value={inputValue}
                onInput={(e) => setInputValue(e.target.value)}
            />
            <button type="button" onClick={(e) => sendChatRoomName(e)}>
                Добавить
            </button>
        </form>
    )
}

export default FormAddRoom
