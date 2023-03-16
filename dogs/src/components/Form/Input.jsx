import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-bottom: 1rem;

    label{
        display: block;
        font-size: 1rem;
        line-height: 1;
        padding-bottom: .5rem;
    }   
`
const Error = styled.p`
    color: #f31;
    font-size: .875rem;
    margin-top: 0.25rem;

`
const InputField = styled.input`
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: .8rem;
    border: 1px solid #eee;
    border-radius: .4rem;
    background: #eee;
    transition: .2s;

    &:hover,
    &:focus{
        outline: none;
        border-color: #fb1;
        background-color: white;
        box-shadow: 0 0 0 3px #fea;
    }
`

export default function Input({
    label,
    type,
    name,
    value,
    onChange,
    onBlur,
    error,
}){
    return(
        <Wrapper>
            <label htmlFor={name}>{label}</label>
            <InputField 
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <Error>{error}</Error>}

        </Wrapper>
        
        
    )
    
}