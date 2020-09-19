import React from "react";
import classes from "./../Dialogs.module.css"


type MessagePropsType={
    message: string
}


const Message: React.FC<MessagePropsType> = (props) => {

    return(
       <div className={classes.dialogs}>{props.message}</div>
    )
}

export default Message