import React, {ChangeEvent, RefObject} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
/*    posts: Array<PostType>
    dispatch: (action: ActionsTypes)=>void
    newPostText: string*/
    newPostText: string
    posts: Array<PostType>
    updateNewPostText:any
    addPost:any

}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    let postsElements =
        props.posts.map((p) => <Post message={p.message} likeCounts={p.likeCounts}/>)

    let newPostElement:RefObject<HTMLTextAreaElement> = React.createRef();

    let onAddPost = () => {

        if(newPostElement.current) {
            props.addPost()
            //props.dispatch(addPostActionCreator())

        }
    }


    let onPostChange = () => {

        if(newPostElement.current) {
            /*let action:ActionsTypes = {type:"UPDATE-NEW-TEXT", newText:newPostElement.current.value};*/
            let text = newPostElement.current.value
            /*let action:any = updateNewPostTextActionCreator(text)
            props.dispatch(action)*/
            props.updateNewPostText(text)
        }
    }





    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref ={newPostElement} value={props.newPostText} onChange={onPostChange}/>

                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}


            </div>
        </div>


    )
}
export default MyPosts