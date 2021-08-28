import Main from "../main/Main";
import {NavLink} from "react-router-dom";
import "./dashboard.css";

const Dashboard = (props) => {
  return (
    <>
      <nav className={"row bg-light dashboard-main mx-0"}>
        <label className={"col-1 my-auto"}>
          <b>Dashboard</b>
        </label>
        <NavLink to={"/"} className={"col-1 my-auto"}>
          Home
        </NavLink>
        <NavLink className={"col-1 py-2 my-auto"} to={"/productList"}>
          Product List
        </NavLink>
        <NavLink className={"col-1 py-2 my-auto"} to={"/addProduct"}>
          Add Product
        </NavLink>
        <NavLink className={"col-1 my-auto"} to={"/signup"}>
          Sign Up
        </NavLink>
      </nav>
      <Main>{props.children}</Main>
    </>
  );
};

export default Dashboard;
