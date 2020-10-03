import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import  {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, RootStateType, StoreType} from "./redux/store";
import {AppStateType} from "./redux/redux-store";

type AppPropsType = {
 //   state: RootStateType
    dispatch: (action: ActionsTypes)=>void
    store: AppStateType
}


const App: React.FC<AppPropsType> = (props) => {


  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>

          <div className='app-wrapper-content'>
            {/*<Route path='/dialogs' component={Dialogs}/>*/}
            {/*   <Route path='/profile' component={Profile}/>*/}

            <Route path='/dialogs'
                   render={()  => <Dialogs store={props.store} dispatch={props.dispatch}/>}/>
            <Route path='/profile'
                   render={() => <Profile state = {props.store.profilePage}

                                          dispatch={props.dispatch}/>}/>

          </div>

        </div>

      </BrowserRouter>)

}

export default App;
