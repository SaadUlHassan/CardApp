import { combineReducers } from "redux";
import CardReducer from "./CardReducer/CardReducer";

const cardReducers = combineReducers({
  card: CardReducer,
});
export default cardReducers;