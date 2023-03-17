import './App.css';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MainInfo from "./components/MainInfo";
import Hobbies from "./components/Hobbies";
import ParticlesBackground from "./components/ParticlesBackground";
import React from "react";

function App() {

    const toggleThemeButton = () => {
        const body = document.body;
        const theme = document.getElementById("toggle-theme")

        if (theme.innerText === "Light Mode") {
            body.classList.remove('dark');
            theme.innerText = "Dark Mode"
        } else {
            theme.innerText = "Dark Mode"
            body.classList.toggle('dark');
            theme.innerText = "Light Mode"
        }
    };



    return (
        <div className="App">
            <ParticlesBackground/>
            <Header toggleThemeButton={toggleThemeButton}/>
            <AboutMe/>
            <MainInfo/>
            <Hobbies/>
        </div>
    );
}

export default App;
