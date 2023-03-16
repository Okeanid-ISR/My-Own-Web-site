import React from "react";
import "../styles/aboutMe.css";
import "../styles/general.css";

const AboutMe = () => {
    return (
        <div className="aboutMe-main container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="aboutMe__info text-center shake m-5">
                            <span className="fs-1">Designer & Fullstack Developer</span><br/>
                            I design and code beautifully simple things, and I love what I do.
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
