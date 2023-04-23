import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Title } from "../../components/Interfaces/Title"
import Button from "../Form/Button";
import Input from "../Form/Input";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import  Error  from '../../components/Interfaces/Error'
import { UserContext } from "../../global/UserContext"
import { USER_POST } from "../../API/api";
import { Head } from "../Interfaces/Head";

export default function LoginCreate(){

  const username = useForm()  
  const email = useForm('email')  
  const password = useForm()   

  const {userLogin} = React.useContext(UserContext)
  const {request, error, loading }= useFetch()  


  async function handleSubmit(event){
    event.preventDefault();
    const {url, options} = USER_POST({ 
      username: username.value, 
      email:email.value,
      password: password.value.trim(), 
    })
    const {res} = await request(url, options)
    if(res.ok)userLogin(username.value, password.value)
    console.log(res)
  }

    return(
        <section className="animeLeft">
          <Head title="Crie sua conta " />
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
            {loading? (<Button value={'Cadastrando...'}/> ): (<Button value={'Cadastrar'}/> )}
            <Error error={error}/>
          </form>
          
        </section>
    )
    
}