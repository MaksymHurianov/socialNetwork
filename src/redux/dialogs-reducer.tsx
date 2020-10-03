import {ActionsTypes, DialogsPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState= {
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

}

const dialogsReducer = (state:DialogsPageType=initialState, action:ActionsTypes) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id:6, message:body})
            return state
        default:
            return state
    }
    /* if (action.type === UPDATE_NEW_MESSAGE_BODY) {
         state.newMessageBody = action.body

    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
         state.newMessageBody = ""
         state.messages.push({id:6, message:body})

    }
    return state*/
}
export let sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

export let updateNewMessageBodyCreator = (body:string) =>{
    return {type:UPDATE_NEW_MESSAGE_BODY, body:body} as const
}

export default dialogsReducer