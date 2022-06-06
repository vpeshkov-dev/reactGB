import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { changeProfileData } from '../../../store/profile/actions'

function ProfileForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const dispatch = useDispatch()

    const enterName = useCallback((e, fuctionChangeState) => {
        fuctionChangeState(e.target.value)
    }, [])

    const sendProfileData = useCallback(
        (e) => {
            e.preventDefault()
            dispatch(changeProfileData({ firstName, lastName }))
            setFirstName('')
            setLastName('')
        },
        [firstName, lastName]
    )

    return (
        <div>
            <input
                type="text"
                placeholder="введие имя..."
                value={firstName}
                onInput={(e) => enterName(e, setFirstName)}
            />
            <input
                type="text"
                placeholder="введие фамилию..."
                value={lastName}
                onInput={(e) => enterName(e, setLastName)}
            />
            <button type="submit" onClick={(e) => sendProfileData(e)}>
                Отправить
            </button>
        </div>
    )
}

export default ProfileForm
