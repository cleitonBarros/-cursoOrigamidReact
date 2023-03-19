import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import { UserContext } from '../../global/UserContext'
import Adicionar  from '../../../public/adicionar.svg'
import Sair from '../../../public/sair.svg'
import Feed  from '../../../public/feed.svg'
import Estatisticas  from '../../../public/estatisticas.svg'

const Nav = styled.nav`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;

    a,
    button{
        background-color: #eee;
        border-radius: .2rem;
        height: 40px;
        width: 40px;

        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        transition: .3s ;
        cursor: pointer;

        &:hover,
        &:focus{
            background-color: white;
            box-shadow: 0 0 0 3px #eee;
            border-color: #333;
            outline: none;
        }

        &.active{
            background-color: white;
            box-shadow: 0 0 0 3px #fea;
            border-color: #fb1;
        }
        &.active img  svg > *{
            fill: #fb1;
        }
    }

`
export default function UserNav(){
    const[mobile, setMobile] = React.useState(null)
    const {userLogout} = React.useContext(UserContext)
    return (
        <Nav>   
            <NavLink to="/conta" end>
                 <img src={Feed}/> 
                 {mobile && 'Minhas Fotos'}
            </NavLink>
            <NavLink to="/conta/statistic">
                <img src={Estatisticas}/> 
                {mobile && 'Estatistica'}
            </NavLink>
            <NavLink to="/conta/post">
                <img src={Adicionar}/>
                {mobile && 'Adicionar Foto'} 
            </NavLink>
            <button onClick={userLogout}> <img src={Sair}/> {mobile && 'Sair'} </button>
        </Nav>
    )
}