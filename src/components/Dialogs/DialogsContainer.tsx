import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    DialogsPageType,

    StoreType,

} from "../../redux/store";
import {DialogsReducerType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {Dispatch, Store} from "redux";
/*import StoreContext from "../../StoreContext";*/
import {connect} from "react-redux";


/*type DialogsPropsType = {
    //dispatch: (action: ActionsTypes)=>void
    //store: AppStateType
    store: Store

}*/

/*const DialogsContainer = () => {

/!*    let state = props.store.getState().dialogsPage*!/


    /!*    let dialogsElements = state.dialogs.map( (d:any) => <DialogItem name={d.name} id={d.id}/>)

        /!*   [
               <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>,
               <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>,
               <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
               ]*!/



        let messagesElements = state.messages.map( (m:any) => <Message message = {m.message}/>)
        let newMessageBody = state.newMessageBody*!/
/!*
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body: string) => {

        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
*!/

    return <StoreContext.Consumer>
         {
        (store) => {
            let state = store.getState().dialogsPage
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }
            let onNewMessageChange = (body: string) => {

                store.dispatch(updateNewMessageBodyCreator(body))
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                     sendMessage={onSendMessageClick}
                     dialogsPage={state}
            />
        }
    }
    </StoreContext.Consumer>

}*/
let mapStateToProps = (state:AppStateType) => {
    return{
       dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch<DialogsReducerType>) => {
    return{
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer