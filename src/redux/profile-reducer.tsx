const ADD_POST = "ADD-POST"
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'



const profileReducer = (state:any, action:any) => {
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