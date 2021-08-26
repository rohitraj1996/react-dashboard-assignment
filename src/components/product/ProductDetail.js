import Header from "../utility/header/Header";
import "./productdetail.css"
import {Link, useLocation} from "react-router-dom";
import StarRating from "../star/StarRating";

const ProductDetail = () => {
  const data = useLocation().state.data
  return (
    <div>
      <Header headerLabel={`Product Detail: ${data.productName}`}/>
      <div className={"row mx-2 mt-3"}>
        <div className={"col-2"}>
          <p>Name:</p>
          <p>Code:</p>
          <p>Description:</p>
          <p>Availability:</p>
          <p>Price:</p>
          <p>5 star rating:</p>
        </div>
        <div className={"col-5"}>
          <p>{data.productName}</p>
          <p>{data.productCode}</p>
          <p>{data.description}</p>
          <p>{data.releaseDate}</p>
          <p>{data.price}</p>
          <p><StarRating totalWidth={75} actualWidth={data.starRating * 15}/></p>
        </div>
        <div className={"col-5"}>
          <img src={data.imageUrl} alt={`${data.productName}`}/>
        </div>
      </div>
      <div className={"ps-3 py-1 m-0 product-detail-back-btn-div"}>
        <Link to={"/productList"} className={"btn btn-light ms-3 my-2 product-detail-back-btn"}>
          Back
        </Link>
      </div>
    </div>
  )
}

export default ProductDetail;
