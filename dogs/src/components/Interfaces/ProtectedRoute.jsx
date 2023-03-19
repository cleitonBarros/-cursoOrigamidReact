import React from "react";
import { UserContext } from "../../global/UserContext";
import {Navigate} from 'react-router-dom'

export default function ProtectedRoute({children}){
    const {login} = React.useContext(UserContext)

    return login? children : <Navigate  to="/login"/>        
}
