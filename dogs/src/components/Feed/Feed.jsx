import React from "react";
import styled from 'styled-components'
import { Container } from "../../global/Container";
import FeedModal from "./FeedModal";
import FeedPhoto from "./FeedPhoto";


export default function Feed(){
    const [modalPhoto, setModalFoto] = React.useState(null)
    return (
        <>
           {modalPhoto && <FeedModal  photo={modalPhoto} setModalFoto={setModalFoto} /> } 
           <FeedPhoto setModalFoto={setModalFoto} />
        </> 
           
        
    )
}
