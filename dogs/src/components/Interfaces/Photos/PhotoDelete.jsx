import React from "react";
import styled from "styled-components";
import { PHOTO_DELETE } from "../../../API/api";
import useFetch from "../../../hooks/useFetch";


const Button = styled.button`

    background-color: #ddd;
    padding: .3rem;
    line-height: 1;
    border: 1px solid transparent;
    font-size: .875rem;
    font-family: var(--type-first);
    cursor:pointer;
    border-radius: .4rem;
    transition: .1s;

    &:focus,&:hover{
        outline: none;
        background-color: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
    }
`
export default function PhotoDelete({id}){
    const {loading, request} = useFetch();

    async function hanldeClick(){
        const confirm = window.confirm("tem certeza que deseja deletar?")
    if(confirm){
        const {url, options} = PHOTO_DELETE(id)
        const {res} = await request(url, options)
        if(res.ok) window.location.reload()
    }
}
    return(
        <>
            {loading ? <Button  disabled>Deletando</Button> : <Button onClick={hanldeClick}>Deletar</Button>}
        </>
    )
}