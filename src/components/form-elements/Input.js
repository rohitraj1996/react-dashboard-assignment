import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input className={props.inputClassName} type={props.inputType} placeholder={props.inputPlaceholder}
           name={props.inputName}
           required={props.inputRequired} {...props}/>
  )
}

Input.propTypes = {
  inputClassName: PropTypes.string,
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputName: PropTypes.string,
  inputRequired: PropTypes.string
}

Input.defaultProps = {
  inputClassName: "form-control",
  inputType: "text",
  inputPlaceholder: "",
  inputName: "",
  inputRequired: false
}

export default Input;
