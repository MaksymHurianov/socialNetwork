import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import  {BrowserRouter, Route} from "react-router-dom";

import {AppStateType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Store} from "redux";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";
/*

type AppPropsType = {
 //   state: RootStateType
   // dispatch: (action: ActionsTypes)=>void
  //  store: AppStateType
    store:Store
}
*/


const App = () => {


  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>

          <div className='app-wrapper-content'>
            {/*<Route path='/dialogs' component={Dialogs}/>*/}
            {/*   <Route path='/profile' component={Profile}/>*/}

              <Route path='/dialogs'
                     render={() => <DialogsContainer/>}/>
              <Route path='/profile'
                     render={() => <Profile/>}/>
              <Route path='/users'
                     render={() => <UsersContainer/>}/>
          </div>

        </div>

      </BrowserRouter>)

}

export default App;
