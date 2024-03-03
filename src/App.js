import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import './App.css'
import SideBarMenu from "./components/SideBarMenu/SideBarMenu";

import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userApi";
import {Container, Spinner} from "react-bootstrap";

const App = observer(() =>{
    if(localStorage.getItem('token') !== null) {
        const {user} = useContext(Context)
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            check().then(data => {
                user.setIsAuth(true);
                user.setUser(true)
            }).finally(() => setLoading(false))
        },)
        if (loading) {
            return <Spinner animation={"grow"}/>
        }
    }
    return (
        <BrowserRouter>
            <SideBarMenu/>
            <AppRouter/>
        </BrowserRouter>
    );
})
export default App;
