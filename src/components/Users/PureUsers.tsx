import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/149071.png";
import {toggleFollowingProgress, UsersType} from "../../redux/users-reduser";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userAPI} from "../../api/api";

type PureUsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    onPageChanged: (pageNumber: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    //toggleFollowingProgress: (isFetching:boolean, userId:number) => void
    followingInProgress: Array<number>
}

let Users = (props: PureUsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>

            {pages.map(p => {

                return <span className={
                    props.currentPage === p ? styles.selectedPage : ''
                }
                             onClick={() => props.onPageChanged(p)}>{p}</span>
            })}

        </div>

        {
            props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                         <NavLink to={'/profile/' + u.id}>
                             <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                  className={styles.userPhoto}/>
                             </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress
                                .some((id) => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                                // userAPI.unfollow(u.id)
                                // // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
                                // //     withCredentials: true,
                                // //     headers: {
                                // //         "API-KEY": "84c6a094-40fa-45c3-a226-ff25c46da58c"
                                // //     }
                                // // })
                                //     .then((response) => {
                                //         //console.log(response.data)
                                //         if(response.data.resultCode === 0){
                                //             props.unfollow(u.id)
                                //         }
                                //         props.toggleFollowingProgress(false, u.id)
                                //     })

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some((id) => id === u.id)}
                                      onClick={() => {props.follow(u.id)
                                // props.toggleFollowingProgress(true, u.id)
                                // userAPI.follow(u.id)
                                // // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                // //     withCredentials: true,
                                // //     headers: {
                                // //         "API-KEY": "84c6a094-40fa-45c3-a226-ff25c46da58c"
                                // //     }
                                // // })
                                //     .then((response) => {
                                //         // console.log(response.data)
                                //         if(response.data.resultCode === 0){
                                //             props.follow(u.id)
                                //         }
                                //         props.toggleFollowingProgress(false, u.id)
                                //     })
                            }}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{'u.location.city'}</div>

                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users