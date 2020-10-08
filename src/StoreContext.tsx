import React from "react";
import store, {AppStateType} from "./redux/redux-store";
import {Store} from "redux";

const StoreContext = React.createContext({} as Store)

export type ProviderType = {
    store: Store
    children: React.ReactNode
}

export const Provider = (props:ProviderType) =>{
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext