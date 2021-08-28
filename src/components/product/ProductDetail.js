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
        <div className={"col-7"}>
          <div className={"row"}>
            <p className={"col-3"}>Name:</p>
            <p className={"col-9"}>{data.productName}</p>
          </div>
          <div className={"row"}>
            <p className={"col-3"}>Code:</p>
            <p className={"col-9"}>{data.productCode}</p>
          </div>
          <div className={"row"}>
            <p className={"col-3"}>Description:</p>
            <p className={"col-9"}>{data.description}</p>
          </div>
          <div className={"row"}>
            <p className={"col-3"}>Availability:</p>
            <p className={"col-9"}>{data.releaseDate}</p>
          </div>
          <div className={"row"}>
            <p className={"col-3"}>Price:</p>
            <p className={"col-9"}>{data.price}</p>
          </div>
          <div className={"row"}>
            <p className={"col-3"}>5 star rating:</p>
            <StarRating className={"col-9"} totalWidth={75} actualWidth={data.starRating * 15}/>
          </div>
        </div>
        <div className={"col-5"}>
          <img className={"product-detail-img"} src={data.imageUrl} alt={`${data.productName}`}/>
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
