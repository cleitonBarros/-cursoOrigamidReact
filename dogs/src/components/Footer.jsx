import React from "react";
import styled from 'styled-components'
import logofooter from '../../img/dogs-footer.svg'
const Rodape = styled.footer`
    background: #fb1;
    padding: 3rem 1rem 0 1rem;
    height: 10rem;
    color: #764701;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        margin-top: 1rem;
    }

`
const Box = styled.div`

    width: 50px;
`
export default function Footer(){
    return(
        <Rodape>
            <Box>
                <img src={logofooter} alt="logofooter"/>
            </Box>
            <p>Dogs. Alguns direitos reservados 2023</p>
        </Rodape>
    )
    
}