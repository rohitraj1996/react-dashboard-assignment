import PropTypes from "prop-types";

const Label = (props) => {
  const {labelClassName, labelText, ...rest} = props;
  return (
    <label className={labelClassName} {...rest}>{labelText}</label>
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
