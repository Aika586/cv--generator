import InputGroup from "./InputGroup"

export default function Experience(){
  return(
    <>
     <InputGroup label="Job title" id="job-title" 
   name="fullName" type="text"/>
   <InputGroup label="Company" id="company" 
   name="company" type="text"/>
   <InputGroup type="date" id="start-date" label="Star date"/>
     <InputGroup type="date" id="end-date" label="End date"/>
     <InputGroup type="button" id="save" value="Save"/>
     </>
    
    
  )
}