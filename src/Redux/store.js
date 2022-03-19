import { createStore } from "redux";
import cardReducers from "./rootReducer";

const Store = createStore(cardReducers);

export default Store;
