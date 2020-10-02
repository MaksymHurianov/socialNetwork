
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

const dialogsReducer = (state:any, action:any) => {
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