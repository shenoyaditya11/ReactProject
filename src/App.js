import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
//import {CardList} from './components/card-list/card-list-comp'
import {MainBody} from './components/mylayout/my_layout_comp'
import {Nav} from './components/mylayout/navheader'


class App extends Component {
  constructor(){
    super();
this.state={
  monsters:[
    {
      name:"adi1",
      key:"123",
      id:"1",
      details:"this is meant for  details",
      goto:"some",
      image:`https://robohash.org/1?set=set2&size=120x120`
    },
    {
      name:"adi2",
      key:"124",
      id:"2",
      details:"this is meant for  details",
      goto:"some",
      image:`https://robohash.org/2?set=set2&size=120x120`
    },
    {
      name:"adi3",
      key:"125",
      id:"3",
      details:"this is meant for  details",
      goto:"some",
      image:`https://robohash.org/3?set=set2&size=120x120`
    }  
  ]
};
    
  }
  componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=> { return response.json()}).
      then(users=> this.setState({monsters:users}));
  }

  render() {
    return (
     
      <div className="App">
        <Nav></Nav>
        <MainBody monsters= {this.state.monsters} />
         
      </div>
        
        );
  }
}

export default App;
