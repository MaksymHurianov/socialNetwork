import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/149071.png";
import {UsersType} from "../../redux/users-reduser";
import {NavLink} from "react-router-dom";

type PureUsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    onPageChanged: (pageNumber: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
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
                    //this.props.currentPage === p && styles.selectedPage
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
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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