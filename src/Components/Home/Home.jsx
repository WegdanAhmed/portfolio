import React,{ Component } from "react";
import { Link } from "react-router-dom";
import V1 from "../assest/pexels-luz-calor-som-9341591 (Original).mp4";
import Image1 from "../assest/pexels-photo-614810.jpeg";
import Image2 from "../assest/motivation.png";
import Image3 from "../assest/CREATIVITY.png";
import Image4 from "../assest/POSITIVITY.png";
import Image5 from "../assest/profile.jpg";
import Image6 from "../assest/default-logo.png";
export default class Home extends Component{

  render(){
    return<>
    <div className="homePage">
      {/* first section navpage */}
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
    
    </div>
    <div className="navbar-end">
    <Link className="dropdown navbar-brand  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <img src={Image6}/>
     </Link>
     <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
     <li><Link className="dropdown-item " to="/about">About</Link></li>
    <li><Link className="dropdown-item" to="/setting">Setting</Link></li>
    <li><Link className="dropdown-item" to="/editeprofile">Edite Profile </Link></li>
    <li><hr className="dropdown-divider"/></li>
    <li><Link className="dropdown-item" to="/login">Register/Login</Link></li>
    <li><Link className="dropdown-item" to="/logout"> Logout</Link></li>
  </ul>
    
    </div>
  </div>
    </nav>
    












    <div className="userDetails d-flex justify-content-center align-items-center">
      <div>
      <img className="rounded-circle border border-1"src={Image1} />
        <h2>Ahmed Mohiy</h2>
        <h1></h1>
      </div>
        
      </div>
    </div>




































    {/* section 2 in home page(topSkills) */}
    <div className="topSkills container">
       
         <div className="topSkillsBox container">
          <div className="skills row column-gap">
              <div className="skill w-25 m-5 col-md-4">
              <img src={Image2}className="rounded-circle" />
              <h3>MOTIVATION</h3>
              <p>Click again or double click to start editing the text.</p></div>
            <div className="skill w-25 m-5 col-md-4 ">
            <img src={Image3} className="rounded-circle "/>
              <h3>CREATIVITY</h3>
              <p>Click again or double click to start editing the text.</p>
            </div>
            <div className="skill w-25 m-5 col-md-4">
            <img src={Image4} className="rounded-circle"/>
              <h3>POSITIVITY</h3>
              <p>Click again or double click to start editing the text.</p></div> 
            
          </div>
         </div>

        <div className="summarySection container">
        <h2>Summary</h2>
        <hr/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore atque esse, laudantium repellendus ex facere vel iste, dicta qui, exercitationem optio dolorum reiciendis ad explicabo excepturi? In ipsa sunt totam et aliquid ut nostrum sapiente aspernatur odio mollitia reiciendis repudiandae facilis fugit nam unde modi minima illum quia tempora cupiditate, dolor quo dolorum vitae. Quos autem laudantium quam repudiandae laboriosam officia eius adipisci aspernatur repellendus, quibusdam facere ab cum. Cum voluptate eos voluptatem earum quia. Maxime eaque quisquam odit!</p>
       </div>
    </div>
    {/* section 3 Experiece section */}
      <div className="experiecePart ">
         <div className="sectionAdd">
          <h2>Work Experiece</h2>
         </div>
        
      <div className="accordion accordion-flush mt-5 container" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Upwork
      </button>
    </h2>
    <div id="flush-collapseOne"  data-bs-parent="#accordionFlushExample">
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
    
        {/* section 4 allSkills Card */} 
        <div className="allSkills">
      <div className="sectionAdd">
          <h2 className="mt-5">Top skills</h2>
        </div>
         <hr />
        <div className="row">
     <div className="skillBox col-md-2">
     <img src={Image2}className="rounded-circle" />
     <h2>MOTIVATION</h2>
     </div>
     <div className="skillBox col-md-2">
     <img src={Image2}className="rounded-circle" />
     <h2>MOTIVATION</h2>
     </div>
     <div className="skillBox col-md-2">
     <img src={Image2}className="rounded-circle" />
     <h2>MOTIVATION</h2>
     </div>
     <div className="skillBox col-md-2">
     <img src={Image2}className="rounded-circle" />
     <h2>MOTIVATION</h2>
     </div>
     <div className="skillBox col-md-2">
     <img src={Image2}className="rounded-circle" />
     <h2>MOTIVATION</h2>
     </div>
     <div className="skillBox col-md-2">
     <img src={Image2}className="rounded-circle" />
     <h2>MOTIVATION</h2>
     </div>
     <div className="skillBox col-md-2">
     <img src={Image2}className="rounded-circle" />
     <h2>MOTIVATION</h2>
     </div>
     <div className="skillBox col-md-2">
     <img src={Image2}className="rounded-circle" />
     <h2>MOTIVATION</h2>
     </div>
     <div className="skillBox col-md-2">
     <img src={Image2}className="rounded-circle" />
     <h2>MOTIVATION</h2>
     </div>
     <div className="skillBox col-md-2">
     <img src={Image2}className="rounded-circle" />
     <h2>MOTIVATION</h2>
     </div>
        </div>
     
      </div>

          {/* section 5 Education Card  */} 

         <div className="educationPart container">
           <div className="educationCard">
            <h2>Education</h2>
            <hr />
                <div className="row">
                  <div className="gradData m-auto col-md-11">
                    <h3> HS : school Name </h3>
                    <h3>Mark : Very Good</h3>
                    <h3>BS: Bachelor of Computer Science</h3>
                    <h3>GPA : 3.4</h3>
                  </div>
                  
                </div>
           </div>
         </div>

    {/* section 7 E-Business Card section */} 
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
                    <h4>Name :Ahmed MohiY </h4>
                    <hr />
                    <h4>Email:Ahmed@gmail.com</h4>
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