import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './formAddRoom.module.scss'

function FormAddRoom({ addChatRoom }) {
    const [inputValue, setInputValue] = useState('')

    const sendChatRoomName = (e) => {
        e.preventDefault()

        if (inputValue !== '') {
            addChatRoom(inputValue)
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

FormAddRoom.defaultProps = {
    addChatRoom: '',
}

FormAddRoom.propTypes = {
    addChatRoom: PropTypes.func,
}
export default FormAddRoom
