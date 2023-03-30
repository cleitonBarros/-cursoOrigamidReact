import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "../../global/Container";
import { UserContext } from "../../global/UserContext";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStatistic from "./UserStatistic";

export default function User(){
    const{ data }= React.useContext(UserContext)
    return (
        <Container>
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed  user={data.id}/>}/>
                <Route path="post" element={<UserPhotoPost />}/>
                <Route path="statistic" element={<UserStatistic />}/>
            </Routes>  
        </Container>   
    )
}
