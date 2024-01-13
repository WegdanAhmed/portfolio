import React,{useState,useEffect,sticky} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import V1 from "../assest/pexels-luz-calor-som-9341591 (Original).mp4";
import Image1 from "../assest/pexels-photo-614810.jpeg";
import Image2 from "../assest/motivation.png";
import Image3 from "../assest/CREATIVITY.png";
import Image4 from "../assest/POSITIVITY.png";
import Image5 from "../assest/profile.jpg";
import Image6 from "../assest/default-logo.png";

  const Home = () => {
    // handel staky navbar
    const [prevScrollPos, setPrevScrollPos] = useState(300);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = document.documentElement.scrollTop;
        setVisible(prevScrollPos < currentScrollPos );
        setPrevScrollPos(currentScrollPos);
        console.log(currentScrollPos)
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos]);
  
  // handel certificte part
    const [certificates, setCertificates] = useState([]);
    const [certificateData, setCertificateData] = useState({
      name: '',
      trainingCenter: '',
      date: '',
      photo: null,
    });
  
    // Load certificates and certificateData from localStorage 
    useEffect(() => {
      const storedCertificates = localStorage.getItem('certificates');
      if (storedCertificates) {
        setCertificates(JSON.parse(storedCertificates));
      }
  
      const storedCertificateData = localStorage.getItem('certificateData');
      if (storedCertificateData) {
        setCertificateData(JSON.parse(storedCertificateData));
      }
    }, []);
  
    // Save certificates to localStorage 
    useEffect(() => {
      localStorage.setItem('certificates', JSON.stringify(certificates));
    }, [certificates]);
  
    // Save certificateData to localStorage 
    useEffect(() => {
      localStorage.setItem('certificateData', JSON.stringify(certificateData));
    }, [certificateData]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertificateData({
      ...certificateData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    setCertificateData({
      ...certificateData,
      photo: e.target.files[0],
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCertificate = {
      name: certificateData.name,
      trainingCenter: certificateData.trainingCenter,
      date: certificateData.date,
      photo: certificateData.photo,
    };

    setCertificates([...certificates, newCertificate]);
    setCertificateData({
      name: '',
      trainingCenter: '',
      date: '',
      photo: null,
    });
  };
  const removeCertificate = (indexToRemove) => {
    const updatedCertificates = certificates.filter((_, index) => index !== indexToRemove);
    setCertificates(updatedCertificates);
  };


  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };
  // handel education part
  const [educationData, setEducationData] = useState({
    highSchoolName: '',
    highSchoolMark: '',
    highSchoolCertificate: null,
    bachelorsName: '',
    bachelorsGPA: '',
    bachelorsCertificate: null,
  });

  const [displayData, setDisplayData] = useState({
    displayHighSchoolName: '',
    displayHighSchoolMark: '',
    displayHighSchoolCertificate: '',
    displayBachelorsName: '',
    displayBachelorsGPA: '',
    displayBachelorsCertificate: '',
  });

  const handleHighSchoolNameChange = (event) => {
    setEducationData({
      ...educationData,
      highSchoolName: event.target.value,
    });
  };

  const handleHighSchoolMarkChange = (event) => {
    setEducationData({
      ...educationData,
      highSchoolMark: event.target.value,
    });
  };

  const handleHighSchoolCertificateChange = (event) => {
    setEducationData({
      ...educationData,
      highSchoolCertificate: event.target.files[0],
    });
  };

  const handleBachelorsNameChange = (event) => {
    setEducationData({
      ...educationData,
      bachelorsName: event.target.value,
    });
  };

  const handleBachelorsGPAChange = (event) => {
    setEducationData({
      ...educationData,
      bachelorsGPA: event.target.value,
    });
  };

  const handleBachelorsCertificateChange = (event) => {
    setEducationData({
      ...educationData,
      bachelorsCertificate: event.target.files[0],
    });
  };

  const uploadData = () => {
    setDisplayData({
      displayHighSchoolName: educationData.highSchoolName,
      displayHighSchoolMark: educationData.highSchoolMark,
      displayBachelorsName: educationData.bachelorsName,
      displayBachelorsGPA: educationData.bachelorsGPA,
      displayHighSchoolCertificate: URL.createObjectURL(educationData.highSchoolCertificate),
      displayBachelorsCertificate: URL.createObjectURL(educationData.bachelorsCertificate),
    });
  };
// save the egucation data in localstorage

    return<>
    <div className="homePage">
    
     <div className="navPage">
        {/* background firstSection*/}
     <video  src={V1} autoPlay muted loop></video>
        {/* navbar section */}
    <nav className={`navbar navbar-expand-lg ${visible ? 'nav-visible' : 'nav-hidden'}`} id="navbar">
      
  <div className="nav-inner container-fluid">
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
      <img className="border border-1"src={Image1} />
        <h2>Ahmed Mohiy</h2>
        <h1></h1>
      </div>
        
      </div>
    </div>
    {/* section 2 in home page(topSkills) */}
    <div className="topSkills container">
       
         <div className="topSkillsBox container">
          <div className="skills row column-gap">
              <div className="skill  col-md-3 ">
              <img src={Image2}className="rounded-circle" />
              <h3>MOTIVATION</h3>
              <p>Click again or double click to start editing the text.</p></div>
            <div className="skill   col-md-3 ">
            <img src={Image3} className="rounded-circle "/>
              <h3>CREATIVITY</h3>
              <p>Click again or double click to start editing the text.</p>
            </div>
            <div className="skill  col-md-3">
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
         <hr />
        
      <div className="expBody accordion accordion-flush mt-5 container" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Upwork
      </button>
    </h2>
    <div id="flush-collapseOne"  data-bs-parent="#accordionFlushExample">
      <div className=" accordion-body">
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
          <h2 className="mt-2">Top skills</h2>
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
        <h2>Education </h2>
        <hr />
        <div className="uploadEducationData">
          <h3>Uploaded Your Data</h3>
          <input
            placeholder="High School Name"
            className="form-control"
            type="text"
            id="highSchoolName"
            value={educationData.highSchoolName}
            onChange={handleHighSchoolNameChange}
          />
          <input
            placeholder="Mark"
            className="form-control"
            type="text"
            id="highSchoolMark"
            value={educationData.highSchoolMark}
            onChange={handleHighSchoolMarkChange}
          />

          <input
            id="highSchoolCertificate"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleHighSchoolCertificateChange}
          />
          <button type="button" onClick={() => document.getElementById('highSchoolCertificate').click()}>
            Upload Certificate Image
          </button>
          <input
            placeholder="Bachelor's"
            className="form-control"
            type="text"
            id="bachelorsName"
            value={educationData.bachelorsName}
            onChange={handleBachelorsNameChange}
          />
          <input
            placeholder="GPA"
            className="form-control"
            type="text"
            id="bachelorsGPA"
            value={educationData.bachelorsGPA}
            onChange={handleBachelorsGPAChange}
          />
          <input
            id="bachelorsCertificate"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleBachelorsCertificateChange}
          />
          <button type="button" onClick={() => document.getElementById('bachelorsCertificate').click()}>
            Upload Certificate Image
          </button>
          <br />
          <button onClick={uploadData}>Upload</button>
        </div>
        <div className="userData">
  <div className="Item row">
    <div className="col-md-8">
      <p>{displayData.displayHighSchoolName}</p>
      <p>Mark: {displayData.displayHighSchoolMark}</p>
    </div>
    <div className="col-md-4 d-flex justify-content-center">
      <img src={displayData.displayHighSchoolCertificate} alt="High School Certificate" />
    </div>
  </div>

  <div className="Item row">
    <div className="col-md-8">
      <p>{displayData.displayBachelorsName}</p>
      <p>GPA: {displayData.displayBachelorsGPA}</p>
    </div>
    <div className="col-md-4 d-flex justify-content-center">
      <img src={displayData.displayBachelorsCertificate} alt="Bachelor's Certificate" />
    </div>
  </div>
</div>
      </div>

    {/* section 7 E-Business Card section */} 
    <div className="businessCard container ">
       
          <div className="row">
            <div className="imgcard col-md-3 ">
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



       {/* certificate part  */}
         
      
       <div className="certificates container">
       <div className="addPage">
      <h2>Add Your Certificates</h2>
      </div>
      <hr />
         <div className="cer-data">
         <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            name="name"
            value={certificateData.name}
            onChange={handleChange}
            placeholder="Certificate Name"
          />
          <input
            className="form-control"
            type="text"
            name="trainingCenter"
            value={certificateData.trainingCenter}
            onChange={handleChange}
            placeholder="Training Center"
          />
          <input
            className="form-control"
            type="text"
            name="date"
            value={certificateData.date}
            onChange={handleChange}
            placeholder="Date"
          />

          <input id="fileInput" className="selectImg" type="file" onChange={handlePhotoChange} accept="image/*" style={{ display: 'none' }} />
          <button type="button" onClick={handleButtonClick} className="uploadButton">
            Upload Image
          </button>
          <button type="submit">Add Certificate</button>
        </form>
     
         </div>
        
      {certificates.map((certificate, index) => (
        <div key={index} className="certificate-item row">
          
          <div className="col-md-8">
          <div className="remove-icon m-1" onClick={() => removeCertificate(index)}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
            <p>{certificate.name}</p>
            <p>Training Center: {certificate.trainingCenter}</p>
            <p>Date: {certificate.date}</p>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            {certificate.photo && <img src={URL.createObjectURL(certificate.photo)} alt="Certificate" />}
          </div>
        </div>
      ))}
    
   
    </div>
        </div>  






   
    </>
  }
export default Home;