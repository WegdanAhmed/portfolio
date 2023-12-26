import React,{ Component } from "react";
import { Link } from "react-router-dom";
import V1 from "../assest/pexels-luz-calor-som-9341591 (Original).mp4";
import Image1 from "../assest/pexels-photo-614810.jpeg";
import Image2 from "../assest/motivation.png";
import Image3 from "../assest/CREATIVITY.png";
import Image4 from "../assest/POSITIVITY.png";
import Image5 from "../assest/profile.jpg"
export default class Home extends Component{

  render(){
    return<>
    <div className="homePage">
    <div className="navPage">
        {/* background firstSection*/}
     <video  src={V1} autoPlay muted loop></video>
        {/* navbar section */}
  <nav className="navbar contentnav navbar-expand-lg ">
  <div className="container-fluid">
    <div className="navbar-start">
    <div className="userImage"></div>
    <div className="userName"> <h4>Ahmed Mohiy</h4></div>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className=" nav-link" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className=" nav-link" to="#">About</Link>
        </li>
        <li className="nav-item">
          <Link className=" nav-link" to="#">Setting</Link>
        </li>
    
      </ul>
    </div>
    <div className="navbar-end">
    <Link className=" navbar-brand" to="#">Logo</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
    </nav>
    
    <div className="userDetails d-flex justify-content-center align-items-center">
      <div>
      <img className="rounded-circle border border-5"src={Image1} />
        <h2>Ahmed Mohiy</h2>
        <h1>Porduct owner</h1>
      </div>
        
      </div>
    </div>
    {/* section two in home page(topSkills) */}
    <div className="topSkills container">
       
         <div className="topSkillsBox container">
          <div className="skills row column-gap">
            <div className="skill w-25 m-5 col-md-4">
              <img src={Image2}className="rounded-circle" />
              <h3>MOTIVATION</h3>
              <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </div>
            <div className="skill w-25 m-5 col-md-4 ">
            <img src={Image3} className="rounded-circle "/>
              <h3>CREATIVITY</h3>
              <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </div>
            <div className="skill w-25 m-5 col-md-4">
            <img src={Image4} className="rounded-circle"/>
              <h3>POSITIVITY</h3>
              <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </div>
          </div>
         </div>

        <div className="summarySection container">
        <h2>Summary</h2>
        <hr/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore atque esse, laudantium repellendus ex facere vel iste, dicta qui, exercitationem optio dolorum reiciendis ad explicabo excepturi? In ipsa sunt totam et aliquid ut nostrum sapiente aspernatur odio mollitia reiciendis repudiandae facilis fugit nam unde modi minima illum quia tempora cupiditate, dolor quo dolorum vitae. Quos autem laudantium quam repudiandae laboriosam officia eius adipisci aspernatur repellendus, quibusdam facere ab cum. Cum voluptate eos voluptatem earum quia. Maxime eaque quisquam odit!</p>
       </div>
    </div>
    {/* Experiece section */}
      <div className="experiecePart container">
         <div className="sectionAdd">
          <h2>Work Experiece</h2>
         </div>
        
      <div className="accordion accordion-flush mt-5" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Upwork
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
        <p>From : 2012  </p>
        <p>to : 2012  </p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      We Egypt
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
      <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
        <p>From : 2012  </p>
        <p>to : 2020  </p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Vodafone
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
      <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
        <p>From : 2012  </p>
        <p>to : 2012  </p>
        </div>
    </div>
  </div>
       </div>
      </div>
    {/* E-Business Card section */} 
    <div className="businessCard container ">
       
           
          <div className="row">
            <div className="imgcard col-md-3 m-3">
            <img src={Image5}/>
            </div>

             <div className="Card p-5 ml-2 col-md-8">
             <div className="jobDescription">
               <h3>Job</h3>
               <h2>Description</h2>
               <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, autem eum ipsa natus ea quidem, eaque quibusdam magnam repellat optio fuga cum quos. Quibusdam soluta vel sit blanditiis consequuntur culpa?</p>
               <hr/>
             </div>
                <div className="cardData row">
                   <div className="col-md-6">
                    <h4>Name : Ahmed MohiY </h4>
                    <hr />
                    <h4>Email :AhmedMohiY420@gmail.com</h4>
                    <hr />
                    <h4>Freelance : Available</h4>
                   </div>
                   <div className="col-md-6">
                    <h4>	Job Title : UI/UX Designer</h4>
                    <hr />
                    <h4> Phone : 0115656565	</h4>
                    <hr />
                    <h4>Your Location: Egypt</h4>
                   </div>
                   <div className="cv col-md-12">
                   <button>Downloud CV</button>
                   </div>
                </div>
             </div>
             
            
             
            
          </div>

           </div>
        </div>
     
      
    </>
  }
}