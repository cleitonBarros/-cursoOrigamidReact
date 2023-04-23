import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from "styled-components"
import { UserContext } from '../../global/UserContext'
import Adicionar  from '../../../img/adicionar.svg'
import Sair from '../../../img/sair.svg'
import Feed  from '../../../img/feed.svg'
import Estatisticas  from '../../../img/estatisticas.svg'
import useMedia from '../../hooks/useMedia'


const MenuHamburgue = styled.button`

        background-color: #eee;
        border-radius: .2rem;
        height: 40px;
        width: 40px;

        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        transition: .2s ;
        cursor: pointer;

        &:after{
            content: "";
            display: block;
            width: 1rem;
            height: 2px;
            background: currentColor;
            border-radius: 2px;
            box-shadow: 0 6px currentColor, 
                        0 -6px currentColor;
            transition: .5s;

            
        }

        &:hover,
        &:focus,
        &.mobileButtonActive{
            outline: none;
            background: white;
            box-shadow: 0 0 0 3px #fea;
            border-color: #fb1 ;
            color: #fb1 ;
        }

        &.mobileButtonActive::after{
            transform: rotate(90deg);
            width: 4px;
            height: 4px;
            box-shadow: 0 8px currentColor, 
                        0 -8px currentColor;
            
        }
`

const Nav = styled.nav`

    &.navMobile{
        display: block;
        position: absolute;
        top: 70px;
        right: 0px;
        padding: 0 1rem;
        background: white;
        box-shadow:  0 1px 2px rgba(0,0,0,0.2);
        border-radius:.2rem;
        transform: translateX(-10px);
        opacity: 0;
    }
    &.navMobileActive{
        transform: initial;
        transition: .3s;
        opacity: 1;
        z-index: 100;
    }
    &.navMobile a,
    &.navMobile button{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            background: none;
            width: 100%;
            border: none;
            border-bottom: 1px solid #eee;
            padding: .5rem 0;
            cursor: pointer;

            &:hover{
                color: #fb1
            }
    }
        
    &.navMobile button{
        border-bottom: none;
    }

    &.nav{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 1rem;
    }
    &.nav a,
    &.button{
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

    a.disabled-link{
        pointer-events: none;
    }

`
export default function UserNav(){
    
    const {userLogout} = React.useContext(UserContext)
    const mobile = useMedia('(max-width: 40rem')
    const [mobileMenu, setMobileMenu] = React.useState(false)
    const { pathname} = useLocation()   
    React.useEffect(()=>{
        setMobileMenu(false)
    },[pathname])

    return (
        <>
            
            { mobile && 
                <MenuHamburgue 
                    aria-label='Menu'
                    className={mobileMenu && 'mobileButtonActive'}
                     onClick={()=> setMobileMenu(!mobileMenu)}
                >
                </MenuHamburgue>}
            <Nav 
                className={`${mobile ? "navMobile" : "nav"} ${mobileMenu && "navMobileActive"}`}
            >   
                <NavLink to="/conta" end>
                    <img src={Feed}/> 
                    {mobile && 'Minhas Fotos'}
                </NavLink>
                <NavLink aria-disabled to="/conta/statistic">
                    <img src={Estatisticas}/> 
                    {mobile && 'Estatistica'}
                </NavLink>
                <NavLink to="/conta/post">
                    <img src={Adicionar}/>
                    {mobile && 'Adicionar Foto'} 
                </NavLink>
                <button onClick={userLogout}> <img src={Sair}/> {mobile && 'Sair'} </button>
            </Nav>
        
        </>
    )
}