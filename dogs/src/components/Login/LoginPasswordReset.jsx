import React from "react";
import styled from 'styled-components'
import Input from "../Form/Input";
import Button from "../Form/Button"
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { RESET_PASSWORD } from "../../API/api";
import { Title } from "../Interfaces/Title";
import Error from "../Interfaces/Error";
import { Navigate } from "react-router-dom";
import { Head } from "../Interfaces/Head";

export default function LoginPasswordReset(){
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const password = useForm()
  const {  loading, error, request } = useFetch()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if(key) setKey(key)
    if(login) setLogin(login)

  },[])

  async function handleSubmit(event){
    event.preventDefault()
    if(password.validate()){
      const {url,options} = RESET_PASSWORD({
        key,
        login,
        password: password.value
      })
    }
    const {res} = await request(url, options) 
    if(res.ok) Navigate('/login')
  }
    return(
        <section className="animeLeft">
          <Head title="Resete " />
          <Title>Resete a senha</Title>
          <p>{key}</p>
          <p>{login}</p>
          <form onSubmit={handleSubmit}>
            <Input 
              label='nova senha'
              type='password'
              name='password'
              {...password}
            />
            {loading ?
              <Button disabled value='resetando...'/>
              :
              <Button value='resetar'/> 
            }
          </form>
          <Error error={error}/>
        </section>
    )
    
}