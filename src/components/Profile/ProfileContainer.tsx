import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import {RouteComponentProps} from 'react-router'

type PropsTypes = MapDispatchType & MapStateType

class ProfileComponent extends React.Component<CommonPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response) => {
                this.props.setUserProfile(response.data)
        })
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
    profile:number
}
type MapDispatchType = {
    setUserProfile: (profile:number) => void
}
type PathParamsType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamsType> & PropsTypes

    let mapStateToProps = (state:AppStateType):MapStateType => ({
    profile:state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileComponent)

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent)