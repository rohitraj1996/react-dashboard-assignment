import Label from "../form-elements/Label";
import Input from "../form-elements/Input";

const Address = (props) => {

  const {
    address = {
      addressType: "",
      streetAddress1: "",
      streetAddress2: "",
      city: "",
      state: "",
      zip: "",
      ...props.address
    },
    index, onChange
  } = props;

  return (
    <div className={"border p-3 mb-4"}>
      <div className={"mb-3 row"}>
        <Label labelClassName={"col-sm-2 pe-0 form-label"} labelText={"Address Type"}/>
        <div className={"form-check col-sm-1"}>
          <Input inputClassName={"form-check-input"} inputType={"radio"} inputName={"addressType" + index}
                 id={"addressTypeHome"}
                 checked={address.addressType?.toLowerCase() === "home"}
                 onChange={() => onChange(index, "addressType", "home")}/>
          <Label labelClassName={"form-check-label"} labelText={"Home"} htmlFor={"addressTypeHome"}/>
        </div>
        <div className={"form-check col-sm-1"}>
          <Input inputClassName={"form-check-input"} inputType={"radio"} inputName={"addressType" + index}
                 id={"addressTypeWork"}
                 checked={address.addressType?.toLowerCase() === "work"}
                 onChange={() => onChange(index, "addressType", "work")}/>
          <Label labelClassName={"form-check-label"} labelText={"Work"} htmlFor={"addressTypeWork"}/>
        </div>
        <div className={"form-check col-sm-1"}>
          <Input inputClassName={"form-check-input"} inputType={"radio"} inputName={"addressType" + index}
                 id={"addressTypeOther"}
                 checked={address.addressType?.toLowerCase() === "other"}
                 onChange={() => onChange(index, "addressType", "other")}/>
          <Label labelClassName={"form-check-label"} labelText={"Other"} htmlFor={"addressTypeOther"}/>
        </div>
      </div>
      <div className={"mb-3 row"}>
        <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"Street Address 1"}
               htmlFor={"streetAddress1"}/>
        <div className={"col-sm-9 ps-0"}>
          <Input inputType={"text"} inputClassName={"form-control"} id={"streetAddress1"} inputRequired={true}
                 inputPlaceholder={"Street address (required)"} value={address.streetAddress1 || ""}
                 onChange={(event) => onChange(index, "streetAddress1", event.target.value)}/>
        </div>
      </div>
      <div className={"mb-3 row"}>
        <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"Street Address 2"}
               htmlFor={"streetAddress2"}/>
        <div className={"col-sm-9 ps-0"}>
          <Input inputType={"text"} inputClassName={"form-control"} id={"streetAddress2"}
                 inputPlaceholder={"Street address (second line)"} value={address.streetAddress2 || ""}
                 onChange={(event) => onChange(index, "streetAddress2", event.target.value)}/>
        </div>
      </div>
      <div className={"mb-3 row"}>
        <Label labelClassName={"col-sm-2 pe-0 col-form-label"} labelText={"City, State, Zip Code"}
               htmlFor={"cityStateZip"}/>
        <div className={"col-sm-3 ps-0"}>
          <Input inputType={"text"} inputClassName={"form-control"} id={"city"} inputPlaceholder={"City"}
                 inputRequired={true} value={address.city || ""}
                 onChange={(event) => onChange(index, "city", event.target.value)}/>
        </div>
        <div className={"col-sm-3"}>
          <select className={"form-select"} id={"state"} defaultValue={address.state || "Select a State"}
                  required={true}
                  onChange={(event) => onChange(index, "state", event.target.value)}>
            <option disabled={true} hidden={true}>Select a State</option>
            <option value={"Bihar"}>Bihar</option>
            {props.states?.map((state, index) => <option key={index} value={state.value}>{state.label}</option>)}
          </select>
        </div>
        <div className={"col-sm-3"}>
          <Input inputType={"text"} inputClassName={"form-control"} inputPlaceholder={"Zip Code"} id={"zip"}
                 inputRequired={true} value={address.zip || ""}
                 onChange={(event) => onChange(index, "zip", event.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default Address;
