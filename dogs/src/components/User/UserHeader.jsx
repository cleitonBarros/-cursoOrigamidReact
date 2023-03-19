import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import { Title } from "../Interfaces/Title";
import UserNav from "./UserNav";

const Header = styled.header`
    display:  grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin: 1rem 0 2rem 0;
    position: relative;

`
export default function  UserHeader(){
    const [title, setTitle] = useState('')
    const local = useLocation()

    React.useEffect(()=>{
       const {pathname} = local;
        switch(pathname){
            case '/conta/post':
                setTitle('Poste sua foto')
                break;
            case '/conta/statistic':
                setTitle('Estatisticas')
                break;
            default:
                setTitle('Minha conta')
        }
        

    },[local])
    return(
        <Header>
            <Title>{title}</Title>
            <UserNav />
        </Header>
    )
}