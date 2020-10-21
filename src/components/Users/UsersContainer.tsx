import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UsersReducerActionType, UsersType} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/redux-store";
import {ActionsTypes} from "../../redux/store";
import {Dispatch} from "redux";

let mapStateToProps = (state:AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

//let mapDispatchToProps = (dispatch:(follow: typeof followAC| unfollow: typeof unfollowAC|setUsers: typeof setUsersAC )=>UsersReducerActionType) => {
let mapDispatchToProps = (dispatch:Dispatch<UsersReducerActionType>) => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)