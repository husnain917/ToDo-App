import { ADD_EMPLOYEE,SHOW_EMPLOYEE,DELETE_EMPLOYEE } from "../actions/EmployeeActions";


// initial state 
const initialState = {
    employeData: [],
}


export default function EmployeeReducer(state = initialState, action) {
    switch (action.type) {
        // Add Employee

        case ADD_EMPLOYEE:
            let addData = [...state.employeData, action.payload]
            return {
                ...state,
                employeData : addData,
            }

        // Show Employee
        case SHOW_EMPLOYEE :
            return {
                ...state,
                employeData : action.payload,
            }

        // Delete Employee
        case DELETE_EMPLOYEE : 
        let delData = state.employeData.filter((item) => item.id !== action.payload);
        return{
          ...state,
          employeData : delData,
        }
        default:
            return state;
    }
}
