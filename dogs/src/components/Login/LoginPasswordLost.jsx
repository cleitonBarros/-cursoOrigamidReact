import React from "react";
import styled from 'styled-components'
import Input from "../Form/Input"
import Button, {Btn} from "../Form/Button"
import { Title } from "../Interfaces/Title";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_LOST } from "../../API/api";
import Error from "../Interfaces/Error";
import { Head } from "../Interfaces/head";

export default function LoginPasswordLost(){
  const login = useForm();
  const {data, loading, error, request} = useFetch();


  async function handleSubmit(event){
    event.preventDefault();
    if(login.validate()){
      const {url,options} = PASSWORD_LOST({
        login: login.value, 
        url: window.location.href.replace('lost','reset'),
      })
      await request(url,options)  
    }
  }
    return(
        <section className="animeLeft">
          <Head title="Perdeu a senha? " />
          <Title>Perdeu a senha?</Title>
          {data? <p style={{color:'#4c1'}}>{data}</p>:
          <form onSubmit={handleSubmit}>
            <Input 
              label="Email / Usuario" 
              type='text' 
              name='login'
              {...login}
            />
            {loading ? <Button disabled value="Enviando..."/> 
            : <Button value="Enviar Email"/>
            }
          </form>
        }
        <Error error={error} />
        
        </section>
    )
    
}