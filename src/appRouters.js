import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from "./comps_pages/home";
import Trainings from "./comps_pages/Trainings";
import Page404 from "../src/comps_pages/page404"


export default function AppRouters() {
    const toggleThemeButton = () => {
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
                <Route path="/" element={<Home />} />
                <Route path="/trainings" element={<Trainings />} />
                <Route path="/*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}