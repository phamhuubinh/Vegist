import { createStore } from "redux";
import RootReducer from "./reducer/rootReducer";

const Store = createStore(RootReducer)

export default Store