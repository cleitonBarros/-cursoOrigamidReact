import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from 'styled-components'
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginCreate from "./LoginCreate";
import LoginPasswordReset from "./LoginPasswordReset";
import { UserContext } from "../../global/UserContext";

const GridForms = styled.div`
    max-width: 30rem;
    padding: 3rem;

    @media (max-width: 65rem) {
        padding:1rem 4rem;
        max-width: 100%;
    }
    @media (max-width: 40rem) {
        padding: 1rem;
        max-width: 100%;
    }
    
`
const Main = styled.main`
    display:grid;
    grid-template-columns: 1fr  1fr;
    min-height: 100vh;
    gap: 2rem;

    &::before{
        display: block;
        content:'';
        background: url("./public/login.jpg") no-repeat center center;
        background-size: cover;
    }

    @media (max-width: 65rem) {
        grid-template-columns: 1fr; 

        &:before {
            display: none;
        }
    }

`

export default function Login(){
    const {login} = React.useContext(UserContext)

    if(login === true) return <Navigate to="/conta"/>
    return(
        <Main>
            <GridForms>
                <Routes>
                        <Route path="/" element={<LoginForm />}/>
                        <Route path="create" element={<LoginCreate />}/>
                        <Route path="lost" element={<LoginPasswordLost />}/>
                        <Route path="reset" element={<LoginPasswordReset />}/>
                </Routes>
            </GridForms>
        </Main>
    )
    
}