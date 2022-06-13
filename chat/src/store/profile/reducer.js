/* eslint-disable */

import { TOGGLE_CHECKBOX, CHANGE_PROFILE_DATA } from './types'

const initialState = {
    firstName: 'First name',
    lastName: 'Last name',
    isChecked: true,
}

const profileReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case TOGGLE_CHECKBOX:
            return { ...state, isChecked: !state.isChecked }

        case CHANGE_PROFILE_DATA:
            return {
                ...state,
                ...payload,
            }

        default:
            return state
    }
}

export default profileReducer
