import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProfileForm from '../Components/App/profileForm/profileForm'
import { toggleCheckbox } from '../store/profile/actions'
import getProfile from '../store/profile/selectors'

export default function ProfilePage() {
    const { firstName, lastName, isChecked } = useSelector(getProfile)

    const dispatch = useDispatch()

    const setShowProfile = useCallback(() => {
        dispatch(toggleCheckbox())
    }, [dispatch])

    return (
        <>
            <h2>profile</h2>
            <div>{firstName}</div>
            <div>{lastName}</div>
            <label htmlFor="input__checkBox">
                <input
                    id="input__checkBox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={setShowProfile}
                />
                Открыть форму
            </label>
            {isChecked && <ProfileForm />}
        </>
    )
}
