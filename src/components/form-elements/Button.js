import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button type={props.buttonType} className={props.buttonClassName} {...props}>{props.buttonText}</button>
  )
}

Button.propTypes = {
  buttonClassName: PropTypes.string,
  buttonType: PropTypes.string,
  buttonText: PropTypes.string
}

Button.defaultProps = {
  buttonClassName: "",
  buttonType: "",
  buttonText: "",
}

export default Button;
