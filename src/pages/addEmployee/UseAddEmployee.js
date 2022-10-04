import { useRef,useState,useEffect } from 'react'
import { useDispatch } from "react-redux";
import { addEmploye,updateEmploye } from "../../store/actions/EmployeeActions";
import { useLocation } from "react-router-dom";


export default function UseAddEmployee() {

    // Dispatch Actions
    const dispatch = useDispatch();

    // location
    let location = useLocation();


    // States
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [date, setdate] = useState('');
    const [loading, setLoading] = useState(false);
    const [updateBtn, setUpdateBtn] = useState(true);
    const [updateId, setUpdateId] = useState(0);

    // Focus Function start
    let textInputOne = useRef(null);
    let textInputTwo = useRef(null);
    let textInputThree = useRef(null);


    const focusHandlerName = () => {
        setTimeout(() => {
            textInputOne.current.focus();
        }, 100);
    }
    const focusHandlerLastName = () => {
        setTimeout(() => {
            textInputTwo.current.focus();
        }, 100);
    }
    const focusHandlerEmail = () => {
        setTimeout(() => {
            textInputThree.current.focus();
        }, 100);
    }
    // Focus Function End


    // Add Employee Start
    const addEmployee = () => {
        if (!firstName || !lastName || !email || !phoneNum || !date) {
            alert("Please fill all Fields");
            return;
        }
        let employe = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            phoneNum : phoneNum,
            date : date,
        }
        dispatch(addEmploye(employe,setLoading));
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNum('');
        setdate('');
    }
    // Add Data End
    
    // Update Data
    useEffect(() => {
        if (location.state !== null) {
            updateHandler(location);
            // console.log(location,"add data");
        }
    }, []);
    

    // Update Handler
    const updateHandler = (location) => {
        setFirstName(location.state.rowData.data.firstName);
        setLastName(location.state.rowData.data.lastName);
        setEmail(location.state.rowData.data.email);
        setPhoneNum(location.state.rowData.data.phoneNum);
        setdate(location.state.rowData.data.date);
        setUpdateId(location.state.rowData.id);
        setUpdateBtn(false);
    }


    // Update Data
    const updateCtaHandler = () => {

        let employe = {
            id : updateId,
            firstName : firstName,
            lastName : lastName,
            email : email,
            phoneNum : phoneNum,
            date : date,
        }
        dispatch(updateEmploye(employe,setLoading));
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNum('');
        setdate('');
        setUpdateBtn(true);
    }

    return {
        focusHandlerName,
        focusHandlerLastName,
        focusHandlerEmail,
        textInputOne,
        textInputTwo,
        textInputThree,
        setFirstName,
        setLastName,
        setEmail,
        setPhoneNum,
        setdate,
        firstName,
        lastName,
        email,
        phoneNum,
        date,
        addEmployee,
        loading,
        setLoading,
        updateBtn,
        updateCtaHandler,
    }
}
