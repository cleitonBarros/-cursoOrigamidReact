import React from "react"
import styled from "styled-components"
import useFetch from "../../../hooks/useFetch"
import {COMMENT_POST} from '../../../API/api'
import Error from '../../Interfaces/Error'

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: stretch;
    margin: 1rem;

    &.single{
        margin: 1rem 0
    }
    textarea{
        display: block;
        width: 100%;
        font-size: 1rem;
        resize: none;
        border: 1px solid #eee;
        padding: .5rem;
        border-radius: .2rme;
        background: #eee;
        transition: .2s;

        &:hover,
        &:focus{
            outline: none;
            border-color: #fb1;
            background-color: white;
            box-shadow: 0 0 0 3px #fea

        }

    }
    
    button{
        border: none;
        cursor: pointer;
        color: #333;
        font-size: 1rem;
        padding: 0 1rem;
        background: transparent;
        overflow: hidden;
        
        &:hover,
        &:focus {
            outline: none
        }

        &:hover svg path,
        &:focus svg path{
            fill: #fea;
            stroke: #fb1;
        }
    }
`



export default function PhotosCommentsForm({id, setComments,single}){

    const{request, error}=useFetch()
    const [comment,setComment] = React.useState('')

    async function handleSubmit(event){
        event.preventDefault()
        const {url, options}=COMMENT_POST(id,{ comment })
        const{res, json}= await request(url, options)
        console.log(json)
        if (res.ok) {
            setComment('');
            setComments((comments) => [...comments, json]);
          }

    }
    return(
        <Form className={single ? "single":""} onSubmit={handleSubmit}>
            <textarea 
                id='comment' 
                name='comment'
                placeholder="Comente"
                value={comment} 
                onChange={({target})=> setComment(target.value)}
            />
            <button>
                <img src="../../../../public/enviar.svg" alt="icone" />
            </button>
            <Error error={error} />
        </Form>
    )
}