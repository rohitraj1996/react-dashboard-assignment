import PropTypes from "prop-types";

const Button = (props) => {
  const {buttonType, buttonClassName, buttonText, ...rest} = props;

  return (
    <button type={buttonType} className={buttonClassName} {...rest}>{buttonText}</button>
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
