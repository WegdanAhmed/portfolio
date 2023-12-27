import { Component } from "react";
import { Route,Routes } from "react-router-dom";
import './App.css'
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import EditeProfile from "./Components/EditProfile/EditProfile";
import Setting from "./Components/Setting/setting";
import Login from "./Components/Login/Regester/Login";
import Logout from "./Components/Logout/Logout";
export default class App extends Component{
  render(){
    return<>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about" Component={About}/>
      <Route path="/editeprofile" Component={EditeProfile}/>
      <Route path="/setting" Component={Setting}/>
      <Route path="/login" Component={Login}/>
      <Route path="/logout"Component={Logout}/>
    </Routes>
    
    </>
  }
}