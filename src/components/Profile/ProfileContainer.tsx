import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, profileCommonType, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router'
import {userAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type PropsTypes = MapDispatchType & MapStateType

class ProfileComponent extends React.Component<CommonPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '2'
        }
        this.props.getUserProfile(userId)
        // userAPI.getProfile(userId)
        // //axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        //     .then((response) => {
        //         console.log(response.data)
        //         this.props.setUserProfile(response.data)
        // })
    }

    render() {

        return  (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

type MapStateType = {
    profile:profileCommonType
    isAuth: boolean
}
type MapDispatchType = {
    getUserProfile: (userId: string) => void
}
type PathParamsType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamsType> & PropsTypes





type mapStateToPropsType = {
    profile: profileCommonType
}

let mapStateToProps = (state:AppStateType):mapStateToPropsType => ({
    profile:state.profilePage.profile
})

// let WithUrlDataContainerComponent = withRouter(ProfileComponent)
// let AuthRedirectComponent = withAuthRedirect(WithUrlDataContainerComponent)
//
// export default connect<mapStateToPropsType, MapDispatchType, {}, AppStateType>(mapStateToProps, {getUserProfile}) (AuthRedirectComponent)

export default compose<any>(
    connect<mapStateToPropsType, MapDispatchType, {}, AppStateType>(mapStateToProps, {getUserProfile}),
    //withAuthRedirect,
    withRouter
)(ProfileComponent)