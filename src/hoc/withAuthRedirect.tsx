import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

export  type mapStateToPropsForRedirectType = {
    isAuth: boolean
}
let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
    // isAuth: true
})
export const withAuthRedirect = (Component: Function) => {
    class RedirectComponent extends React.Component<mapStateToPropsForRedirectType> {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }


    return connect<mapStateToPropsForRedirectType, {}, {}, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)

}