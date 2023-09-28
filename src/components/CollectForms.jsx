 import {useState} from "react"
 import FormContact from "./FormContact"
 import EducationForm from "./educationForm"
 import Experience from "./Experience";

export default function CollectForms(){
  const[generalInformation,setgeneralInformation]=useState({
    fullName:"",
    email:"",
    phoneNumber:"",
    address:""
  })
  
  function generalInformationevent(e){
    setgeneralInformation(prevState =>(
       {
      ...prevState,
      [e.target.name]:e.target.value

    }))

  }
  const [submitGeninformation,setSubmitgeneralinformation]=useState([])

  const handleSubmitcontactform=()=>{
    setSubmitgeneralinformation([...submitGeninformation,generalInformation]);
    setgeneralInformation({
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
    });
  }

 
  const [sectionVisibility, setSectionVisibility] = useState({
    generalInformation:false,
    education:false,
    professionalExperience:false
  });

  function handleClick(section) {
    setSectionVisibility((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  }

  return(
    <div className="collection-forms">
      <div className="general-information">
        <h1>General-information</h1>
        <button id="general-information" onClick={()=>handleClick("generalInformation")}>+Add</button>
        {sectionVisibility.generalInformation && <FormContact 
        handleClick={generalInformationevent} 
        valueFullname={generalInformation.fullName} 
        valueEmail={generalInformation.email} valuePhonenumber={generalInformation.phoneNumber} 
        valueAddress={generalInformation.address} submit={handleSubmitcontactform} />}
        <div className="display-submitData">
          {submitGeninformation.map((data,index)=>(
            <div key={index}>
       <p>{data.fullName}</p>
        <p>{data.email}</p>
        <p>{data.phoneNumber}</p>
        <p>{data.address}</p>
        </div>
          ))}
        </div>
      </div>
      <div className="education">
        <h1>Education</h1>
        <button onClick={()=>handleClick("education")} id="education">+Add</button>
        {sectionVisibility.education && <EducationForm/>}
       
      </div>
      <div className="professional-experience">a
        <h1>Professional Experience</h1>
        <button id="experience" onClick={()=>handleClick("professionalExperience")}>+Add</button>
        {sectionVisibility.professionalExperience && <Experience/>}
        <p>{generalInformation.fullName}</p>
        <p>{generalInformation.email}</p>
        <p>{generalInformation.phoneNumber}</p>
        <p>{generalInformation.address}</p>
        </div>
    </div>
  ) 
}