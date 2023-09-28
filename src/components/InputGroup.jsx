// import PropTypes from 'prop-types'

export default function InputGroup(props){

return(
  <div className="form">
  <label htmlFor={props.id}>
    <span className="label-text">{props.label}</span></label>
  <input type={props.type} id={props.id} name={props.name} onChange={props.handleclick} 
  value= {props.type==="button" ? "Save" : props.value} onClick={props.submit}
  />
</div>

)
}


// ContactInfo.propTypes = {
//   formData:PropTypes.object.isRequired,
  
//   ontype: PropTypes.func.isRequired,
 
//   // Add other prop validations as needed
// };
