import { combineReducers } from "redux";
import EmployeeReducer from "./EmployeeReducer";
import LogInReducer from "./LogInReducer";
const RootReducer = combineReducers({
    EmployeeReducer,
    LogInReducer,
});


export default RootReducer;