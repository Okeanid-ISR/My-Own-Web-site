import React, {useEffect} from "react"
import "../../styles/home_styles/hobbies.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import {Link} from "react-router-dom";
import {arCards} from "./hobbiesCardsArr";
const Hobbies = () => {


    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 500,
            easing: 'ease-in-out',
            delay: 0
        });
    }, []);

    return (
        <div className="hobbies-main">
            <div className="container">
                <div className="row">
                    {arCards.map((card) => {
                        return (
                            <Link key={card.link} to={card.link} data-aos="fade-up" className="col-12 col-sm-6 col-md-6 col-xl-3 d-md-flex mb-5 hobbies_general text-decoration-none col-md-3">
                                <div className="hobbies-blocks cursor-pointer d-flex align-items-center flex-column justify-content-evenly">
                                    <div className={card.image} />
                                    <div className="text-center">
                                        <h4 className="hobbies-blocks__topic">{card.title}</h4>
                                        <p className="hobbies-blocks__guide">{card.definition}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>

    )
}

export default Hobbies;