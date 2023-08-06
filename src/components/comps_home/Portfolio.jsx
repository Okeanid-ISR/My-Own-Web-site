import React, {useEffect} from "react";
import "../../styles/home_styles/portfolio.css";
import "../../styles/general_styles/general.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
    useEffect(() => {
        AOS.init({
            offset: 175,
            duration: 600,
            easing: "ease-in-out",
            delay: 0,
        });
    }, []);

    const imagesAtlas = [
        "/images/atlasOne.png",
        "/images/atlasTwo.png",
        "/images/atlasThree.png",
    ];

    const imagesBrio = [
        "/images/brio-1.png",
        "/images/brio-2.png",
        "/images/brio-3.png",
        "/images/brio-4.png",
        "/images/brio-5.png",
        "/images/brio-7.png",
    ];

    const imagesEhya = [
        "/images/ehya1.png",
        "/images/ehya2.png",
        "/images/ehya3.png",
        "/images/ehya4.png",
    ];

    const imagesChristmas = [
        "/images/chrstmas1.png",
        "/images/chrstmas2.png",
        "/images/chrstmas3.png",
        "/images/chrstmas4.png",
        "/images/chrstmas5.png",
        "/images/chrstmas6.png",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
    };
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2600,
    };
    const settings3 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
    };


    return (
        <div className="portfolio-main container-fluid">
            <div className="container">
                <div className="row">
                    <div data-aos="fade-up"
                         className="col-12 col-md-12 col-lg-12 col-xl-12 d-flex flex-row portfolio-wrapper ">
                        <Slider className='' {...settings}>
                            {imagesBrio.map((url, index) => (
                                <div className='' key={index}>
                                    <a href='https://www.thebrioshop.com/'>
                                        <img className='slider-images' src={url} alt='bootstrap'/>
                                    </a>
                                </div>
                            ))}
                        </Slider>
                        <div className="portfolio-blocks-text text-align-end">
                            <h3 className='grays'>Brio</h3>
                            <p>
                                The Atlas API Project is a software tool that provides developers with easy
                                access
                                to geographic data. This data can be used to create maps, analyze location-based
                                data, and develop location-based services. The project simplifies the process of
                                working with geographic data, making it easier to build applications that use
                                this
                                information.
                            </p>
                            <div className='d-flex flex-direction-row'>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src='https://cdn-icons-png.flaticon.com/512/1216/1216733.png' alt='bootstrap'/>
                                    HTML
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src={'https://cdn-icons-png.flaticon.com/512/732/732190.png'} alt='bootstrap'/>
                                    CSS
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src="https://cdn-icons-png.flaticon.com/512/5022/5022384.png" alt='bootstrap'/>
                                    Chakra Ui
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src="https://cdn-icons-png.flaticon.com/512/892/892917.png" alt='bootstrap'/>
                                    Mongo DB
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src="https://cdn-icons-png.flaticon.com/512/1493/1493169.png" alt='bootstrap'/>
                                    API
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src="https://cdn-icons-png.flaticon.com/512/919/919853.png" alt='bootstrap'/>
                                    Docker
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt='bootstrap'/>
                                    Node Js
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src="https://cdn-icons-png.flaticon.com/512/2556/2556997.png" alt='bootstrap'/>
                                    Vite
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src="https://cdn-icons-png.flaticon.com/512/5079/5079103.png" alt='bootstrap'/>
                                    Swagger
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src='https://cdn-icons-png.flaticon.com/512/8422/8422177.png' alt='bootstrap'/>
                                    JavaScript
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src='https://cdn-icons-png.flaticon.com/512/3334/3334886.png' alt='bootstrap'/>
                                    React
                                </div>
                            </div>
                        <div className='d-flex flex-direction-row'>
                            <a className='git-back portfolio-blocks-text__checkout-btn p-2 d-flex align-items-center' href='https://github.com/Okeanid-ISR/Brio-back-end'>
                                <img className='icon-tags' src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png' alt='bootstrap'/>
                                GitHub back-end</a>
                            <a className='git-back portfolio-blocks-text__checkout-btn p-2 d-flex align-items-center' href='https://github.com/brandalx/Brio-front-end-client'>
                                <img className='icon-tags' src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png' alt='bootstrap'/>
                                GitHub front-end</a>
                        </div>
                            <a className='btn-primary portfolio-blocks-text__checkout-btn p-2'
                               href='https://www.thebrioshop.com/'>Checkout web site</a>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         className="col-12 col-md-12 col-lg-12 col-xl-12 d-flex flex-row-reverse portfolio-wrapper ">
                        <Slider className='' {...settings2}>
                            {imagesEhya.map((url, index) => (
                                <div className='' key={index}>
                                    <a href='https://ehya-space.netlify.app/'>
                                        <img className='slider-images' src={url} alt="bootstrap"/>
                                    </a>

                                </div>
                            ))}
                        </Slider>
                        <div className="portfolio-blocks-text-reverse text-align-end">
                            <h3>EhyaSpace</h3>
                            <p>
                                EhyaSpace is the collaboration hub that brings the right people, information,
                                and
                                tools together to get work done. From Fortune 100 companies to corner markets,
                                millions of people around the world use Slack to connect their teams, unify
                                their
                                systems, and drive their business forward.
                            </p>
                            <div className='d-flex flex-direction-row'>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src='https://cdn-icons-png.flaticon.com/512/1216/1216733.png' alt='bootstrap'/>
                                    HTML
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src={'https://cdn-icons-png.flaticon.com/512/732/732190.png'} alt='bootstrap'/>
                                    CSS
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src="https://cdn-icons-png.flaticon.com/512/9082/9082991.png" alt='bootstrap'/>

                                    Bootstrap
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src='https://cdn-icons-png.flaticon.com/512/8422/8422177.png' alt='bootstrap'/>
                                    JavaScript
                                </div>
                            </div>
                            <a className='git-back portfolio-blocks-text__checkout-btn p-2 d-flex align-items-center' href='https://cdn-icons-png.flaticon.com/512/2111/2111432.png'>
                                <img className='icon-tags' src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png' alt='bootstrap'/>
                                GitHub</a>
                            <a className='btn-primary portfolio-blocks-text__checkout-btn p-2'
                               href='https://ehya-space.netlify.app/'>Checkout web site</a>

                        </div>
                    </div>
                    <div data-aos="fade-up"
                         className="col-12 col-md-12 col-lg-12 col-xl-12 d-flex flex-row portfolio-wrapper ">
                        <Slider className='slider-main__image-block' {...settings3}>
                            {imagesChristmas.map((url, index) => (
                                <div className='' key={index}>
                                    <a href='https://happy-new-year-isr.netlify.app/'>

                                        <img className='slider-images' src={url} alt='bootstrap'/>
                                    </a>
                                </div>
                            ))}
                        </Slider>
                        <div className='d-flex'>
                            <div className="portfolio-blocks-text">
                                <h3>Christmas</h3>
                                <p className='ml=0 mr=0'>
                                    As the holiday season approaches and the air becomes crisp and cool, we at
                                    Christmas
                                    Shop
                                    invite you to visit our Christmas website, where you will find an extensive
                                    selection of
                                    festive decorations, gift ideas, and holiday recipes to help you spread joy and
                                    cheer to
                                    all
                                    your loved ones and make this holiday season truly unforgettable. From sparkling
                                    ornaments
                                    and twinkling lights to cozy throws and delicious treats.
                                </p>
                                <div className='d-flex flex-direction-row'>
                                    <div className='portfolio-blocks-text__tags'>
                                        <img className='icon-tags'
                                             src='https://cdn-icons-png.flaticon.com/512/1216/1216733.png' alt='bootstrap'/>
                                        HTML
                                    </div>
                                    <div className='portfolio-blocks-text__tags'>
                                        <img className='icon-tags'
                                             src={'https://cdn-icons-png.flaticon.com/512/732/732190.png'} alt='bootstrap'/>
                                        CSS
                                    </div>
                                    <div className='portfolio-blocks-text__tags'>
                                        <img className='icon-tags'
                                             src="https://cdn-icons-png.flaticon.com/512/9082/9082991.png"
                                             alt='bootstrap'/>

                                        Bootstrap
                                    </div>
                                    <div className='portfolio-blocks-text__tags'>
                                        <img className='icon-tags'
                                             src='https://cdn-icons-png.flaticon.com/512/8422/8422177.png' alt='bootstrap'/>
                                        JavaScript
                                    </div>
                                </div>
                                <a className='git-back portfolio-blocks-text__checkout-btn p-2 d-flex align-items-center' href='https://cdn-icons-png.flaticon.com/512/2111/2111432.png'>
                                    <img className='icon-tags' src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png' alt='bootstrap'/>
                                    GitHub</a>
                                <a className='btn-primary portfolio-blocks-text__checkout-btn p-2'
                                   href='https://happy-new-year-isr.netlify.app/'>Checkout web site</a>

                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         className="col-12 col-md-12 col-lg-12 col-xl-12 d-flex flex-row-reverse portfolio-wrapper ">
                        <Slider className='' {...settings}>
                            {imagesAtlas.map((url, index) => (
                                <div className='' key={index}>
                                    <a href='https://atlas-main-isr.netlify.app/'>

                                        <img className='slider-images' src={url} alt='bootstrap'/>
                                    </a>

                                </div>
                            ))}
                        </Slider>
                        <div className="portfolio-blocks-text text-align-end">
                            <h3 className='grays'>Atlas</h3>
                            <p>
                                The Atlas API Project is a software tool that provides developers with easy
                                access
                                to geographic data. This data can be used to create maps, analyze location-based
                                data, and develop location-based services. The project simplifies the process of
                                working with geographic data, making it easier to build applications that use
                                this
                                information.
                            </p>
                            <div className='d-flex flex-direction-row'>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src='https://cdn-icons-png.flaticon.com/512/1216/1216733.png' alt='bootstrap'/>
                                    HTML
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src={'https://cdn-icons-png.flaticon.com/512/732/732190.png'} alt='bootstrap'/>
                                    CSS
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src="https://cdn-icons-png.flaticon.com/512/9082/9082991.png" alt='bootstrap'/>

                                    Bootstrap
                                </div>
                                <div className='portfolio-blocks-text__tags'>
                                    <img className='icon-tags'
                                         src='https://cdn-icons-png.flaticon.com/512/8422/8422177.png' alt='bootstrap'/>
                                    JavaScript
                                </div>
                            </div>
                            <a className='git-back portfolio-blocks-text__checkout-btn p-2 d-flex align-items-center' href='https://cdn-icons-png.flaticon.com/512/2111/2111432.png'>
                                <img className='icon-tags' src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png' alt='bootstrap'/>
                                GitHub</a>
                            <a className='btn-primary portfolio-blocks-text__checkout-btn'
                               href='https://atlas-main-isr.netlify.app/'>Checkout web site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
