import Header from "../utility/header/Header";
import {useHistory} from "react-router-dom";
import FormSubSection from "../form-elements/FormSubSection";
import Button from "../form-elements/Button";
import {connect} from "react-redux";
import {addProductAction} from "../../redux/action/product";

const AddProduct = (props) => {

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const numberTypeField = ["price", "starRating"];
    const formData = new FormData(event.target);
    let convertedJSON = {};

    formData.forEach((value, key) => (numberTypeField.includes(key)) ?
      convertedJSON[key] = parseFloat(value) : convertedJSON[key] = value);

    convertedJSON["productId"] = Number(new Date());
    props.dispatch(addProductAction(convertedJSON));
    history.push("/productList");
  }

  return (
    <div>
      <Header headerLabel={"Add Product"}/>
      <div className={"row mt-3 container"}>
        <form onSubmit={handleSubmit}>
          <FormSubSection formSubSectionComponentTypes={["label", "input"]}
                          formSubSectionClassName={"mb-3"}
                          labelText={"Product Name"}
                          inputType={"text"}
                          inputPlaceholder={"Product Name"}
                          inputName={"productName"}
                          inputRequired={true}
          />

          <FormSubSection formSubSectionComponentTypes={["label", "input"]}
                          formSubSectionClassName={"mb-3"}
                          labelText={"Product Code"}
                          inputType={"text"}
                          inputPlaceholder={"Product Code"}
                          inputName={"productCode"}
                          inputRequired={true}
          />

          <FormSubSection formSubSectionComponentTypes={["label", "input"]}
                          formSubSectionClassName={"mb-3"}
                          labelText={"Image Url"}
                          inputType={"text"}
                          inputPlaceholder={"Image Url"}
                          inputName={"imageUrl"}
          />

          <FormSubSection formSubSectionComponentTypes={["label", "input"]}
                          formSubSectionClassName={"mb-3"}
                          labelText={"Star Rating"}
                          inputType={"number"}
                          inputPlaceholder={"0"}
                          min={"1"}
                          max={"5"}
                          inputName={"starRating"}
          />

          <FormSubSection formSubSectionComponentTypes={["label", "input"]}
                          formSubSectionClassName={"mb-3"}
                          labelText={"Price"}
                          inputType={"text"}
                          inputPlaceholder={"Price"}
                          inputName={"price"}
                          inputRequired={true}
          />

          <FormSubSection formSubSectionComponentTypes={["label", "textarea"]}
                          formSubSectionClassName={"mb-3"}
                          labelText={"Description:"}
                          textAreaRows={"3"}
                          textAreaName={"description"}
          />
          <Button buttonType={"submit"} buttonClassName={"mb-3 btn btn-primary"} buttonText={"Submit"}/>
        </form>
      </div>
    </div>
  )
}

const ConnectedAddProduct = connect()(AddProduct)
export default ConnectedAddProduct;
