import React from "react"
import styled from "styled-components"
import  Enviar from '../../../../public/enviar.svg'
import useFetch from "../../../hooks/useFetch"
import {COMMENT_POST} from '../../../API/api'
import Error from '../../Interfaces/Error'



export default function PhotosCommentsForm({id, setComments}){

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
        <form onSubmit={handleSubmit}>
            <textarea 
                id='comment' 
                name='comment'
                placeholder="Comente"
                value={comment} 
                onChange={({target})=> setComment(target.value)}
            />
            <button>
                <img src={Enviar} alt="icone" />
            </button>
            <Error error={error} />
        </form>
    )
}