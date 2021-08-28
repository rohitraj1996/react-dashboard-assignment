import {useEffect} from "react";
import {loadProductAction} from "./redux/action/product";
import {connect} from "react-redux";
import Router from "./components/Router";

function App(props) {

  useEffect(() => {
    props.dispatch(loadProductAction());
  })

  return (
    <Router/>
  );
}

const ConnectedApp = connect()(App);
export default ConnectedApp;
