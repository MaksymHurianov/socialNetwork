const SET_USER_DATA = "SET-USER-DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state=initialState, action:any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
// @ts-ignore???
export const setAuthUserData = (userId:any, email:any, login:any) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
} )
export default authReducer