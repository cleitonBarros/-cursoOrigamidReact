import React from "react";
import styled from 'styled-components'
import Feed from '../components/Feed/Feed'
import { Container } from "../global/Container";


export default function Home(){
    return(
        
        <Container className="mainContainer">
            <Feed />
        </Container>
    )
    
}