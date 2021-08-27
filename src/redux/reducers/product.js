import data from "../../data.json";
import {ADD_PRODUCT, LOAD_PRODUCT, REMOVE_PRODUCT} from "../action/product";

export default function product(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT :
      return state.concat([action.product]);

    case REMOVE_PRODUCT :
      return state.filter((product) => product.productId !== action.productId);

    case LOAD_PRODUCT :
      return [...state, ...data];

    default :
      return state
  }
}
