import React, {useEffect, useRef} from "react";
import "../../styles/home_styles/aboutMe.css";
import "../../styles/general_styles/general.css";
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
const AboutMe = () => {

    const color = window.getComputedStyle(document.documentElement)
        .getPropertyValue('--backForParticles').trim();

    const myRef = useRef(null);
    useEffect(() => {
        if (!myRef.current) return;
        const vantaEffect = NET({
            THREE: THREE,
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 300.00,
            maxWidth: 300.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x000000,
            backgroundColor: color,
        });
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [color]);

    return (
        <div ref={myRef} className="aboutMe-main container-fluid mt-2">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="aboutMe-info text-center shake mt-5 mb-5">
                            <h2 className="fs-1 aboutMe-info__me">Designer & Fullstack Developer</h2><br/>
                            <h4 className="fs-5">I design and code beautifully simple things, and I love what I do.</h4>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-direction-row justify-content-center">
                            <div className="back-image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
