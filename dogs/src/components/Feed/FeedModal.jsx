import React from "react";
import styled from 'styled-components'
import useFetch from '../../hooks/useFetch'
import Error from '../Interfaces/Error'
import {PHOTO_GET} from '../../API/api'
import Loading from "../Interfaces/Loading";
import PhotoContent from "../Interfaces/Photos/PhotoContent";


const Modal = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    z-index: 1000;
    padding: 2rem calc(4rem + 15px) 2rem 4rem ;

    @media(max-width:40rem){
        padding: 2rem calc(2rem + 15px) 2rem 2rem
    }
`

export default function FeedModal({photo, setModalFoto}){
    const {data,error, loading, request} = useFetch();

    React.useEffect(() =>{
        const {url, options} = PHOTO_GET(photo.id)
        request(url, options)
    },[request,photo])

    function closeModal(event){
        if(event.target === event.currentTarget) setModalFoto(null)

    }
    return (

        <Modal onClick={closeModal} >
            {error && <Error error={error}/>}
            {loading && <Loading />}
            {data && <PhotoContent data={data}/>}
        </Modal>
           
        
    )
}
