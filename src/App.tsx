import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import  {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileComponent from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/login/login";
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
          <HeaderContainer/>
          <Navbar/>

          <div className='app-wrapper-content'>
            {/*<Route path='/dialogs' component={Dialogs}/>*/}
            {/*   <Route path='/profile' component={Profile}/>*/}

              <Route path='/dialogs'
                     render={() => <DialogsContainer/>}/>
              <Route path='/profile/:userId?'
                     render={() => <ProfileComponent/>}/>
              <Route path='/users'
                     render={() => <UsersContainer />}/>
              <Route path='/login'
                     render={() => <LoginPage />}/>
          </div>

        </div>

      </BrowserRouter>)

}

export default App;
