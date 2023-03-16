import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginCreate from "./LoginCreate";
import LoginPasswordReset from "./LoginPasswordReset";
import { UserContext } from "../../global/UserContext";

export default function Login(){
    const {login} = React.useContext(UserContext)

    if(login === true) return <Navigate to="/conta"/>
    return(
        <>
           <Routes>
                <Route path="/" element={<LoginForm />}/>
                <Route path="create" element={<LoginCreate />}/>
                <Route path="lost" element={<LoginPasswordLost />}/>
                <Route path="reset" element={<LoginPasswordReset />}/>
           </Routes>
        </>
    )
    
}