import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { GET_STATS } from "../../API/api";
import { Head } from "../Interfaces/head"; 
import Loading from '../Interfaces/Loading'
import Error from '../Interfaces/Error'
import UserStatsGraphs from "./UserStatsGraphs";

export default function UserStatistic(){
    const {data, error, loading, request} = useFetch()
    React.useEffect(()=>{
        async function getData(){
            const{url, options} = GET_STATS()
            await request(url, options)
        }
        getData()
    },[request])

    if(loading) return <Loading />
    if(error) return <Error error={error}/>
    if(data) 
    return(
        <>
            <Head title="Estatisticas "/>
            <UserStatsGraphs data={data}/>
        </>   
    )
    else return null
}