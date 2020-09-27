import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Homepage from "./components/HomePage/HomePage";
import Photos from "./components/Photos/Photos";
import Posts from "./components/Posts/Posts";
import Contacts from "./components/Contacts/Contacts";


function App() {
  return (
    <Router>
    start
    <Homepage />
    <Posts />
    <Photos />    
    <Contacts />

      </Router>

  );
}

export default App;
