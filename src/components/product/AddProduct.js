import Header from "../utility/header/Header";
import {useHistory} from "react-router-dom";

const AddProduct = (props) => {

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const numberTypeField = ["price", "starRating"];
    const formData = new FormData(event.target);
    let convertedJSON = {};

    formData.forEach((value, key) => (numberTypeField.includes(key)) ?
      convertedJSON[key] = parseFloat(value) : convertedJSON[key] = value);

    props.addProduct(convertedJSON);
    history.push("/productList");
  }

  return (
    <div>
      <Header headerLabel={"Add Product"}/>
      <div className={"row mx-2 mt-3 container"}>
        <form onSubmit={handleSubmit}>
          <div className={"mb-3"}>
            <label className={"form-label"}>Product Name</label>
            <input className={"form-control"} type={"text"} placeholder={"Product Name"} name={"productName"}
                   required={true}/>
          </div>
          <div className={"mb-3"}>
            <label className={"form-label"}>Product Code</label>
            <input className={"form-control"} type={"text"} placeholder={"Product Code"} name={"productCode"}
                   required={true}/>
          </div>
          <div className={"mb-3"}>
            <label className={"form-label"}>Image Url</label>
            <input className={"form-control"} type={"text"} placeholder={"Image Url"} name={"imageUrl"}/>
          </div>
          <div className={"mb-3"}>
            <label className={"form-label"}>Star Rating</label>
            <input className={"form-control"} type={"number"} placeholder={"0"} min={"1"} max={"5"}
                   name={"starRating"}/>
          </div>
          <div className={"mb-3"}>
            <label className={"form-label"}>Price</label>
            <input className={"form-control"} type={"text"} placeholder={"Price"} name={"price"} required={true}/>
          </div>
          <div className={"mb-3"}>
            <label className={"form-label"}>Description:</label>
            <textarea className={"form-control"} rows={"3"} name={"description"}/>
          </div>
          <button type={"submit"} className={"mb-3 btn btn-primary"}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct;
