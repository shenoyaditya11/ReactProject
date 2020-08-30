import React, { Component } from 'react';
import UserProvider from "./providers/userProviders";
import {createBrowserHistory} from 'history';

import {

  HashRouter as HRouter,
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css'; 
//import {CardList} from './components/card-list/card-list-comp'
import {MainBody} from './components/mylayout/my_layout_comp';
import {Nav} from './components/mylayout/navheader';

import {StaticNav} from './components/mylayout/navModule/navigation';
import * as Routes from "./constants/constants";

import {LoginCard} from './components/card/loginCard';
import {SignUpCard} from './components/card/signUpCard';
import {UserContext} from "./providers/userProviders";
import {Dashboard} from "./components/mylayout/dashboard";
import { auth } from "./firebase";
import {PrivateRoute, PublicRoute} from './routes'


class App extends Component {
  constructor(){
    super();
this.state={

  user:{name:"shit"},
  authed:false,
  loading: true
  
};
    
  }
  componentDidMount(){

    auth.onAuthStateChanged((userAuth) => {

      

      if(userAuth){
      this.setState({ user: userAuth, authed:true, loading:false});
      
      }
      else{
        this.setState({ user: null, authed:false, loading:false});
      }

      console.log(this.state.user.uid);
      
    });
      
    
      
  }
  shouldComponentUpdate(nextProps, nextState){

    return true;
  }



  
  render() {
    return this.state.loading === true ? <h1>Loading.....</h1> : (
     
      <div className="App">

         
          <HRouter>

          <StaticNav></StaticNav>
           

           
            <Switch>
            <PrivateRoute path={Routes.dashboard} authed ={this.state.authed} component={()=><Dashboard state={this.state}/>}/>
            <PublicRoute path={Routes.signin} authed ={this.state.authed} component={SignUpCard}/>
            <PublicRoute exact path={Routes.home} authed ={this.state.authed} component={LoginCard}/>

            


            

            </Switch>
            
          </HRouter>

         
          
       


       
       
          

      </div>
        
        );
  }
}

export default App;
