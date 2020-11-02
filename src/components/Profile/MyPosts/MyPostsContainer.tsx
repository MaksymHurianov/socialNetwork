import React from "react";

import {
    addPostActionCreator,
    ProfileReducerActionType,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


type PostType={
    id: number
    message: string
    likeCounts: number
}

type  ReturnMapStateToProps={
    posts: Array<PostType>
    newPostText: string
}


let mapStateToProps = (state:AppStateType) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch:Dispatch<ProfileReducerActionType>) => {
    return{
        updateNewPostText: (text:string) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }

    }
}
export type Props = ConnectedProps<typeof MyPostsContainer>

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer