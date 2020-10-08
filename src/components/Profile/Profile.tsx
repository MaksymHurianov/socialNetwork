import React from 'react';

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Store} from "redux";

/*type ProfilePropsType={
    store:Store

}*/

const Profile= () =>{
    return  (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>

    )
}
export default Profile