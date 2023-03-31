import React from "react";
import { Container } from "../global/Container";
import { Title } from "../components/Interfaces/Title";


export default function NotFound(){
    return(
        
        <Container className="mainContainer">
            <Title>Erro: 404</Title>
            <p>Pagina nao encontrada</p>    
        </Container>
    )
    
}