import { combineReducers } from "redux";
import EmployeeReducer from "./EmployeeReducer";

const RootReducer = combineReducers({
    EmployeeReducer,
});


export default RootReducer;