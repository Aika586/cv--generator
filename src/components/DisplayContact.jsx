import PropTypes from 'prop-types'

export default  function DisplayContact(props){
  const{fullName,email,address,phoneNumber}=props.formData
  return(
    <div>
      <h1>{fullName}</h1>
      <ul>
        <li>{email}</li>
        <li>{phoneNumber}</li>
        <li>{address}</li>
      </ul>
    </div>
  )
} 

DisplayContact.propTypes = {
  formData:PropTypes.object.isRequired,
  

 
  // Add other prop validations as needed
};
