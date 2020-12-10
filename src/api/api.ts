import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "84c6a094-40fa-45c3-a226-ff25c46da58c"
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId:number){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId:number){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId:string){
        return instance.get(`profile/` + userId)

    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}


