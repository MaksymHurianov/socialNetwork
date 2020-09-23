const ADD_POST = "ADD-POST"
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'

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
            ]
        }
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

  

    dispatch(action:ActionsTypes){ // {type: 'ADD-POST'}
        if(action.type === ADD_POST){
            let newPost={
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounts: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText=""
            this._rerenderEntireTree(this._state)
        } else if(action.type === UPDATE_NEW_TEXT){
            this._state.profilePage.newPostText= action.newText
            this._rerenderEntireTree(this._state)
        }

    }
}

export let addPostActionCreator = () => {

    return {
        type: ADD_POST
    } as const
}

export let updateNewPostTextActionCreator = (text:string) =>{
    return {type:UPDATE_NEW_TEXT, newText:text} as const
}



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
}

export type ProfilePageType={
    posts: Array<PostType>
    newPostText:string
}

export type RootStateType ={
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

/*type AddPostActionType = {
    type: 'ADD-POST'
}*/

type AddPostActionType = ReturnType<typeof addPostActionCreator>

type ChangeNewTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

/*type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-TEXT',
    newText: string
}*/

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType



export type StoreType={
    _state:RootStateType

    _rerenderEntireTree:(store:RootStateType)=>void
    subscribe:(callback:(store:RootStateType)=>void)=>void
    getState: ()=>RootStateType
    dispatch: (action:ActionsTypes)=>void


}

export default store