import {Route, Switch} from "react-router-dom";
import Home from "./home/Home";
import data from "../data.json";
import ProductList from "./product/ProductList";
import ProductDetail from "./product/ProductDetail";
import Dashboard from "./dashboard/Dashboard";
import AddProduct from "./product/AddProduct";
import {useState} from "react";

const Router = () => {
  const [productData, setProductData] = useState(data);

  const addProduct = (product) => {
    product["productId"] = Number(new Date());
    setProductData([...productData, product]);
  }

  const removeProduct = (product) => {
    setProductData((prevState) => prevState.filter(pro => pro.productId !== product.productId));
  }

  return (
    <Switch>
      <Route exact path={"/"} render={() => <Dashboard><Home/></Dashboard>}/>
      <Route path={"/productList"}
             render={() => <Dashboard><ProductList data={productData} deleteProduct={removeProduct}/></Dashboard>}/>
      <Route path={"/productDetail"} render={() => <Dashboard><ProductDetail/> </Dashboard>}/>
      <Route path={"/addProduct"} render={() => <Dashboard><AddProduct addProduct={addProduct}/></Dashboard>}/>
    </Switch>
  )
}

export default Router;
