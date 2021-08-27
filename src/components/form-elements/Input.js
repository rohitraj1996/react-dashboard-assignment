import PropTypes from "prop-types";

const Input = (props) => {
  const {inputClassName, inputType, inputPlaceholder, inputName, inputRequired, ...rest} = props;

  return (
    <input className={inputClassName} type={inputType} placeholder={inputPlaceholder}
           name={inputName}
           required={inputRequired} {...rest}/>
  )
}

Input.propTypes = {
  inputClassName: PropTypes.string,
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputName: PropTypes.string,
  inputRequired: PropTypes.bool
}

Input.defaultProps = {
  inputClassName: "form-control",
  inputType: "text",
  inputPlaceholder: "",
  inputName: "",
  inputRequired: false
}

export default Input;
