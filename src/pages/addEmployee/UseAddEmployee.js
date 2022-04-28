import { useRef,useState,useEffect } from 'react'
import { useDispatch } from "react-redux";
import { addEmploye } from "../../store/actions/EmployeeActions";
export default function UseAddEmployee() {

    // Dispatch Actions
    const dispatch = useDispatch();

    
    // States
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [date, setdate] = useState('');
    const [loading, setLoading] = useState(false);
    const [buttonUp, setButtonUp] = useState(true);
    const [isUpdate, setIsUpdate] = useState({});

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
        let arrayData = []; 
    const updateData = (items) => {
        arrayData = [...arrayData,items];
    }
   

    useEffect(() => {
        setIsUpdate(arrayData)
        console.log(isUpdate);
    }, [])
    
    
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
        updateData,
        buttonUp,
    }
}
