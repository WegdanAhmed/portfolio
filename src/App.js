import { Component } from "react";
import './App.css'
import Home from "./Components/Home/Home";
import { Route,Routes } from "react-router-dom";
export default class App extends Component{
  render(){
    return<>
    <Routes>
      <Route path="/" Component={Home}/>
    </Routes>
    
    </>
  }
}