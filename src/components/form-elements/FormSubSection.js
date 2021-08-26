import PropTypes from "prop-types";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";
import TextArea from "./TextArea";

const FormSubSection = (props) => {
  const componentTypeMap = {
    "label": <Label {...props} />,
    "input": <Input {...props} />,
    "textarea": <TextArea {...props} />,
    "button": <Button {...props} />
  }

  return (
    <div className={props.formSubSectionClassName}>
      {props.formSubSectionComponentTypes.map(componentType => componentTypeMap[componentType])}
    </div>
  )
}

FormSubSection.propTypes = {
  formSubSectionClassName: PropTypes.string,
  formSubSectionComponentTypes: PropTypes.array,
  inputClassName: PropTypes.string,
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputName: PropTypes.string,
  inputRequired: PropTypes.string,
  textAreaClassName: PropTypes.string,
  textAreaRows: PropTypes.string,
  textAreaName: PropTypes.string,
  labelClassName: PropTypes.string,
  labelText: PropTypes.string,
  buttonClassName: PropTypes.string,
  buttonType: PropTypes.string,
  buttonText: PropTypes.string
}

FormSubSection.defaultProps = {
  formSubSectionClassName: "",
  formSubSectionComponentTypes: []
}

export default FormSubSection;
