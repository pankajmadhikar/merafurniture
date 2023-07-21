import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  REMOVE_INDIVIDUAL,
} from "../constants/addtocartC";

export const addToCart = (item) => {
  return {
    type: CART_ADD_ITEM,
    payload: item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: CART_REMOVE_ITEM,
    payload: id,
  };
};

export const removeIndividual = (item) => {
  return {
    type: REMOVE_INDIVIDUAL,
    payload: item,
  };
};
