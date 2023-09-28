import InputGroup from "./InputGroup";


export default function FormContact(props){
      return(

    <>
   <InputGroup label=" Full name" id="full-name" 
   name="fullName" type="text" handleclick={props.handleClick} value={props.valueFullname}/>
   <InputGroup label="Email" id="email" 
   name="email" type="email" handleclick={props.handleClick} value={props.valueEmail}/>
   <InputGroup label="Phone number" id="phone-number" 
   name="phoneNumber" type="text" handleclick={props.handleClick} value={props.valuePhonenumber}/>
   <InputGroup label="Address" id="address" 
   name="address" type="text" handleclick={props.handleClick} value={props.valueAdrress}/>
   <InputGroup type="button"  submit={props.submit}/>
    </>
      )
      
    }
   
