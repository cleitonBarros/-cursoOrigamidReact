import React from "react"
import styled from "styled-components"
import {UserContext} from "../../../global/UserContext"
import PhotosCommentsForm from "./PhotosCommentsForm"

const Ul = styled.ul`
`
export default function PhotoComments(props){
    const [comments,setComments] =React.useState(()=> props.comments)
    const {login} = React.useContext(UserContext)
    return(
        <>
        <Ul>
            {comments.map((comment)=>(
                <li key={comment.comment_ID}>
                    <b>{comment.comment_author}:</b>
                    <span>{comment.comment_content}</span>
                </li>
            ))}
        </Ul>
        {login && <PhotosCommentsForm setComments={setComments} id={props.id}/>}
        </>
    )
}