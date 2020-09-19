import React from "react";
import classes from './Post.module.css'

type PostPropsType={
    message: string
    likeCounts: number

}

export const Post:React.FC<PostPropsType> = (props) => {

    return (


        <div className={classes.item}>
            <img
                src='https://pipetiria.files.wordpress.com/2018/06/cropped-bitmoji-20180630033200.png?w=200'/>
            {props.message}
            <div>
                <span>Like</span>{props.likeCounts}
            </div>
        </div>)

}
export default Post
