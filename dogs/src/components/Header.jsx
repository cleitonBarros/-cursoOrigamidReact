import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Container } from "../global/Container";
import Dogs  from '../../public/assets/dogs.svg';
import { UserContext } from '../global/UserContext';

const Headers = styled.header`
    width:100% ;
    background-color: white;
    position: fixed;
    top: 0;
    z-index: 100;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1);

    nav{
        display: flex;
        height: 4rem;
        justify-content: space-between;
        align-items: center;

        a:first-child{
            padding: .5rem 0;
        }
        a:last-child{
            display: flex;
            align-items: center;
            
            &::after{
                content: "";
                position: relative;
                top: 1px;
                display: block;
                width: 14px;
                height: 17px;
                background: url("./public/assets/usuario.svg") no-repeat center center;
                margin-left: .5rem;
            }
        }
    }
`



export default function Header(){
    const {data, userLogout} = React.useContext(UserContext)
    return(
        <Headers>
            <Container>
                <nav>
                    <Link to="/" >
                        <img src={Dogs} alt="icone" />
                    </Link>
                    {data ? (
                        <Link  className="login" to="/conta">
                            {data.nome} / 
                            <button onClick={userLogout}>Sair</button>
                        </Link>
                    ):(
                        <Link  className="login" to="/login">
                            Login / Criar Login
                        </Link>
                    )}
                </nav>
            </Container>
        </Headers>
    )
    
}