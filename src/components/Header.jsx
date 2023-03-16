import React from "react";
import "../styles/header.css"
import "../styles/general.css"
import "../js/header"

const Header = ({toggleThemeButton}) => {
    return (
        <div className="header-main">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <div className="header-logo">
                            <img src="https://img.icons8.com/pastel-glyph/256/api--v1.png"
                                 className="header-logo__image"/>
                        </div>
                    </div>
                    <nav className="navBar-main col-9 d-flex align-items-center">
                        <ul className="navBar-ul list-unstyled d-flex col-10">
                            <li className="navBar-ul__list "><a className="navBar-ul__link   fw-400 text-decoration-none"
                                                               href="#">About</a></li>
                            <li className="navBar-ul__list"><a className="navBar-ul__link text-decoration-none"
                                                               href="#">Resume</a></li>
                            <li className="navBar-ul__list"><a className="navBar-ul__link text-decoration-none"
                                                               href="#">Say Hello</a></li>
                        </ul>
                        <div className="navBar-modules col-3">
                            {/*//https://freeicons.io/profile/321513 thanks him for svg*/}
                            <button onClick={toggleThemeButton} id="toggle-theme">Dark Mode</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                 viewBox="0 0 512.004 512.004">
                                <g id="Layer_x0020_1" transform="translate(-93.998 -93.998)">
                                    <path id="Path_302" data-name="Path 302"
                                          d="M350,216.939a133.066,133.066,0,1,1-94.087,38.974A132.644,132.644,0,0,1,350,216.939Zm82.774,50.287A117.063,117.063,0,1,0,467.059,350,116.695,116.695,0,0,0,432.774,267.226Z"
                                          fill="#250e1e"/>
                                    <path id="Path_303" data-name="Path 303"
                                          d="M358,102a8,8,0,1,0-16,0v67.83a8,8,0,1,0,16,0Z" fill="#250e1e"/>
                                    <path id="Path_304" data-name="Path 304"
                                          d="M531.019,180.293a8,8,0,0,0-11.313-11.313l-47.962,47.962a8,8,0,0,0,11.313,11.313l47.962-47.962Z"
                                          fill="#250e1e"/>
                                    <path id="Path_305" data-name="Path 305"
                                          d="M598,358a8,8,0,0,0,0-16h-67.83a8,8,0,0,0,0,16Z" fill="#250e1e"/>
                                    <path id="Path_306" data-name="Path 306"
                                          d="M519.707,531.019a8,8,0,0,0,11.313-11.313l-47.962-47.962a8,8,0,0,0-11.313,11.313l47.962,47.962Z"
                                          fill="#250e1e"/>
                                    <path id="Path_307" data-name="Path 307"
                                          d="M342,598a8,8,0,0,0,16,0v-67.83a8,8,0,0,0-16,0Z" fill="#250e1e"/>
                                    <path id="Path_308" data-name="Path 308"
                                          d="M168.981,519.707a8,8,0,0,0,11.313,11.313l47.962-47.962a8,8,0,0,0-11.313-11.313Z"
                                          fill="#250e1e"/>
                                    <path id="Path_309" data-name="Path 309"
                                          d="M102,342a8,8,0,1,0,0,16h67.83a8,8,0,1,0,0-16Z" fill="#250e1e"/>
                                    <path id="Path_310" data-name="Path 310"
                                          d="M180.293,168.981a8,8,0,0,0-11.313,11.313l47.962,47.962a8,8,0,1,0,11.313-11.313Z"
                                          fill="#250e1e"/>
                                    <path id="Path_311" data-name="Path 311"
                                          d="M267.226,267.226A117.063,117.063,0,1,0,350,232.941,116.695,116.695,0,0,0,267.226,267.226Z"
                                          fill="#ffda46" fillRule="evenodd"/>
                                </g>
                            </svg>
                            <svg className="navBar-modules__sound" xmlns="http://www.w3.org/2000/svg" width="50"
                                 height="50" viewBox="0 0 64 64">
                                <g id="Layer_34" data-name="Layer 34">
                                    <path
                                        d="M42.41,4.87a4.22,4.22,0,0,0-4.08-.4L13.68,17.75H7A4.26,4.26,0,0,0,2.75,22V42A4.26,4.26,0,0,0,7,46.25h6.68L38.33,59.53a4.27,4.27,0,0,0,5.92-3.9V8.37A4.25,4.25,0,0,0,42.41,4.87ZM5.25,42V22A1.76,1.76,0,0,1,7,20.25h5.75v23.5H7A1.76,1.76,0,0,1,5.25,42Zm36.5,13.63a1.76,1.76,0,0,1-2.31,1.66l-24.19-13V19.75l24.19-13a1.75,1.75,0,0,1,2.31,1.66Z"/>
                                    <path
                                        d="M49.39,15.61A1.25,1.25,0,0,0,48.61,18a14.75,14.75,0,0,1,0,28A1.25,1.25,0,0,0,49,48.45a1.32,1.32,0,0,0,.39-.06,17.26,17.26,0,0,0,0-32.78Z"/>
                                    <path
                                        d="M48.43,40.69A1.25,1.25,0,0,0,49,43.05a1.17,1.17,0,0,0,.57-.14,12.25,12.25,0,0,0,0-21.82,1.25,1.25,0,0,0-1.14,2.22,9.76,9.76,0,0,1,0,17.38Z"/>
                                    <path
                                        d="M35,30.75H30.25V26a1.25,1.25,0,0,0-2.5,0v4.75H23a1.25,1.25,0,0,0,0,2.5h4.75V38a1.25,1.25,0,0,0,2.5,0V33.25H35a1.25,1.25,0,0,0,0-2.5Z"/>
                                </g>
                            </svg>
                            {/*<svg className="navBar-modules__sound2"  xmlns="http://www.w3.org/2000/svg" width="50"*/}
                            {/*     height="50" viewBox="0 0 64 64">*/}
                            {/*    <g id="Layer_35" data-name="Layer 35">*/}
                            {/*        <path*/}
                            {/*            d="M42.41,4.87a4.22,4.22,0,0,0-4.08-.4L13.68,17.75H7A4.26,4.26,0,0,0,2.75,22V42A4.26,4.26,0,0,0,7,46.25h6.68L38.33,59.53a4.27,4.27,0,0,0,5.92-3.9V8.37A4.25,4.25,0,0,0,42.41,4.87ZM5.25,42V22A1.76,1.76,0,0,1,7,20.25h5.75v23.5H7A1.76,1.76,0,0,1,5.25,42Zm36.5,13.63a1.76,1.76,0,0,1-2.31,1.66l-24.19-13V19.75l24.19-13a1.76,1.76,0,0,1,2.31,1.66Z"/>*/}
                            {/*        <path*/}
                            {/*            d="M49.39,15.61A1.25,1.25,0,0,0,48.61,18a14.75,14.75,0,0,1,0,28A1.25,1.25,0,0,0,49,48.45a1.32,1.32,0,0,0,.39-.06,17.26,17.26,0,0,0,0-32.78Z"/>*/}
                            {/*        <path*/}
                            {/*            d="M48.43,40.69A1.25,1.25,0,0,0,49,43.05a1.17,1.17,0,0,0,.57-.14,12.25,12.25,0,0,0,0-21.82,1.25,1.25,0,0,0-1.14,2.22,9.76,9.76,0,0,1,0,17.38Z"/>*/}
                            {/*        <path d="M35,30.75H23a1.25,1.25,0,0,0,0,2.5H35a1.25,1.25,0,0,0,0-2.5Z"/>*/}
                            {/*    </g>*/}
                            {/*</svg>*/}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;