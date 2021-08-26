import PropTypes from "prop-types";

const TextArea = (props) => {
  return (
    <textarea className={props.textAreaClassName} rows={props.textAreaRows} name={props.textAreaName}/>
  )
}

TextArea.propTypes = {
  textAreaClassName: PropTypes.string,
  textAreaRows: PropTypes.string,
  textAreaName: PropTypes.string,
}

TextArea.defaultProps = {
  textAreaClassName: "form-control",
  textAreaRows: "",
  textAreaName: ""
}

export default TextArea;
