import { Component } from "react";
import { Link } from "react-router-dom";
import img1 from"../assest/Future _ Personal Training, Made Modern.jpg";
export default class Home extends Component{
  render(){
    return<>
    {/* navbar section */}
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="navbar-start">
    <div className="userImage"></div>
    <div className="userName"> <h4>User Name</h4></div>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Setting</Link>
        </li>
    
      </ul>
    </div>
    <div className="navbar-end">
    <Link className="navbar-brand" to="#">Logo</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
    </nav>
    {/*fristSection */}
    <div className="fristSection">
      <div className="descraption">
         <img src={img1} />

      </div>
    </div>
      
    </>
  }
}