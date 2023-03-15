import React from "react";
import styled from 'styled-components'

const Btn = styled.button`
    font-size: 1rem;
    font-family: var(--type-first);
    cursor: pointer;
    padding: .8rem 1.2rem;
    border: none;
    border-radius: 0.4rem;
    min-width: 8rem;
    background-color: #fb1;
    color: #764701;
    transition: .1s;

    &:hover,&:focus{
        outline: none;
        box-shadow: 0 0 0 3px #fea,
                    0 0 0 4px #fb1;
    }
    &:disabled{
        opacity: .5;
        cursor: wait;
    }
`
export default function Button({value, ...props}){
    return(
        <Btn {...props} >{value}</Btn>
    )
    
}