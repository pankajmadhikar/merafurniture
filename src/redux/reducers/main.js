import { combineReducers } from "redux";
import { cartreducer } from "./cartReducer";

const rootred = combineReducers({
  cartreducer,
});

export default rootred;
