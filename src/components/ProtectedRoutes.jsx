import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import SignInPage from "../pages/LoginPage";

function ProtectedRoutes () {
    const location = useLocation();
    const { isAuth } = useContext(UserContext);
    
    isAuth ? <Outlet /> : <Navigate to="/" replace state={{ from: location }} />
}

export default ProtectedRoutes ;