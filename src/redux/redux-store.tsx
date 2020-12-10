import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

/*type ReducersType = typeof createStore
export type AppStateType = ReturnType<ReducersType>*/
let a:any = window
a.store = store

export default store