import React, {useEffect} from "react"
import "../../styles/home_styles/myskills.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const MySkills = () => {
    useEffect(() => {
        AOS.init({
            offset: 175,
            duration: 550,
            easing: 'ease-in-out',
            delay: 0
        });
    }, []);

    return (
        <div className="mySkills-main">
            <div className="container">
                <div className="row">
                    <h2 className="mySkills__topic text-center mb-5">My Skills</h2>
                    <div data-aos="fade-up" className="col-12 col-md-6 mb-3 d-flex justify-content-around">
                        <div className="frontend-block mySkills-general-q d-flex flex-column justify-content-between align-items-center">
                            <div className="frontend-block__image"/>
                            <h4 className="text-center mb-3 frontend-block__topic">Frontend Developer</h4>
                            <p className="text-center">I have a thing for frontend because it's like playing dress-up
                                for websites - you get
                                to make them look pretty and presentable!</p>
                            <span className="frontend__languages">Languages I speak:</span>
                            <p>HTML, CSS, JavaScript, GIT, RESTful ,API</p>
                            <span className="frontend__languages">Dev tools:</span>
                            <ul className="list-unstyled text-center">
                                <li>React</li>
                                <li>Sass</li>
                                <li>Yarn</li>
                                <li>Github</li>
                                <li>Web Storm</li>
                                <li>Figma</li>
                                <li>Adobe Photoshop</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-12 col-md-6 mb-3 d-flex justify-content-around">
                        <div
                            className="backend-block mySkills-general-q d-flex flex-column justify-content-between align-items-center">
                            <div className="backend-block__image"/>
                            <h4 className="text-center mb-3 backend-block__topic">Backend Developer</h4>
                            <p className="text-center">I am a backend wizard, battling server gremlins and casting
                                spells to keep everything
                                running smoothly. You're the unsung hero of the virtual world!</p>
                            <span className="backend-block__languages">Languages I speak:</span>
                            <p>MongoDB, Java, Node.js, SQL</p>
                            <span className="frontend__languages">Dev tools:</span>
                            <ul className="list-unstyled text-center">
                                <li>Postman</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>Swagger</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySkills;