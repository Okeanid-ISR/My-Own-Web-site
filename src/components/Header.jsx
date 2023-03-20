import React from "react";
import "../styles/header.css"
import "../styles/general.css"

const Header = ({toggleThemeButton}) => {
    return (
        <div className="header-main">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <div className="header-logo-wrapper">
                            <div className="header-logo">
                            </div>
                        </div>
                    </div>
                    <nav className="navBar-main col-10 d-flex align-items-center ">
                        <ul className="navBar-ul list-unstyled d-flex col-10">
                            <li className="navBar-ul__list shake"><a
                                className="navBar-ul__link   fw-400 text-decoration-none"
                                href="#">About</a></li>
                            <li className="navBar-ul__list shake"><a className="navBar-ul__link text-decoration-none"
                                                                     href="#">Resume</a></li>
                            <li className="navBar-ul__list shake"><a className="navBar-ul__link text-decoration-none"
                                                                     href="#">Say Hello</a></li>
                        </ul>
                        <div className="navBar-modules d-flex align-items-center col-3">
                            {/*//https://freeicons.io/profile/321513 thanks him for svg*/}
                            <button onClick={toggleThemeButton} id="toggle-theme">Dark Mode</button>
                      <div className="sun"/>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;