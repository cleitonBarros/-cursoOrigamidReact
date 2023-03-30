import React from "react";
import styled from 'styled-components'
import FeedPhotoItem from "./FeedPhotoItem";
import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../API/api";
import Error from '../Interfaces/Error'
import Loading from "../Interfaces/Loading";

const Item = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
    justify-items: center;

    @media(max-width: 40rem){
        grid-template-columns: repeat(2, 1fr);
    }

`


export default function FeedPhoto({
    setInfinite,
    page,
    user,
    setModalFoto
}){

    const {data, loading, error, request} =  useFetch();
    React.useEffect(()=>{
        async function fetchPhotos(){
            const total = 6
            const {url,options} = PHOTOS_GET({page, total, user })
            const {res,json}= await request(url, options)
            if(res && res.ok && json.length < total){
                setInfinite(false)
            }

        }
        fetchPhotos()
    },[request,user, page, setInfinite])
    if(error) return <Error error={error}/>
    if(loading) return <Loading />
    if(data)
    return (   
        <Item className="animeLeft">
            {data.map((photo)=>(
                <FeedPhotoItem key={photo.id} photo={photo} setModalFoto={setModalFoto}/>
            ))}
          
        </Item>   
    )
    else return null
}
