import { LOG_IN, LOG_OUT } from "../actions/LogInAction";


// InitialState
const initialState = {
    isLoginUser: false,
    user: {},
}



export default function LogInReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
        return {
            ...state,
            isLoginUser : true,
            user : action.payload,
        }

        case LOG_OUT:
            return {
                ...state,
                isLoginUser : false,
                user : {},
            }
        default:
            return state
    }
}
