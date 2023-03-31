import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {Title} from '../Title'
import Image from "../Image"
import PhotoComments from "./PhotoComments";
import { UserContext } from "../../../global/UserContext";
import PhotoDelete from "./PhotoDelete";
const Photo = styled.div`
    margin: auto;
    height: 36rem;
    border-radius: .2rem;
    background-color: white;

    display: grid;
    grid-template-columns: 36rem 20rem;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    opacity: 0;
    transform: scale(.8);
    animation: ScaleUp 0.3s forwards;

    @keyframes ScaleUp{
        to{
            opacity: initial;
            transform: initial;
        }
        
    }
    @media(max-width:64rem){
        height: auto; 
        max-height: calc(100vh - 4rem);
        overflow-y: auto;
        grid-template-columns: minmax(20rem, 40rem);
    }
    &.single{
        grid-template-columns: 1fr;
        height: auto;
    }
    &.single > div:first-child{
        grid-row: 1;
        border-radius: .4rem;
        overflow: hidden;

    }
    &.single .details{
        padding: 1rem  0px 0px 0px;
    }
    .details{
        padding: 2rem 2rem 0 2rem;
    }

    .author{
        opacity: .5;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a:hover{
            color: #fb1;
            text-decoration: underline;
        }

        .views:before{
            content:"";
            display: inline-block;
            width: 16px;
            height: 10px;
            margin-right: .5rem;
            background: url('./public/visualizacao-black.svg') no-repeat;
        }
    }

    .attributes{
        display:flex;
        font-size:1.125rem;
        font-weight: bold;
        margin-top:1rem ;
        margin-bottom: 2rem;

        li{
            margin-right: 2rem;

            &:before{
                content: "";
                display: inline-block;
                height:20px;
                margin-right: .5rem;
                margin-top: 5px;
                position: relative;
                top: 3px;
                width: 2px;
                background-color: #333;

            }
        }
    }
    .comments{
        padding: 0 2rem;
    }

`
const ImgBox = styled.div`
        grid-row: 1/4;

    @media(max-width:64rem){
         grid-row: 1
        
    }


`


export default function PhotoContent({data,single}){
    const {photo, comments} = data
    const User = React.useContext(UserContext)
    return(
        <Photo className={single? "single": ""}>
            <ImgBox>
                <Image src={photo.src} alt={photo.title}  />
            </ImgBox>
            <div className="details">
                <div>
                    <p className="author">
                        {User.data && User.data.username === photo.author ? 
                        <PhotoDelete id={photo.id}/>
                            :
                        <Link to={`/profiel/${photo.author}`}>@{photo.author}</Link>
                        }
                        <span className="views">{photo.acessos}</span>
                    </p>
                        
                    <Title>
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </Title>
                    <ul className="attributes">
                        <li>{photo.peso} kgs</li>
                        <li>{photo.idade === 1 ? `${photo.idade} ano` : `${photo.idade} anos`} </li>
                    </ul>
                </div>
            </div>  
            <PhotoComments single={single}id={photo.id}  comments={comments}/>
        </Photo>
    )
}