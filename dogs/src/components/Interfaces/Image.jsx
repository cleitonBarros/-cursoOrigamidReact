import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    img{
        display: block;
        max-width:100%;
        grid-area: 1/1;
        opacity: 0;
        transition: .2s
    }
`
const Skeleton = styled.div`
    grid-area: 1/1;
    height: 100%;
    background-color: #eee;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100% );
    background-size: 200%;
    animation: skeleton 1.5s infinite linear ;

    @keyframes skeleton{
        from{
            background-position: 0px;
        }
        to{
            background-position:-200%
        }
    }
`
export default function Image({alt, ...props}){
    const [skeleton, setSkeleton] =  React.useState(true)
    function handleLoad({target}){
        setSkeleton(false)
        target.style.opacity = 1
    }
    
    return(
        <Wrapper>
            {skeleton &&  <Skeleton></Skeleton> }
            <img  onLoad={handleLoad}alt={alt}{...props} />
        </Wrapper>
    )
}