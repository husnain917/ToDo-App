import { useRef,useState } from 'react'
import { useDispatch } from "react-redux";

// Action
import { logInUser } from "../../store/actions/LogInAction";
export default function UseLogIn() {

    // Dispatch
    const dispatch = useDispatch();

    // Focus Function start
    let textInputOne = useRef(null);
    let textInputTwo = useRef(null);

    const focusHandlerEmail = () => {
        setTimeout(() => {
            textInputOne.current.focus();
        }, 100);
    }

    // Focus Function End

    // Add these variables to your component to track the state
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
        setTimeout(() => {
            textInputTwo.current.focus();
        }, 100);
    };
    const handleMouseDownPassword = () => {
        setShowPassword(!showPassword);
        setTimeout(() => {
            textInputTwo.current.focus();
        }, 100);
    };


    // States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);

    // Login Handler
    const logInHandler = () => {
        if (!email || !password) {
            alert("Please fill this Fields.");
        }

        let user = {
            email : email,
            password : password,
        }

        dispatch(logInUser(user,setLoader));
        setEmail('');
        setPassword('');
    }
    return {
        textInputOne,
        textInputTwo,
        focusHandlerEmail,
        showPassword,
        handleClickShowPassword,
        handleMouseDownPassword,
        email,
        setEmail,
        password,
        setPassword,
        logInHandler,
        loader,
    }
}
