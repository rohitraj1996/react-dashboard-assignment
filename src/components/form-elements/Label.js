import PropTypes from "prop-types";

const Label = (props) => {
  return (
    <label className={props.labelClassName}>{props.labelText}</label>
  )
}

Label.propTypes = {
  labelClassName: PropTypes.string,
  labelText: PropTypes.string
}

Label.defaultProps = {
  labelClassName: "form-label",
  labelText: ""
}

export default Label;
