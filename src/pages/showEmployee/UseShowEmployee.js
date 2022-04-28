import { showEmploye,deleteEmploye } from "../../store/actions/EmployeeActions";
import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import UseAddEmployee from "../addEmployee/UseAddEmployee";

export default function UseShowEmployee() {

    // Custom Hook
    const { loading, setLoading, updateData } = UseAddEmployee();
    
    // dispatch action
    const dispatch = useDispatch();

    // Store
    const allData = useSelector((store) => store.EmployeeReducer.employeData);
    
    // Show Employee
    useEffect(() => {
      dispatch(showEmploye(setLoading));
    }, []);


    // Delete Handler
    const deleteHandler = (id) => {
      // console.log(id,"action id");
      dispatch(deleteEmploye(id,setLoading));
    }
    

    return {
        loading,
        allData,
        deleteHandler,
        updateData,
    }
}
