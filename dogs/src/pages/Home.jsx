import React from "react";
import Feed from '../components/Feed/Feed'
import { Container } from "../global/Container";
import { Head } from "../components/Interfaces/head";


export default function Home(){
    return(
        
        <Container className="mainContainer">
            <Head 
                title="Fotos "
                description="Home do site Dogs, como o feed de fotos"
            />
            <Feed />
        </Container>
    )
    
}