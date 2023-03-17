import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Title } from "../../components/Interfaces/Title"
import Button from "../Form/Button";
import Input from "../Form/Input";
import useForm from "../../hooks/useForm";
import  Error  from '../../components/Interfaces/Error'
import { UserContext } from "../../global/UserContext"
import { USER_POST } from "../../API/api";

export default function LoginCreate(){

  const username = useForm()  
  const email = useForm('email')  
  const password = useForm('')   
  const {userLogin} = React.useContext(UserContext)

  async function handleSubmit(event){
    event.preventDefault();
    const {url, options} = USER_POST({ 
      username: username.value, 
      email:email.value,
      password: password.value, 
    })
    const res = await fetch(url, options)
    if(res.ok)userLogin(username.value, password.value)
    console.log(res)


  }

    return(
        <section className="animeLeft">
          <Title>Cadastre-se</Title>
          <form onSubmit={handleSubmit}>
            <Input 
              label="Usuário"
              type="text"
              name="username"
              {...username}
            />
            <Input 
              label="Email"
              type="email"
              name="email"
              {...email}
            />
            <Input 
              label="Senha"
              type="password"
              name="password"
              {...password}
            
            />
            <Button value={'Cadastrar'}/>

          </form>
          
        </section>
    )
    
}