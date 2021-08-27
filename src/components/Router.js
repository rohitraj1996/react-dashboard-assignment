import {Route, Switch} from "react-router-dom";
import Home from "./home/Home";
import ProductDetail from "./product/ProductDetail";
import Dashboard from "./dashboard/Dashboard";
import ConnectedProductList from "./product/ProductList";
import ConnectedAddProduct from "./product/AddProduct";
import {connect} from "react-redux";
import {useEffect} from "react";
import {loadProductAction} from "../redux/action/product";

const Router = (props) => {

  useEffect(() => {
    console.log("Router useEffect...")
    props.dispatch(loadProductAction());
  })

  return (
    <Switch>
      <Route exact path={"/"} render={() => <Dashboard><Home/></Dashboard>}/>
      <Route path={"/productList"}
             render={() => <Dashboard><ConnectedProductList/></Dashboard>}/>
      <Route path={"/productDetail"} render={() => <Dashboard><ProductDetail/> </Dashboard>}/>
      <Route path={"/addProduct"} render={() => <Dashboard><ConnectedAddProduct/></Dashboard>}/>
    </Switch>
  )
}

const ConnectedRouter = connect()(Router);
export default ConnectedRouter;
