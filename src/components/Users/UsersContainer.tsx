import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unfollow,
    UsersType
} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/redux-store";
import Preloader from "../common/perloader/Preloader";
import Users from "./PureUsers";
import {userAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




type PropsTypes = MapDispatchType & MapStateType

class UsersAPIContainer extends React.Component<PropsTypes> {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    //     this.props.toggleIsFetching(true)
    //     userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
    //         this.props.toggleIsFetching(false)
    //         this.props.setUsers(data.items)
    //         this.props.setTotalUsersCount(data.totalCount)
    //     })
    // }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true)
        // userAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     //this.props.setTotalUsersCount(response.data.totalCount)
        // })
    }

    render() {

        return <>
            {this.props.isFetching  && <Preloader/> } {/*как экспортируем svg?*/}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   //toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

type MapStateType = {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress:Array<number>
}

type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    //setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    //setTotalUsersCount: (totalCount: number) => void
    //toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching:boolean, userId:number) => void
    getUsers: (currentPage:number, pageSize:number) => Function
}

let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// let mapDispatchToProps = (dispatch: Dispatch<UsersReducerActionType>): MapDispatchType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching:boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

//
// export default withAuthRedirect(connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps,
//     {
//         follow,
//         unfollow,
//         //setUsers,
//         setCurrentPage,
//         //setTotalUsersCount,
//         //toggleIsFetching,
//         toggleFollowingProgress,
//         getUsers
//     }
//     )(UsersAPIContainer))
export default compose<any>(
    withAuthRedirect,
    connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps,
    {
        follow,
        unfollow,
        //setUsers,
        setCurrentPage,
        //setTotalUsersCount,
        //toggleIsFetching,
        toggleFollowingProgress,
        getUsers
    }
    ))
(UsersAPIContainer)