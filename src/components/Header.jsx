import "../styles/header.css"
import "../styles/general.css"

const Header = ({toggleThemeButton, audioRef}) => {

    return (
        <div className="header-main">
            <div className="container">
                <div className="row">
                    <div className="col-3 col-md-2">
                        <div className="header-logo-wrapper">
                            <div className="header-logo">
                            </div>
                        </div>
                    </div>
                    <nav className="navBar-main col-9 col-md-10 align-items-center ">
                        <ul className="navBar-ul list-unstyled d-flex col-10">
                            <li className="navBar-ul__list shake"><a
                                className="navBar-ul__link   fw-400 text-decoration-none"
                                href="#">About</a></li>
                            <li className="navBar-ul__list shake"><a className="navBar-ul__link text-decoration-none"
                                                                     href="#">Resume</a></li>
                            <li className="navBar-ul__list shake"><a className="navBar-ul__link text-decoration-none"
                                                                     href="#">Say Hello</a></li>
                        </ul>

                        <div className="navBar-modules align-items-center col-3">
                            {/*//https://freeicons.io/profile/321513 thanks him for svg*/}
                            <button onClick={toggleThemeButton} id="toggle-theme">Dark Mode</button>
                            <audio ref={audioRef} preload='auto' id="click-sound"
                                   src="../audio/Sound_85854500%201634320151.mp3"/>
                            <div className="sun"/>

                        </div>

                    </nav>
                    <div className="col-9 d-flex justify-content-end align-items-center">
                        <nav className="navbar navbar-expand-lg">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                                    aria-expanded="false" aria-label="Переключатель навигации">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse nav-hid" id="navbarTogglerDemo02">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item navBar-ul__link   fw-400 text-decoration-none">
                                        <a className="nav-link active" aria-current="page" href="#">About</a>
                                    </li>
                                    <li className="nav-item navBar-ul__link   fw-400 text-decoration-none">
                                        <a className="nav-link" href="#">Resume</a>
                                    </li>
                                    <li className="nav-item navBar-ul__link   fw-400 text-decoration-none">
                                        <a className="nav-link">Say Hello</a>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Header;
