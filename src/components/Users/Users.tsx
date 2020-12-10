import React from "react";
import styles from "./users.module.css";
import {UsersType} from "../../redux/users-reduser";
import axios from 'axios'
import userPhoto from '../../assets/images/149071.png'


type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

type PhotosType = {
    small: string
    large: string
}

type ItemsType = {
    name: string,
    id: number,
    photos: PhotosType
    status: string | null
    followed: boolean
}

type UsersResponseType = {
    items: Array<ItemsType>
    totalCount: number
    error: string | null
}



let Users = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                props.setUsers(response.data.items)
            })


        }
    }


    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
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