import {userAPI} from "../api/api";
import {Dispatch} from "react";

const FOLLOW = "FOLLOW" as const
const UNFOLLOW = 'UNFOLLOW' as const
const SET_USERS = "SET-USERS" as const
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE" as const
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT" as const
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING" as const
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS" as const

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 5,
    isFetching: true,
    followingInProgress: []
}
type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type PhotosType = {
    small: string
    large: string
}
export type UsersType = {
    id: number
    followed: boolean
    photos: PhotosType
    name: string
    status: string | null
}



const usersReducer = (state:InitialStateType=initialState, action:UsersReducerActionType): InitialStateType => {
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state

    }
}

export let followSuccess = (userId:number)  => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export let unfollowSuccess = (userId:number) =>{
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsers = (users:Array<UsersType>) => ({type: SET_USERS, users})

export let setCurrentPage = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})

export let setTotalUsersCount = (totalUsersCount:number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export let toggleIsFetching = (isFetching:boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})

export let toggleFollowingProgress = (isFetching:boolean, userId:number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch:Dispatch<UsersReducerActionType>) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userId:number) => {
    return (dispatch: Dispatch<UsersReducerActionType>) => {
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.follow(userId)
            .then((response) => {
                if(response.data.resultCode === 0){
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unfollow = (userId:number) => {
    return (dispatch:Dispatch<UsersReducerActionType>) => {
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.unfollow(userId)
            .then((response) => {
                if(response.data.resultCode === 0){
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

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
type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}
type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
type toggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}
export type UsersReducerActionType = FollowActionType | UnfollowActionType | SetUsersACActionType | setCurrentPageActionType | setTotalUsersCountActionType | toggleIsFetchingActionType | toggleFollowingProgressActionType

export default usersReducer