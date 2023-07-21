import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  REMOVE_INDIVIDUAL,
} from "../constants/addtocartC";

const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const ItemIndex = state.carts.findIndex(
        (e) => e.id === action.payload.id
      );

      if (ItemIndex >= 0) {
        state.carts[ItemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case CART_REMOVE_ITEM:
      const data = state.carts.filter((e) => e.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case REMOVE_INDIVIDUAL:
      const findOne = state.carts.findIndex((e) => e.id === action.payload.id);

      if (state.carts[findOne].qty >= 1) {
        const dltItem = (state.carts[findOne].qty -= 1);
        console.log([...state.carts, dltItem]);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if ((state.carts[findOne].qty = 1)) {
        const data = state.carts.filter((e) => e.id !== action.payload);

        return {
          ...state,
          carts: data,
        };
      }

    default:
      return state;
  }
};
