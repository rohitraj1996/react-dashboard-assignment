export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const LOAD_PRODUCT = "LOAD_PRODUCT";

export function addProductAction(product) {
  return {
    type: ADD_PRODUCT,
    product,
  }
}

export function removeProductAction(productId) {
  return {
    type: REMOVE_PRODUCT,
    productId,
  }
}

export function loadProductAction(id) {
  return {
    type: LOAD_PRODUCT,
    id,
  }
}
