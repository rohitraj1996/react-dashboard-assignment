import Header from "../utility/header/Header";
import Address from "./Address";
import Label from "../form-elements/Label";
import Input from "../form-elements/Input";
import Button from "../form-elements/Button";
import {useState} from "react";

const SignUp = (props) => {

  const [formData, setFormData] = useState({
    addresses: [{}]
  });

  const handleAddressChange = (index, key, value) => {
    setFormData({
      ...formData,
      addresses: formData.addresses.map((address, i) => i === index ? {...address, [key]: value} : address)
    })
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

  return (
    <>
      <Header headerLabel={"Sign Up!"}/>
      <div className={"row mx-2 mt-3 container"}>
        <form>
          <div className={"mb-3 row"}>
            <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"First Name"} htmlFor={"firstName"}/>
            <div className={"col-sm-9 ps-0"}>
              <Input inputClassName={"form-control"} inputType={"text"} inputPlaceholder={"First Name (required)"}
                     id={"firstName"} inputRequired={true} value={formData.firstName}/>
            </div>
          </div>
          <div className={"mb-3 row"}>
            <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"Last Name"} htmlFor={"lastName"}/>
            <div className={"col-sm-9 ps-0"}>
              <Input inputClassName={"form-control"} inputType={"text"} inputPlaceholder={"Last Name (required)"}
                     id={"lastName"} inputRequired={true} value={formData.lastName}/>
            </div>
          </div>
          <div className={"mb-3 row"}>
            <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"Email"} htmlFor={"email"}/>
            <div className={"col-sm-9 ps-0"}>
              <Input inputClassName={"form-control"} inputType={"text"} inputPlaceholder={"Email (required)"}
                     id={"email"} inputRequired={true} value={formData.email}/>
            </div>
          </div>
          <div className={"mb-3 row"}>
            <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"Confirm Email"}
                   htmlFor={"confirmEmail"}/>
            <div className={"col-sm-9 ps-0"}>
              <Input inputClassName={"form-control"} inputType={"text"} inputPlaceholder={"Confirm Email (required)"}
                     id={"confirmEmail"} inputRequired={true} value={formData.confirmEmail}/>
            </div>
          </div>
          <div className={"mb-3 row"}>
            <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"Phone"} htmlFor={"phone"}/>
            <div className={"col-sm-9 ps-0"}>
              <Input inputClassName={"form-control"} inputType={"text"} inputPlaceholder={"Phone"} id={"phone"}
                     value={formData.phone}/>
            </div>
          </div>
          <div className={"mb-3 row"}>
            <Label labelClassName={"col-sm-2 pe-0 form-label"} labelText={"Send Notifications"}/>
            <div className={"form-check col-sm-1"}>
              <Input inputClassName={"form-check-input"} inputType={"radio"} inputName={"sendNotification"}
                     id={"byEmail"}/>
              <Label labelClassName={"form-check-label"} labelText={"Email"} htmlFor={"byEmail"}/>
            </div>
            <div className={"form-check col-sm-1"}>
              <Input inputClassName={"form-check-input"} inputType={"radio"} inputName={"sendNotification"}
                     id={"byText"}/>
              <Label labelClassName={"form-check-label"} labelText={"Text"} htmlFor={"byText"}/>
            </div>
          </div>
          <div className={"mb-3 row"}>
            <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"Rating"} htmlFor={"rating"}/>
            <div className={"col-sm-9 ps-0"}>
              <Input inputClassName={"form-control"} inputType={"number"} id={"rating"} value={formData.rating}/>
            </div>
          </div>
          <div className={"mb-3 form-check"}>
            <Input inputClassName={"form-check-input"} inputType={"checkbox"} value={""} id={"sendCatalog"}
                   defaultChecked={formData.sendCatalog}
                   onChange={() => setFormData({...formData, sendCatalog: !formData.sendCatalog})}/>
            <Label labelClassName={"form-check-label"} labelText={"Send me your catalog"} htmlFor={"sendCatalog"}/>
          </div>
          {formData.sendCatalog && formData.addresses?.map(
            (address, index) => <Address key={index} index={index} address={address} onChange={handleAddressChange}/>)}
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
