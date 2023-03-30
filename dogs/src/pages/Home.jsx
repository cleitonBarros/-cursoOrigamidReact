import React from "react";
import Feed from '../components/Feed/Feed'
import { Container } from "../global/Container";


export default function Home(){
    return(
        
        <Container className="mainContainer">
           
            <Feed />
        </Container>
    )
    
}