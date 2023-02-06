import * as types from '../actions/index'
import axiosUser from '../../api/vegist'

const initialState = []

export const Users = (state = initialState, action) => {
    let { user, checkUser } = action
    switch (action.type) {
        case types.CREATE_USER:
            // call API - POST
            axiosUser.post('users', user)
            return state;

        case types.LOGIN_USER:
            window.localStorage.setItem('user', JSON.stringify(checkUser))
            return state;

        default:
            return state;
    }
}