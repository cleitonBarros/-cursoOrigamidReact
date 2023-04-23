import React from "react";
import styled from "styled-components"
import Input from "../Form/Input"
import  Error  from '../../components/Interfaces/Error'
import Button from "../Form/Button"
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { PHOTO_POST } from "../../API/api";
import { Head } from "../Interfaces/Head";

const PhotoPost= styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem; 

    #img{
        margin-bottom: 1rem;
    }

`
const Preview = styled.div`
   border-radius: 1rem;
   background-size: cover;
   background-position: center center;

   &:after{
    content:"";
    display: block;
    height:0px;
    padding-bottom: 100%;
   }

`
export default function  UserPhotoPost(){

    const nome = useForm();
    const peso = useForm('number');
    const idade =useForm('number');
    const [img,setImg] =React.useState({})
    const {data, error, loading, request} = useFetch()
    const navigate = useNavigate();

    React.useEffect(()=>{
        if(data) navigate('/conta')
    },[data,navigate])

    function handleSubmit(event){
        event.preventDefault();
        const formData  = new FormData()
        formData.append('img', img.raw)
        formData.append('nome', nome.value)
        formData.append('peso', peso.value)
        formData.append('idade', idade.value)

        const token = window.localStorage.getItem('token')
        const {url,options} = PHOTO_POST(formData, token)  
        request(url,options)

    }

    function handleImgChange({target}){
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0]
        })

    }
    return(
        <PhotoPost className="animeLeft">
            <Head
                title="Poste dua foto  "
                description="Home do site Dogs, como o feed de fotos"
            />
            <form onSubmit={handleSubmit}>
                <Input
                    label='nome'
                    type='text'
                    name='nome' 
                    {...nome}        
                />

                <Input
                    label='peso'
                    type='number'
                    name='peso'
                    {...peso}         
                />

                <Input
                    label='idade'
                    type='number'
                    name='idade'
                    {...idade}         
                />

                <input 
                    type='file'
                    name='img'
                    id='img'
                    onChange={handleImgChange}
                />
                {loading ? <Button disabled value="Enviando..."/> : <Button value="Enviar"/>}
                <Error error={error}/>
            </form> 
                {img.preview && 
                    <Preview 
                        style={{backgroundImage:`url(${img.preview})`}}
                    ></Preview>}
        </PhotoPost>
    )
}