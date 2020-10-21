
import {AppStateType} from "./redux-store";
import {addPostActionCreator} from "./profile-reducer";

const FOLLOW = "FOLLOW" as const
const UNFOLLOW = 'UNFOLLOW' as const
const SET_USERS = "SET-USERS" as const

let initialState = {
    users: [ ],
}
type InitialStateType = {
    users: Array<UsersType>
}

type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    followed: boolean
    photoUrl: string
    fullName: string
    status: string
    location: LocationType
}



const usersReducer = (state:InitialStateType=initialState, action:UsersReducerActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id == action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id == action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
                }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state

    }
}

export let followAC = (userId:number)  => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export let unfollowAC = (userId:number) =>{
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsersAC = (users:Array<UsersType>) => ({type: SET_USERS, users})



type FollowActionType = {
    type: typeof FOLLOW ,
    userId: number
}
type UnfollowActionType = {
    type: typeof UNFOLLOW,
    userId: number
}

type SetUsersACActionType = {
    type: typeof SET_USERS,
    users: Array<UsersType>
}
export type UsersReducerActionType = FollowActionType | UnfollowActionType | SetUsersACActionType

export default usersReducer