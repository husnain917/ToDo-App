import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/FireBase";


// Add Employee Type
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";

// Show Employee
export const SHOW_EMPLOYEE = "SHOW_EMPLOYEE";

// Delete Employee
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";



// function Add Employee 
export const addEmploye = (data, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
        const docRef = await addDoc(collection(db, "employees"), {
            data,
        });
        // console.log("Document written with ID: ", docRef.data);
        dispatch({
            type: ADD_EMPLOYEE,
            payload: data,
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    finally {
        setLoading(false);
    }
}



// function Show Employee Data
export const showEmploye = (setLoading) => async (dispatch) => {
    setLoading(true)
    try {
        let employ = [];
        const querySnapshot = await getDocs(collection(db, "employees"));
        querySnapshot.forEach((doc) => {
            employ.push({ ...doc.data(), id: doc.id });
            // console.log(`${doc.id} => ${doc.data()}`);
        });

        dispatch({
            type: SHOW_EMPLOYEE,
            payload: employ,
        })

    } catch (e) {
        console.error("Error fetch document: ", e);
    }
    finally {
        setLoading(false)
    }
}


// Delete Handler
export const deleteEmploye = (id, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
        await deleteDoc(doc(db, "employees", id));

        dispatch({
            type: DELETE_EMPLOYEE,
            payload: id,
        })
    }
    catch (e) {
        console.error("Error delete document: ", e);
    }
    finally {
        setLoading(false);
    }
} 