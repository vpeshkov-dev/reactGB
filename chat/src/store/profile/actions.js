import { TOGGLE_CHECKBOX, CHANGE_PROFILE_DATA } from './types'

const toggleCheckbox = () => ({ type: TOGGLE_CHECKBOX })

const changeProfileData = (profileData) => ({
    type: CHANGE_PROFILE_DATA,
    payload: profileData,
})

export { toggleCheckbox, changeProfileData }
