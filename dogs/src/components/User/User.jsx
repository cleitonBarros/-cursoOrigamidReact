import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "../../global/Container";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStatistic from "./UserStatistic";

export default function User(){
    return (
        <Container>
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed />}/>
                <Route path="post" element={<UserPhotoPost />}/>
                <Route path="statistic" element={<UserStatistic />}/>
            </Routes>  
        </Container>   
    )
}
