const FOLLOW = "FOLLOW" as const
const UNFOLLOW = 'UNFOLLOW' as const
const SET_USERS = "SET-USERS" as const
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE" as const
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT" as const
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING" as const

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
}
type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: Boolean
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching }
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

export let setCurrentPageAC = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})

export let setTotalUsersCountAC = (totalUsersCount:number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export let toggleIsFetchingAC = (isFetching:boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})



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

export type UsersReducerActionType = FollowActionType | UnfollowActionType | SetUsersACActionType | setCurrentPageActionType | setTotalUsersCountActionType | toggleIsFetchingActionType

export default usersReducer