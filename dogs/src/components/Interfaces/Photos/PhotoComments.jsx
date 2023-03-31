import React from "react"
import styled from "styled-components"
import {UserContext} from "../../../global/UserContext"
import PhotosCommentsForm from "./PhotosCommentsForm"

const Comentarios= styled.ul`
    overflow-y: auto;
    word-break: break-word;
    padding: 0 2rem;

    &.single{
        padding: 0px ;
    }
    li{
        margin-bottom: .5rem;
        line-height: 1.2;
    }
`
export default function PhotoComments(props){
    const [comments,setComments] =React.useState(()=> props.comments)
    const {login} = React.useContext(UserContext)
    const commentsSection = React.useRef(null)

    React.useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments]);
    
    return(
        <>
        <Comentarios className={props.single ? "single" : ""} ref={commentsSection}>
            {comments.map((comment)=>(
                <li key={comment.comment_ID}>
                    <b>{comment.comment_author}:</b>
                    <span>{comment.comment_content}</span>
                </li>
            ))}
        </Comentarios>
        {login && <PhotosCommentsForm single={props.single}setComments={setComments} id={props.id}/>}
        </>
    )
}