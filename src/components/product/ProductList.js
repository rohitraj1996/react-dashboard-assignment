import "./productlist.css"
import Header from "../utility/header/Header";
import {useState} from "react";
import {Link} from "react-router-dom";
import StarRating from "../star/StarRating";

const ProductList = (props) => {
  const [showImage, setShowImage] = useState(false);
  const [inputText, setInputText] = useState("");

  const onFilterTextChange = (value) => {
    setInputText(value);
  }

  return (
    <div>
      <Header headerLabel={"Product List"}/>
      <div className={"row"}>
        <label className={"col-2 ms-3 my-2"}>Filter By:</label>
        <input className={"col-1 input-group-sm my-2"}
               value={inputText}
               onChange={(event) => onFilterTextChange(event.target.value)} type={"text"}/>
      </div>
      <div className={"pt-2 mx-3 product-list-table-responsive"}>
        <table className={"table data-table"}>
          <thead>
          <tr>
            <th scope={"col"}>
              <button className={"btn btn-primary"} onClick={() => setShowImage(!showImage)}>
                Show Image
              </button>
            </th>
            <th scope={"col"}>Product</th>
            <th scope={"col"}>Code</th>
            <th scope={"col"}>Available</th>
            <th scope={"col"}>Price</th>
            <th scope={"col"}>5 star rating</th>
            <th scope={"col"}>Delete</th>
          </tr>
          </thead>
          <tbody>
          {props.data.filter(rowObj => rowObj.productName.toLowerCase().includes(inputText)).map((rowObj, index) => (
            <tr key={index}>
              <td>{showImage && <img width={"32"} src={rowObj.imageUrl} alt={`${rowObj.productName}`}/>}</td>
              <td><Link to={{pathname: "/productDetail", state: {data: rowObj}}}>{rowObj.productName}</Link></td>
              <td>{rowObj.productCode}</td>
              <td>{rowObj.releaseDate}</td>
              <td>{rowObj.price}</td>
              <td><StarRating totalWidth={75} actualWidth={rowObj.starRating * 15}/></td>
              <td>
                <button className={"btn btn-danger"} onClick={() => props.deleteProduct(rowObj)}>Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductList;
