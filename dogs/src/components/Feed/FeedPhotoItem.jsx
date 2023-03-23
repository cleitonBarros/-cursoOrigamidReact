import React from "react";
import styled from 'styled-components'
import { Container } from "../../global/Container";

const List = styled.li`
    display: grid;
    border-radius: .2rem;
    overflow: hidden;
    cursor: pointer;

    &:nth-child(2){
        grid-column: 2/4;
        grid-row: span 2;   
    }
    &:hover .view{
        display: flex;

        &:before{
            content:"";
            display: inline-block;
            width: 16px;
            height: 10px;
            margin-right: .25rem;
            background: url('./public/visualizacao.svg') no-repeat;
            
        }
    }
    img{
        grid-area: 1/1;
    }
    
    span{
        grid-area: 1/1;
        display: none;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1rem;
        background: rgba(0, 0 , 0 , 0.3);
        color:#fff;
        
    }

    @media(max-width:40rem){
        &:nth-child(2){
            grid-column: initial;
            grid-row: initial;   
        }     
    }

`
export default function FeedPhotoItem({photo, setModalFoto}){

    function handleClick(){
        setModalFoto(photo)
    }
    return (
        <List onClick={handleClick}>
           <img src={photo.src} alt={photo.title} />
           <span className="view">{photo.acessos}</span>
        </List> 
    )
}
