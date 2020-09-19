import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'/>
            </div>
            <div className={classes.discriptionBlock}>
                ava+description
            </div>
        </div>


    )
}
export default ProfileInfo