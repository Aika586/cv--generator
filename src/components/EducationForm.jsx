 import InputGroup from "./InputGroup"

export default function EducationForm(props){

    return(
     <>
     <InputGroup type="text" id="degree" label="Degree"/>
     <InputGroup type="text" id="school" label="School"/>
     <InputGroup type="text" id="city" label="City"/>
     <InputGroup type="text" id="country" label="Country"/>
     <InputGroup type="date" id="start-date" label="Star date"/>
     <InputGroup type="date" id="end-date" label="End date"/>
     <InputGroup type="button" id="save" value="Save"/>
     </>
    )
  }

  

