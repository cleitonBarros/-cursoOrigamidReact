import React from "react";
import styled from "styled-components";

const Err = styled.p`
    color: #f31;
    margin-top: 1rem 0;

`
export default function Error({error}){
    if(!error) return null
    return(
        <Err>{error}</Err>
    )
}