import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/perloader/Preloader";
import {PropsTypes} from "../ProfileContainer";
import {profileCommonType} from "../../../redux/profile-reducer";

type ProfileInfoType = {
    profile: profileCommonType
}

const ProfileInfo = (props:ProfileInfoType) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>

{/*            <div>
                <img src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'/>
            </div>*/}
            <div className={classes.discriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>


    )
}
export default ProfileInfo