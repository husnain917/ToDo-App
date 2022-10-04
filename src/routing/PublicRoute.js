import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute({ isLoginUser, redirectPath = '/', children, }) {
    if (isLoginUser) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
}
