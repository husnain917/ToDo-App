import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../config/FireBase";


// Sign Up
export const SIGN_UP = "SIGN_UP";

// Login 
export const LOG_IN = "LOG_IN";

// Log Out
export const LOG_OUT = "LOG_OUT";

export const userSignUp = (data, setLoader) => async (dispatch) => {
    try {
        setLoader(true);
        // console.log(data.email,"Email",data.password,"Password");

        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const userData = userCredential.user;
        // console.log(userData , "fire data");

        updateProfile(auth.currentUser, {
            displayName: data.userName, // it can be a value of an input
        });

        const docRef = await addDoc(collection(db, "users"), {
            data,
            id: userData.uid,
        });
        // console.log(docRef);
        if (userData) {
            dispatch({
                type: SIGN_UP,
                payload: userData,
            })
        }
    } catch (e) {
        const errorCode = e.code;
        const errorMessage = e.message;
        // console.error("Error add code document: ", errorCode);
        // console.error("Error adding document: ", errorMessage);
    } finally {
        setLoader(false);
    }
}


// get current user
export const getCurrentUser = (setLoader) => async (dispatch) => {
    try {
        setLoader(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                //   const uid = user.uid;
                // console.log(user,"get User Firebase");
                if (user) {
                    dispatch({
                        type: LOG_IN,
                        payload: user,
                    });
                    setLoader(false);
                }
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    } catch (e) {
        console.log("Error Get User", e);
    } finally {
        setLoader(false);
    }
}


// Login user

export const logInUser = (data, setLoader) => async (dispatch) => {
    try {
        setLoader(true);
        const logInData = await signInWithEmailAndPassword(auth, data.email, data.password);
        // Signed in 
        const userLoginData = logInData.user;
        // console.log("User Data login" , userLoginData);

        if (userLoginData) {
            dispatch({
                type: LOG_IN,
                payload: userLoginData,
            });
        }
    } catch (e) {
        console.log("Error User LogIn", e);
    } finally {
        setLoader(false);
    }
}


// logout

export const logOutUser = (setLoader) => async (dispatch) => {
    try {
        setLoader(true);
        await signOut(auth);
        dispatch({
            type: LOG_OUT,
        });

    } catch (e) {
        console.log("Error User Log Out", e);
    } finally {
        setLoader(false);
    }
}