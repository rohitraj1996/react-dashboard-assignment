import {Route, Switch} from "react-router-dom";
import Home from "./home/Home";
import ProductDetail from "./product/ProductDetail";
import Dashboard from "./dashboard/Dashboard";
import ConnectedProductList from "./product/ProductList";
import ConnectedAddProduct from "./product/AddProduct";
import SignUp from "./signup/SignUp";

const Router = () => {

  return (
    <Switch>
      <Route exact path={"/"} render={() => <Dashboard><Home/></Dashboard>}/>
      <Route path={"/productList"}
             render={() => <Dashboard><ConnectedProductList/></Dashboard>}/>
      <Route path={"/productDetail"} render={() => <Dashboard><ProductDetail/> </Dashboard>}/>
      <Route path={"/addProduct"} render={() => <Dashboard><ConnectedAddProduct/></Dashboard>}/>
      <Route path={"/signup"} render={() => <Dashboard><SignUp/></Dashboard>}/>
    </Switch>
  )
}

export default Router;
