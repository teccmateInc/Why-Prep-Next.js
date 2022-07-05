import axios from 'axios'
import { getReference } from '../helpers/getReference'
import { setAuthToken } from '../middleware/setAuthToken'
import { SET_USER } from '../constants/types'

export const login = (body) => {
    return axios.post('/api/login', body)
}

export const signup = (body) => {
    const reference = getReference()
    body = {
        ...body,
        reference_agent: reference ? {
            platform: reference.platform,
            campagin: {
                name: reference.campaign,
                platform: reference.platform
            },
        } : null
    }
    return axios.post('/api/signup', body)
}

export const isUserExist = (id) => {
    return axios.post('/api/isexist', body)
}

export const createStoreDomain = body => {
    return axios.post('/api/createstoredomain', body)
}

export const forgetPassword = (body) => {
    return axios.post("/api/forget-password", body)
}


export const changePassword = (body) => {
    return axios.post("/api/change-password", body)
}

export const setCurrentUser = (decoded) => {
    return {
        type: SET_USER,
        payload: decoded
    }
}

export const logOut = () => dispatch => {
    localStorage.removeItem("jwt");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};
