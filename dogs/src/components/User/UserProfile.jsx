import React from "react";
import { Title } from "../Interfaces/Title";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
export default function UserProfile(){
    const{user} = useParams()
    return(
       <section className="container mainContainer">
            <Title>{user}</Title>
            <Feed user={user}  />
       </section>
    )
}