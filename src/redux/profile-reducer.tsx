import {ActionsTypes, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCounts: 12},
        {id: 2, message: "It's my first post", likeCounts: 11},
        {id: 3, message: "bla-bla", likeCounts: 11},
        {id: 4, message: "zzzz", likeCounts: 9},
        {id: 5, message: "yo", likeCounts: 10}
    ],
    newPostText: ""
}

const profileReducer = (state:ProfilePageType=initialState, action:ActionsTypes) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
            };
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case  UPDATE_NEW_TEXT:
            state.newPostText = action.newText
            return state
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

export let updateNewPostTextActionCreator = (text:string) =>{
    return {type:UPDATE_NEW_TEXT, newText:text} as const
}

export default profileReducer