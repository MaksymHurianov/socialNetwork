import React, {ChangeEvent, RefObject} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";
import StoreContext from "../../../StoreContext";

type MyPostsPropsType = {
  /*  posts: Array<PostType>
    dispatch: (action: ActionsTypes)=>void
    newPostText: string*/
    store:Store


}

export const MyPostsContainer = () => {


/*    let postsElements =
        props.posts.map((p) => <Post message={p.message} likeCounts={p.likeCounts}/>)

    let newPostElement:RefObject<HTMLTextAreaElement> = React.createRef();*/

/*    let addPost = () => {

    /!*    if(newPostElement.current)*!/ {
            //props.addPost()
            props.store.dispatch(addPostActionCreator())

        }
    }


    let onPostChange = (text:any) => {

       /!* if(newPostElement.current)*!/ {
            /!*let action:ActionsTypes = {type:"UPDATE-NEW-TEXT", newText:newPostElement.current.value};*!/

            let action:any = updateNewPostTextActionCreator(text)
            props.store.dispatch(action)
        }
    }*/
    
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }


                let onPostChange = (text: any) => {
                    let action: any = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer