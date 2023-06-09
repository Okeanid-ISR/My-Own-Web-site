import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/comps_home/Header';
import Home from "./components/comps_pages/Home";
import Page404 from "./components/comps_pages/page404"
import Collaboration from "./components/comps_home/Collaboration";
import Footer from "./components/comps_home/Footer";
import SayHello from "./components/comps_pages/SayHello";

export default function AppRouters() {
    const playClickSound = ()=> {
        const clickSound = new Audio('/click.mp3');
        clickSound.play();
    }

    const toggleThemeButton = () => {
        playClickSound()
        const body = document.body;
        const theme = document.getElementById("toggle-theme");
        if (theme.innerText === "Light Mode") {
            body.classList.remove('dark');
            theme.innerText = "Dark Mode";
        } else {
            body.classList.toggle('dark');
            theme.innerText = "Light Mode";
        }
    };
    return (
        <BrowserRouter>
            <Header toggleThemeButton={toggleThemeButton}/>
            <Routes>
                <Route path="" element={<Home />} />
                {/*<Route path="/trainings" element={<Trainings />} />*/}
                {/*<Route path="/tattoos" element={<Tattoo />} />*/}
                <Route path="/sayHello" element={<SayHello />} />
                {/*<Route path="/food" element={<Food />} />*/}
                <Route path="/*" element={<Page404 />} />
            </Routes>
            <Collaboration/>
            <Footer/>
        </BrowserRouter>
    )
}