import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType={
    state: DialogsPageType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {




    let dialogsElements = props.state.dialogs.map( (d) => <DialogItem name={d.name} id={d.id}/>)

    /*   [
           <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>,
           <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>,
           <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
           ]*/



    let messagesElements = props.state.messages.map( (m) => <Message message = {m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}


                {/*                 <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>
                   <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>*/}

            </div>
            <div className={classes.messages}>

                {messagesElements}
                {/*    <Message message = {messages[0].message}/>
                    <Message message = {messages[1].message}/>
*/}

            </div>
        </div>
    )
}

export default Dialogs