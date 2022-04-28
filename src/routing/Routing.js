import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from '../components/sideBar/SideBar';
import AddEmployee from "../pages/addEmployee/AddEmployee";
import ShowEmployee from "../pages/showEmployee/ShowEmployee";
export default function Routing() {
    return (
        <>
            <BrowserRouter>
                <SideBar>
                    <Routes>
                        <Route path={"/"} element = {<AddEmployee /> } />
                        <Route path={"/showEmployee"} element = {<ShowEmployee /> } />
                    </Routes>
                </SideBar>
            </BrowserRouter>
        </>
    )
}
