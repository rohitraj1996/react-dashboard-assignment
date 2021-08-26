import Main from "../main/Main";
import {Link} from "react-router-dom";
import "./dashboard.css";

const Dashboard = (props) => {
  return (
    <div>
      <nav className={"row bg-light dashboard-main"}>
        <label className={"col-1 my-auto"}>
          <b>Dashboard</b>
        </label>
        <Link to={"/"} className={"col-1 my-auto"}>
          Home
        </Link>
        <span className={"col-1 py-2 my-auto"}>
          <Link to={"/productList"} className={"my-auto btn btn-primary"}>
            Product List
          </Link>
        </span>
        <span className={"col-2 py-2 my-auto"}>
          <Link to={"/addProduct"} className={"my-auto btn btn-primary"}>
            Add Product
          </Link>
        </span>
      </nav>
      <Main>{props.children}</Main>
    </div>
  );
};

export default Dashboard;
