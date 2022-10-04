import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from '../components/sideBar/SideBar';
import AddEmployee from "../pages/addEmployee/AddEmployee";
import LogIn from '../pages/logIn/LogIn';
import ShowEmployee from "../pages/showEmployee/ShowEmployee";
import SignUp from '../pages/signUp/SignUp';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { useSelector } from "react-redux";
export default function Routing() {

    // store
    const isLoginUser = useSelector((store) => store.LogInReducer.isLoginUser);
    
    return (
        <>
            <BrowserRouter>
                <SideBar>
                    <Routes>
                        <Route path="/" element={<PrivateRoute isLoginUser={isLoginUser}><AddEmployee /></PrivateRoute>}
                        />
                        {/* <Route path={"/"} element={<AddEmployee />} /> */}
                        <Route path={"/showEmployee"} element={<ShowEmployee />} />
                        <Route path={"/signUp"} element={<SignUp />} />
                        {/* <Route path={"/logIn"} element={<LogIn />} /> */}
                        <Route path="/logIn" element={ <PublicRoute isLoginUser={isLoginUser}><LogIn /></PublicRoute> } />
                    </Routes>
                </SideBar>
            </BrowserRouter>
        </>
    )
}
