import React from "react";
import { Title } from "../Interfaces/Title";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import { Head } from "../Interfaces/Head";
export default function UserProfile(){
    const{user} = useParams()
    return(
       <section className="container mainContainer">
            <Head 
                title={user}
            />
            <Title>{user}</Title>
            <Feed user={user}  />
       </section>
    )
}