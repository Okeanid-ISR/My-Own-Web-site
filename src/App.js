import './App.css';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MainInfo from "./components/MainInfo";
import Hobbies from "./components/Hobbies";
import React, {useRef} from "react";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";
import Companies from "./components/Companies";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";

function App() {
    const audioRef = useRef(null);

    const toggleThemeButton = () => {
        const body = document.body;
        const theme = document.getElementById("toggle-theme");
        const clickSound = audioRef.current;

        if (clickSound.readyState >= 2) {
            clickSound.currentTime = 1;
            clickSound.play();
        }

        if (theme.innerText === "Light Mode") {
            body.classList.remove('dark');
            theme.innerText = "Dark Mode";
        } else {
            body.classList.toggle('dark');
            theme.innerText = "Light Mode";
        }
    };

    const arCards = [
        {image: "hb-1", title: "Build Muscle", definition: "Guide"},
        {image: "hb-3", title: "Tattoo Designs", definition: "Guide"},
        {image: "hb-4", title: "Food Receipts", definition: "Guide"},
        {image: "hb-2", title: "Education", definition: "Guide"}
    ];

    return (
        <div className="App">
            <Header toggleThemeButton={toggleThemeButton} audioRef={audioRef}/>
            <AboutMe/>
            <MainInfo/>
            <Hobbies ar={arCards}/>
            <MySkills/>
            <Companies/>
            <Portfolio/>
            <Collaboration/>
            <Footer/>
        </div>
    );
}

export default App;
