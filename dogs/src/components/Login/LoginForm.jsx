import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Input from "../Form/Input";
import Button, { Btn } from "../Form/Button";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../global/UserContext"
import  Error  from '../../components/Interfaces/Error'
import {Title} from "../../components/Interfaces/Title"
import { Head } from "../Interfaces/Head";

const Form = styled.form`
    margin-bottom: 2rem;
`
const WayLink = styled(Link)`
    &.recuperar{

        display: inline-block;
        color: #666;
        padding: .5rem 0;
        line-height: 1;

        &:after{
            content:'';
            height: 2px;
            width: 100%;
            background-color: #666;
            display: block;
        }
    }
   
`
const Cadastro = styled.div`
        margin-top: 4rem;
        margin-bottom: 4rem;
        h2{
            font-family: var(--type-second);
            line-height: 1;
            font-size: 2rem;

            &:after{
                content:'';
                display:block;
                background-color: #b9b9b9;
                height: .5rem;
                width: 3rem;
                border-radius: .2rem;
            }
        }
        p{
            margin: 2rem 0 2rem 0;
        }
    

`
export default function LoginForm(){
    const username = useForm()
    const password = useForm()
    const {userLogin, error, loading} = React.useContext(UserContext)

    async function handleSubmit(event){
        event.preventDefault();

        if(username.validate() && password.validate()){
            userLogin(username.value, password.value)
        }
    }
    return(
        <section className="animeLeft">
            <Head title="Login " />
            <Title>Login</Title>
          <Form onSubmit={handleSubmit}>
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
            {loading ? <Button disabled value="Carregando..."/> : <Button value="Entrar"/>}
            <Error error={error && 'Dados incorretos'}/>
          </Form>
          <WayLink className="recuperar" to='/login/lost'>Perdeu a senha ?</WayLink>
          <Cadastro>
            <h2>Cadastre-se</h2>
            <p>ainda nao possui conta? cadastre-se no site</p>
          </Cadastro>
          <Btn>
            <WayLink to='/login/create'>cadastro</WayLink>
          </Btn>
        </section>
    )
    
}