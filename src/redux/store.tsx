import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

/*const ADD_POST = "ADD-POST"
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"*/

let store: StoreType ={
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likeCounts: 12},
                {id: 2, message: "It's my first post", likeCounts: 11},
                {id: 3, message: "bla-bla", likeCounts: 11},
                {id: 4, message: "zzzz", likeCounts: 9},
                {id: 5, message: "yo", likeCounts: 10}
            ],
            newPostText: ""
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"}
            ],
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Victor"},
                {id: 6, name: "Valera"}
            ],
            newMessageBody: ""

        },
        sidebar: {}
    },
    getState(){
        return this._state
    },
    subscribe(observer:(store:RootStateType)=>void){
        this._rerenderEntireTree=observer
    },
    _rerenderEntireTree(){
        console.log("State changed")
    },

  

    dispatch(action:ActionsTypes) { // {type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._rerenderEntireTree(this._state)


/*        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounts: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._rerenderEntireTree(this._state)
        } else if (action.type === UPDATE_NEW_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._rerenderEntireTree(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ""
            this._state.dialogsPage.messages.push({id:6, message:body})
            this._rerenderEntireTree(this._state)
        }*/

    }
}

/*export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}

export let updateNewPostTextActionCreator = (text:string) =>{
    return {type:UPDATE_NEW_TEXT, newText:text} as const
}

export let sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

export let updateNewMessageBodyCreator = (body:string) =>{
    return {type:UPDATE_NEW_MESSAGE_BODY, body:body} as const
}*/



export type MessageType={
    id: number
    message: string
}

type DialogType={
    id: number
    name: string
}


export type PostType={
    id: number
    message: string
    likeCounts: number
}

export type DialogsPageType={
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}

export type ProfilePageType={
    posts: Array<PostType>
    newPostText:string
}

export type RootStateType ={
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar:any

}

/*type AddPostActionType = {
    type: 'ADD-POST'
}*/

type AddPostActionType = ReturnType<typeof addPostActionCreator>

type ChangeNewTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
type sendMessageType = ReturnType<typeof sendMessageCreator>
type updateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>


/*type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-TEXT',
    newText: string
}*/

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType | sendMessageType | updateNewMessageBodyType



export type StoreType={
    _state:RootStateType

    _rerenderEntireTree:(store:RootStateType)=>void
    subscribe:(callback:(store:RootStateType)=>void)=>void
    getState: ()=>RootStateType
    dispatch: (action:ActionsTypes)=>void


}

export default store