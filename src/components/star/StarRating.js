import "./starrating.css";

const StarRating = (props) => {

  return (
    <div className={"star-rating-main-div"} style={{width: `${props.actualWidth}px`}}>
      <div style={{width: `${props.totalWidth}px`}}>
        <i className={"fa fa-star"}/>
        <i className={"fa fa-star"}/>
        <i className={"fa fa-star"}/>
        <i className={"fa fa-star"}/>
        <i className={"fa fa-star"}/>
      </div>
    </div>
  )
}

export default StarRating;
