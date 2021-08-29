import "./signup.css";
import Header from "../utility/header/Header";
import Address from "./Address";
import Label from "../form-elements/Label";
import Input from "../form-elements/Input";
import Button from "../form-elements/Button";
import {useState} from "react";
import {useHistory} from "react-router-dom";

const SignUp = (props) => {

  const history = useHistory();
  const [formData, setFormData] = useState({
    addresses: [{}],
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    sendNotification: "",
    rating: 0
  });

  const handleAddressChange = (index, key, value) => {
    setFormData({
      ...formData,
      addresses: formData.addresses.map((address, i) => i === index ? {...address, [key]: value} : address)
    })
  }

  const handleOnChangeForm = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }

  const addAddress = () => {
    const addresses = formData["addresses"];
    const lastAddress = addresses[addresses.length - 1];
    const {addressType = null, streetAddress1 = null, state = null, city = null, zip = null} = lastAddress;

    if (addressType && streetAddress1 && state && city && zip) {
      setFormData({...formData, addresses: [...formData.addresses, {}]});
      return true;
    }

    return false;
  }

  const removeAddress = (index) => {
    if (formData.addresses.length === 1) {
      setFormData({
        ...formData, sendCatalog: false,
        addresses: formData.addresses.filter((address, key) => key !== index)
      });
    } else {
      setFormData({...formData, addresses: formData.addresses.filter((address, key) => key !== index)});
    }
  }

  const handleAddressCheckBox = (event) => {
    if (event.target.checked && formData.addresses.length === 0) {
      setFormData({...formData, sendCatalog: !formData.sendCatalog, addresses: [{}]});
    } else {
      setFormData({...formData, sendCatalog: !formData.sendCatalog});
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Your filled form is: ", formData);
    alert("Form validated successfully, can be viewed in the console...");
    history.push("/");
  }

  return (
    <>
      <Header headerLabel={"Sign Up!"}/>
      <div className={"row mt-3 container"}>
        <form onSubmit={onSubmit}>
          <div className={"mb-3 row"}>
            <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"First Name"} htmlFor={"firstName"}/>
            <div className={"col-sm-9 ps-0"}>
              <Input inputClassName={"form-control"} inputType={"text"} inputPlaceholder={"First Name (required)"}
                     id={"firstName"} inputRequired={true} value={formData.firstName || ""} inputName={"firstName"}
                     onChange={handleOnChangeForm}/>
            </div>
          </div>
          <div className={"mb-3 row"}>
            <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"Last Name"} htmlFor={"lastName"}/>
            <div className={"col-sm-9 ps-0"}>
              <Input inputClassName={"form-control"} inputType={"text"} inputPlaceholder={"Last Name (required)"}
                     id={"lastName"} inputRequired={true} inputName={"lastName"} value={formData.lastName || ""}
                     onChange={handleOnChangeForm}/>
            </div>
          </div>
          <div className={"mb-3 row"}>
            <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"Email"} htmlFor={"email"}/>
            <div className={"col-sm-9 ps-0"}>
              <Input inputClassName={"form-control"} inputType={"text"} inputPlaceholder={"Email (required)"}
                     id={"email"} inputRequired={true} inputName={"email"} value={formData.email || ""}
                     onChange={handleOnChangeForm}/>
            </div>
          </div>
          <div className={"mb-3 row"}>
            <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"Confirm Email"}
                   htmlFor={"confirmEmail"}/>
            <div className={"col-sm-9 ps-0"}>
              <Input inputClassName={"form-control"} inputType={"text"} inputPlaceholder={"Confirm Email (required)"}
                     id={"confirmEmail"} inputRequired={true} inputName={"confirmEmail"}
                     value={formData.confirmEmail || ""}
                     onChange={handleOnChangeForm}/>
            </div>
          </div>
          <div className={"mb-3 row"}>
            <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"Phone"} htmlFor={"phone"}/>
            <div className={"col-sm-9 ps-0"}>
              <Input inputClassName={"form-control"} inputType={"text"} inputPlaceholder={"Phone"} id={"phone"}
                     inputName={"phone"} value={formData.phone || ""} onChange={handleOnChangeForm}/>
            </div>
          </div>
          <div className={"mb-3 row"}>
            <Label labelClassName={"col-sm-2 pe-0 form-label"} labelText={"Send Notifications"}/>
            <div className={"form-check col-sm-1"}>
              <Input inputClassName={"form-check-input"} inputType={"radio"} inputName={"sendNotification"}
                     id={"byEmail"} checked={formData.sendNotification === "byEmail"}
                     onChange={handleOnChangeForm} value={"byEmail"}/>
              <Label labelClassName={"form-check-label"} labelText={"Email"} htmlFor={"byEmail"}/>
            </div>
            <div className={"form-check col-sm-1"}>
              <Input inputClassName={"form-check-input"} inputType={"radio"} inputName={"sendNotification"}
                     id={"byText"} checked={formData.sendNotification === "byText"}
                     onChange={handleOnChangeForm} value={"byText"}/>
              <Label labelClassName={"form-check-label"} labelText={"Text"} htmlFor={"byText"}/>
            </div>
          </div>
          <div className={"mb-3 row"}>
            <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"Rating"} htmlFor={"rating"}/>
            <div className={"col-sm-9 ps-0"}>
              <Input inputClassName={"form-control"} inputType={"number"} id={"rating"} value={formData.rating}
                     inputName={"rating"} min={0} max={5} onChange={handleOnChangeForm}/>
            </div>
          </div>
          <div className={"mb-3 form-check"}>
            <Input inputClassName={"form-check-input"} inputType={"checkbox"} id={"sendCatalog"}
                   checked={formData.sendCatalog || false}
                   onChange={(event) => handleAddressCheckBox(event)}/>
            <Label labelClassName={"form-check-label"} labelText={"Send me your catalog"} htmlFor={"sendCatalog"}/>
          </div>
          {formData.sendCatalog && formData.addresses?.map(
            (address, index) => (
              <div key={index} className={"sign-up-address-div"}>
                <Header className={"sign-up-address-remove"}>
                  <i className={"fa fa-times"} aria-hidden={"true"} onClick={() => removeAddress(index)}/>
                </Header>
                <Address index={index} address={address} onChange={handleAddressChange}/>
              </div>))}
          {formData.sendCatalog && <Button buttonType={"button"} buttonClassName={"mb-3 btn btn-outline-primary me-4"}
                                           buttonText={"Add Another Address"} onClick={() => addAddress()}/>}
          <Button buttonType={"submit"} buttonClassName={"mb-3 btn btn-primary me-4"} buttonText={"Submit"}/>
          <Button buttonType={"button"} buttonClassName={"mb-3 btn btn-outline-secondary"} buttonText={"Test Data"}/>
        </form>

      </div>
    </>
  )
}


export default SignUp;
