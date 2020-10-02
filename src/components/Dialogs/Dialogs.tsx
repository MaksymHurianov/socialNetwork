import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    DialogsPageType,
    sendMessageCreator,
    StoreType,
    updateNewMessageBodyCreator
} from "../../redux/state";


type DialogsPropsType={

    store: StoreType

}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.store.getState().dialogsPage


    let dialogsElements = state.dialogs.map( (d) => <DialogItem name={d.name} id={d.id}/>)

    /*   [
           <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>,
           <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>,
           <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
           ]*/



    let messagesElements = state.messages.map( (m) => <Message message = {m.message}/>)
    let newMessageBody = state.newMessageBody
    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}


                {/*                 <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>
                   <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>*/}

            </div>
            <div className={classes.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message "></textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
                {/*    <Message message = {messages[0].message}/>
                    <Message message = {messages[1].message}/>
*/}

            </div>
        </div>
    )
}

export default Dialogs