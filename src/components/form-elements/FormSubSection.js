import PropTypes from "prop-types";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";
import TextArea from "./TextArea";

const FormSubSection = (props) => {
  const {formSubSectionClassName, formSubSectionComponentTypes, labelClassName, labelText, ...rest} = props;

  const componentTypeMap = {
    "label": (key) => <Label key={key} labelText={labelText} labelClassName={labelClassName} {...rest} />,
    "input": (key) => <Input key={key} {...rest} />,
    "textarea": (key) => <TextArea key={key} {...rest} />,
    "button": (key) => <Button key={key} {...rest} />
  }

  return (
    <div className={formSubSectionClassName}>
      {formSubSectionComponentTypes.map((componentType, index) => componentTypeMap[componentType](index))}
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
  inputRequired: PropTypes.bool,
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
