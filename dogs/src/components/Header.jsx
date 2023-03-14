import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Container } from "../global/Container";


export default function Header(){
    return(
        <Container>
            <nav>
                <Link to="/" >Home</Link>
                <Link to="/login">Login / Criar Login</Link>     
            </nav>
        </Container>
    )
    
}