import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<PropsTypes> {

    componentDidMount() {
        this.props.getAuthUserData()
        // authAPI.me()
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        // //     withCredentials: true
        // // })
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {id, login, email} = response.data.data
        //             this.props.setAuthUserData(id, email, login)
        //         }
        //     })
    }

    render() {
        return <Header {...this.props}/>
    }

}
type MapStateType = {
    isAuth:boolean
    login:string
}

type MapDispatchType = {
    //setAuthUserData: (id: number, email: string, login: string) => void
    getAuthUserData: () => void
}
export type PropsTypes = MapDispatchType & MapStateType

const mapStateToProps = (state:AppStateType):MapStateType => ({

    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {getAuthUserData})(HeaderContainer)