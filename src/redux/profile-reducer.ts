import {userAPI} from "../api/api";
import {Dispatch} from "react";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCounts: 12},
        {id: 2, message: "It's my first post", likeCounts: 11},
        {id: 3, message: "bla-bla", likeCounts: 11},
        {id: 4, message: "zzzz", likeCounts: 9},
        {id: 5, message: "yo", likeCounts: 10}
    ],
    newPostText: "",
    profile: null
}

export type PostType = {
    id: number
    message: string
    likeCounts: number
}

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: profileCommonType
}
export type profileCommonType =  profileType | null
type profileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photosType
}
type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type photosType = {
    small: string
    large: string
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionType) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }


        }
        case  UPDATE_NEW_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            //console.log(action.profile.aboutMe)
            console.log(action.profile.fullName)
            return {...state, profile: action.profile}
        }
        default:
            return state

    }
    /*    if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
            };
            state.posts.push(newPost)
            state.newPostText = ""

        } else if (action.type === UPDATE_NEW_TEXT) {
            state.newPostText = action.newText

        }
        return state*/
}

export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}
export let setUserProfile = (profile: profileCommonType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export let getUserProfile = (userId: any) => (dispatch:Dispatch<any>) => {
    userAPI.getProfile(userId)
        .then((response) => {
            dispatch(setUserProfile(response.data))
        })
} // thunk creator
export let updateNewPostTextActionCreator = (text: string) => {
    return {type: UPDATE_NEW_TEXT, newText: text} as const
}

type AddPostActionCreatorType = {
    type: typeof ADD_POST
}
type UpdateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_TEXT
    newText: string
}
type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: profileType
}
export type ProfileReducerActionType =
    AddPostActionCreatorType
    | UpdateNewPostTextActionCreatorType
    | setUserProfileType

export default profileReducer