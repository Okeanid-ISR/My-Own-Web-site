import React from "react";
import "../../styles/general_styles/footer.css";
import "../../styles/general_styles/general.css";

const Footer = ({svg}) => {
    return (
        <div className="footer-main container-fluid">
            <div className=" d-flex align-items-center justify-content-around order-md-first">
                <div className="footer-main-start">
                    <div className="footer-main-ovals">
                        <a href='https://twitter.com/OkeanidIsr'>
                            <div className="footer-main-ovals__wrap">
                                <svg width="17" height="14" viewBox="0 0 17 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.6771 4.08337C15.3021 3.61462 15.8646 3.05212 16.3021 2.39587C15.7396 2.64587 15.0833 2.83337 14.4271 2.89587C15.1146 2.48962 15.6146 1.86462 15.8646 1.08337C15.2396 1.45837 14.5208 1.73962 13.8021 1.89587C13.1771 1.23962 12.3333 0.864624 11.3958 0.864624C9.58334 0.864624 8.11459 2.33337 8.11459 4.14587C8.11459 4.39587 8.14584 4.64587 8.20834 4.89587C5.48959 4.73962 3.05209 3.42712 1.42709 1.45837C1.14584 1.92712 0.989594 2.48962 0.989594 3.11462C0.989594 4.23962 1.55209 5.23962 2.45834 5.83337C1.92709 5.80212 1.39584 5.67712 0.958344 5.42712V5.45837C0.958344 7.05212 2.08334 8.36462 3.58334 8.67712C3.33334 8.73962 3.02084 8.80212 2.73959 8.80212C2.52084 8.80212 2.33334 8.77087 2.11459 8.73962C2.52084 10.0521 3.73959 10.9896 5.17709 11.0209C4.05209 11.8959 2.64584 12.4271 1.11459 12.4271C0.833344 12.4271 0.583344 12.3959 0.333344 12.3646C1.77084 13.3021 3.48959 13.8334 5.36459 13.8334C11.3958 13.8334 14.6771 8.86462 14.6771 4.52087C14.6771 4.36462 14.6771 4.23962 14.6771 4.08337Z"
                                        fill="#5A7184"/>
                                </svg>
                            </div>
                        </a>
                        <a href='https://instagram.com/tsoy_iliya?r=nametag'>
                            <div className="footer-main-ovals__wrap">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.33333 3.73962C5.33333 3.73962 3.73958 5.36462 3.73958 7.33337C3.73958 9.33337 5.33333 10.9271 7.33333 10.9271C9.30208 10.9271 10.9271 9.33337 10.9271 7.33337C10.9271 5.36462 9.30208 3.73962 7.33333 3.73962ZM7.33333 9.67712C6.05208 9.67712 4.98958 8.64587 4.98958 7.33337C4.98958 6.05212 6.02083 5.02087 7.33333 5.02087C8.61458 5.02087 9.64583 6.05212 9.64583 7.33337C9.64583 8.64587 8.61458 9.67712 7.33333 9.67712ZM11.8958 3.61462C11.8958 3.14587 11.5208 2.77087 11.0521 2.77087C10.5833 2.77087 10.2083 3.14587 10.2083 3.61462C10.2083 4.08337 10.5833 4.45837 11.0521 4.45837C11.5208 4.45837 11.8958 4.08337 11.8958 3.61462ZM14.2708 4.45837C14.2083 3.33337 13.9583 2.33337 13.1458 1.52087C12.3333 0.708374 11.3333 0.458374 10.2083 0.395874C9.05208 0.333374 5.58333 0.333374 4.42708 0.395874C3.30208 0.458374 2.33333 0.708374 1.48958 1.52087C0.677078 2.33337 0.427078 3.33337 0.364578 4.45837C0.302078 5.61462 0.302078 9.08337 0.364578 10.2396C0.427078 11.3646 0.677078 12.3334 1.48958 13.1771C2.33333 13.9896 3.30208 14.2396 4.42708 14.3021C5.58333 14.3646 9.05208 14.3646 10.2083 14.3021C11.3333 14.2396 12.3333 13.9896 13.1458 13.1771C13.9583 12.3334 14.2083 11.3646 14.2708 10.2396C14.3333 9.08337 14.3333 5.61462 14.2708 4.45837ZM12.7708 11.4584C12.5521 12.0834 12.0521 12.5521 11.4583 12.8021C10.5208 13.1771 8.33333 13.0834 7.33333 13.0834C6.30208 13.0834 4.11458 13.1771 3.20833 12.8021C2.58333 12.5521 2.11458 12.0834 1.86458 11.4584C1.48958 10.5521 1.58333 8.36462 1.58333 7.33337C1.58333 6.33337 1.48958 4.14587 1.86458 3.20837C2.11458 2.61462 2.58333 2.14587 3.20833 1.89587C4.11458 1.52087 6.30208 1.61462 7.33333 1.61462C8.33333 1.61462 10.5208 1.52087 11.4583 1.89587C12.0521 2.11462 12.5208 2.61462 12.7708 3.20837C13.1458 4.14587 13.0521 6.33337 13.0521 7.33337C13.0521 8.36462 13.1458 10.5521 12.7708 11.4584Z"
                                        fill="#5A7184"/>
                                </svg>
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/in/ilya-tsoy-126769242/'>
                            <div className="footer-main-ovals__wrap">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.3333 0.333374H1.30208C0.770828 0.333374 0.333328 0.802124 0.333328 1.36462V13.3334C0.333328 13.8959 0.770828 14.3334 1.30208 14.3334H13.3333C13.8646 14.3334 14.3333 13.8959 14.3333 13.3334V1.36462C14.3333 0.802124 13.8646 0.333374 13.3333 0.333374ZM4.55208 12.3334H2.48958V5.67712H4.55208V12.3334ZM3.52083 4.73962C2.83333 4.73962 2.30208 4.20837 2.30208 3.55212C2.30208 2.89587 2.83333 2.33337 3.52083 2.33337C4.17708 2.33337 4.70833 2.89587 4.70833 3.55212C4.70833 4.20837 4.17708 4.73962 3.52083 4.73962ZM12.3333 12.3334H10.2396V9.08337C10.2396 8.33337 10.2396 7.33337 9.17708 7.33337C8.08333 7.33337 7.92708 8.17712 7.92708 9.05212V12.3334H5.86458V5.67712H7.83333V6.58337H7.86458C8.14583 6.05212 8.83333 5.48962 9.83333 5.48962C11.9271 5.48962 12.3333 6.89587 12.3333 8.67712V12.3334Z"
                                        fill="#5A7184"/>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-main-heart">
                <a className="footer-main-heart__link text-decoration-none text-white mt-3"
                   href="https://www.linkedin.com/in/ilya-tsoy-126769242/">Copyright © 2023. Crafted with love.</a>
            </div>
        </div>

    );
};

export default Footer;
