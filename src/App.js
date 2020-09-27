import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,  Route, Redirect} from "react-router-dom";
import Homepage from "./components/HomePage/HomePage";
import Photos from "./components/Photos/Photos";
import Posts from "./components/Posts/Posts";
import Contacts from "./components/Contacts/Contacts";
import Header from "./Header/Header";

export const MENU=[
  {
    title:"Homepage",
    path:"/homepage",
    component: Homepage,
    exact:true
  },
  {
    title:"Photos",
    path:"/photos",
    component: Photos,
    exact:true
  },
  {
    title:"Posts",
    path:"/posts",
    component: Posts,
    exact:true
  },
  {
    title:"Contacts",
    path:"/contacts",
    component: Contacts,
    exact:true
  }
  
]


function App() {
  return (
    <Router>
      <div>
        < Header />
       <Switch>
          {MENU.map(({path,component:Component,exact=false})=>
              (<Route
                path={path}
                exact={exact} 
                component = {Component} />
              ))}        
          <Route path="/" exact render={() => <Redirect to="/homepage"/>}/>
        </Switch>
      </div>
   
      
    </Router>

  );
}

export default App;
