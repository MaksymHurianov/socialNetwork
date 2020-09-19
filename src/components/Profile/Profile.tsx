import React from 'react';

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type ProfilePropsType={
    state:ProfilePageType
    dispatch: (action: ActionsTypes)=>void
}

const Profile: React.FC<ProfilePropsType> = (props) =>{
    return  (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.state.posts}  newPostText={props.state.newPostText} dispatch={props.dispatch}/>
        </div>

    )
}
export default Profile