import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import { Redirect } from "react-router-dom";
//import {DialogsPageType} from "../../redux/store";
export type DialogsPageType={
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}

type DialogsPropsType={
    //dispatch: (action: ActionsTypes)=>void
    //store: AppStateType
    updateNewMessageBody:(body:string) => void
    sendMessage:() => void
    dialogsPage:DialogsPageType
    isAuth: boolean

}

type DialogType={
    id: number
    name: string
}

export type MessageType={
    id: number
    message: string
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage


    let dialogsElements = state.dialogs.map( (d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    /*   [
           <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>,
           <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>,
           <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
           ]*/



    let messagesElements = state.messages.map( (m) => <Message message = {m.message} key={m.id}/>)
    let newMessageBody = state.newMessageBody
    let onSendMessageClick = () =>{
        props.sendMessage()
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        let body = e.target.value
        props.updateNewMessageBody(body)

    }

    if(!props.isAuth){
        return <Redirect to={'/login'}/>
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