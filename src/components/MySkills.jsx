import React from "react"
import "../styles/myskills.css"

const MySkills = () => {
    return (
        <div className="mySkills-main">
            <div className="container">
                <div className="row">
                    <h2 className="mySkills__topic fs-1 text-center mb-5">My Skills:</h2>
                    <div className="col-6">
                        <div className="frontend-block mySkills-general-q d-flex flex-column justify-content-between align-items-center">
                            <div className="frontend-block__image"/>
                            <h4 className="text-center mb-3">Frontend Developer</h4>
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
                                <li>Atom</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6">
                        <div
                            className="backend-block mySkills-general-q d-flex flex-column justify-content-between align-items-center">
                            <div className="backend-block__image"/>
                            <h4 className="text-center mb-3">Backend Developer</h4>
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