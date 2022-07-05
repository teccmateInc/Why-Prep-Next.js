import { SET_USER } from '../constants/types'
import { isEmpty } from "../validation/is_empty"

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
}

const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(payload),
                user: payload
            }

        default:
            return state
    }
}

export default Reducer