import { useRef,useState } from 'react'
import { useDispatch } from "react-redux";

// Action
import { userSignUp } from "../../store/actions/LogInAction";

export default function UseSignUp() {

    // Dispatch
    const dispatch = useDispatch();

    // Focus Function start
    let textInputOne = useRef(null);
    let textInputTwo = useRef(null);
    let textInputThree = useRef(null);

    const focusHandlerUserName = () => {
        setTimeout(() => {
            textInputOne.current.focus();
        }, 100);
    }

    const focusHandlerEmail = () => {
        setTimeout(() => {
            textInputTwo.current.focus();
        }, 100);
    }

    // Focus Function End

    // Add these variables to your component to track the state
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
        setTimeout(() => {
            textInputThree.current.focus();
        }, 100);
    };
    const handleMouseDownPassword = () => {
        setShowPassword(!showPassword);
        setTimeout(() => {
            textInputThree.current.focus();
        }, 100);
    };


    // States
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);

    // Sign Up Handler
    const signUpHandler = () => {
        if (!userName || !email || !password) {
            alert("Please fill this Fields.");
        }
        let user = {
            userName : userName,
            email: email,
            password: password,
        };
        
        dispatch(userSignUp(user,setLoader));
        setUserName('');
        setEmail('');
        setPassword('');
    }
    return {
        textInputOne,
        textInputTwo,
        textInputThree,
        focusHandlerEmail,
        focusHandlerUserName,
        showPassword,
        handleClickShowPassword,
        handleMouseDownPassword,
        email,
        setEmail,
        password,
        setPassword,
        userName,
        setUserName,
        signUpHandler,
        loader,
    }
}
