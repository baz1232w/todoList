import React from 'react';
import {Header} from './Header/Header'
import {Footer} from './Footer/Footer'
import {MainContainer} from './MainContainer/MainContainer';
import  s from './App.module.css'

export const App = () => {
    return (
        <div className={s.container}>
            <Header></Header>
            <MainContainer></MainContainer>
            <Footer></Footer>
        </div>
    );
};

