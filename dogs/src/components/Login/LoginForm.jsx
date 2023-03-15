import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../hooks/useForm";

export default function LoginForm(){
    const username = useForm()
    const password = useForm()

    function handleSubmit(event){
        event.preventDefault();
        if(username.validate() && password.validate())
        {
            fetch('https://dogsapi.origamid.dev/json/jwt-auth/vi/token',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            }).then((res) =>{
                console.log(res)
                return res.json()
            }).then((json)=>{
                console.log(json)
            })
        }


    }
    return(
        <section>
          <h1>Login</h1>
          <form action="" onSubmit={handleSubmit}>
            <Input 
                name='username'
                label='Usuario'
                type='text'
                {...username}
            />
            <Input 
                name='password'
                label='Senha'
                type='password'
                {...password}
            />
            <Button value="Entrar"/>
          </form>
          <Link to='/login/create'>clique aqui</Link>
        </section>
    )
    
}