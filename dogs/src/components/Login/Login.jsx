import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginCreate from "./LoginCreate";
import LoginPasswordReset from "./LoginPasswordReset";

export default function Login(){
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