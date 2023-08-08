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

    const projectsData = [
        {
            title: "Brio #1",
            description: "Brio is an innovative food ordering platform that seamlessly connects foodies with a variety of restaurants in their vicinity. The platform provides a dual interface: one catering to the end consumers looking to satisfy their culinary cravings, and the other dedicated to restaurant administrators managing their digital presence and orders.\n" +
                "\n" +
                "For customers, Brio offers a user-friendly interface where they can browse through diverse restaurant menus, place orders, and track them in real-time. On the other hand, the administrative side provides robust tools for restaurants to manage their menus, track orders, analyze sales data, and interact with their customers.",
            images: [
                "/images/brio-1.jpg",
                "/images/brio-2.jpg",
                "/images/brio-3.jpg",
                "/images/brio-4.png",
                "/images/brio-5.png",
                "/images/brio-7.png"
            ],
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1800
            },
            technologies: [
                {icon: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png", name: "HTML"},
                {icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png", name: "CSS"},
                {icon: "https://cdn-icons-png.flaticon.com/512/5022/5022384.png", name: "Chakra Ui"},
                {icon: "https://cdn-icons-png.flaticon.com/512/1493/1493169.png", name: "Mongo DB"},
                {icon: "https://cdn-icons-png.flaticon.com/512/919/919853.png", name: "Docker"},
                {icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png", name: "Node Js"},
                {icon: "https://cdn-icons-png.flaticon.com/512/5079/5079103.png", name: "Swagger"},
                {icon: "https://cdn-icons-png.flaticon.com/512/8422/8422177.png", name: "Javascript"},
                {icon: "https://cdn-icons-png.flaticon.com/512/3334/3334886.png", name: "React"},
                {icon: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png", name: "GitHub"},
            ],
            links: {
                website: "https://www.thebrioshop.com/",
                githubBackend: "https://github.com/Okeanid-ISR/Brio-back-end",
                githubFrontend: "https://github.com/brandalx/Brio-front-end-client"
            }
        },
        {
            title: "EhyaSpace #2",
            description: "          EhyaSpace is the collaboration hub that brings the right people, information,\n" +
                "                                and\n" +
                "                                tools together to get work done. From Fortune 100 companies to corner markets,\n" +
                "                                millions of people around the world use Slack to connect their teams, unify\n" +
                "                                their\n" +
                "                                systems, and drive their business forward.",
            images: [
                "/images/ehya1.png",
                "/images/ehya2.png",
                "/images/ehya3.png",
                "/images/ehya4.png"
            ],
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2600
            },
            technologies: [
                {icon: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png", name: "HTML"},
                {icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png", name: "CSS"},
                {icon: "https://cdn-icons-png.flaticon.com/512/9082/9082991.png", name: "Bootstrap"},
                {icon: "https://cdn-icons-png.flaticon.com/512/8422/8422177.png", name: "JavaScript"}
            ],
            links: {
                website: "https://ehya-space.netlify.app/",
                github: "https://github.com/Okeanid-ISR/ehya-main"
            }
        },
        {
            title: "Christmas #3",
            description: "As the holiday season approaches and the air becomes crisp and cool, we at\n" +
                "                                    Christmas\n" +
                "                                    Shop\n" +
                "                                    invite you to visit our Christmas website, where you will find an extensive\n" +
                "                                    selection of\n" +
                "                                    festive decorations, gift ideas, and holiday recipes to help you spread joy and\n" +
                "                                    cheer to\n" +
                "                                    all\n" +
                "                                    your loved ones and make this holiday season truly unforgettable. From sparkling\n" +
                "                                    ornaments\n" +
                "                                    and twinkling lights to cozy throws and delicious treats.\n",
            images: [
                "/images/chrstmas1.png",
                "/images/chrstmas2.png",
                "/images/chrstmas3.png",
                "/images/chrstmas4.png",
                "/images/chrstmas5.png",
                "/images/chrstmas6.png"
            ],
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2300
            },
            technologies: [
                {icon: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png", name: "HTML"},
                {icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png", name: "CSS"},
                {icon: "https://cdn-icons-png.flaticon.com/512/9082/9082991.png", name: "Bootstrap"},
                {icon: "https://cdn-icons-png.flaticon.com/512/8422/8422177.png", name: "JavaScript"}
            ],
            links: {
                website: "https://happy-new-year-isr.netlify.app/",
                github: "https://github.com/Okeanid-ISR/Christmas-project"
            }
        },
        {
            title: "Atlas #4",
            description: "The Atlas API Project is a software tool that provides developers with easy\n" +
                "                                access\n" +
                "                                to geographic data. This data can be used to create maps, analyze location-based\n" +
                "                                data, and develop location-based services. The project simplifies the process of\n" +
                "                                working with geographic data, making it easier to build applications that use\n" +
                "                                this\n" +
                "                                information.\n",
            images: [
                "/images/atlasOne.png",
                "/images/atlasTwo.png",
                "/images/atlasThree.png"
            ],
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1800
            },
            technologies: [
                {icon: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png", name: "HTML"},
                {icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png", name: "CSS"},
                {icon: "https://cdn-icons-png.flaticon.com/512/9082/9082991.png", name: "Bootstrap"},
                {icon: "https://cdn-icons-png.flaticon.com/512/8422/8422177.png", name: "JavaScript"}
            ],
            links: {
                website: "https://atlas-main-isr.netlify.app/",
                github: "https://github.com/Okeanid-ISR/Atlas"
            }
        }
    ];


    return (
        <div className="portfolio-main container-fluid">
            <div className="container">
                <div className="row">
                    {projectsData.map((project, index) => (
                        <div data-aos="fade-up"
                             className={`col-12 col-md-12 col-lg-12 col-xl-12 d-flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} portfolio-wrapper`}>
                            <Slider {...project.settings}>
                                {project.images.map((url, idx) => (
                                    <div key={idx}>
                                        <a href={project.links.website}>
                                            <img className='slider-images' src={url} alt='project'/>
                                        </a>
                                    </div>
                                ))}
                            </Slider>
                            <div
                                className={`portfolio-blocks-text ${index % 2 === 0 ? "" : "portfolio-blocks-text-reverse"} text-align-end`}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className='d-flex flex-direction-row'>
                                    {project.technologies.map(tech => (
                                        <div className='portfolio-blocks-text__tags' key={tech.name}>
                                            <img className='icon-tags' src={tech.icon} alt='tech'/>
                                            {tech.name}
                                        </div>
                                    ))}
                                </div>
                                {project.links.githubBackend && (
                                    <a className='git-back portfolio-blocks-text__checkout-btn p-2 d-flex align-items-center'
                                       href={project.links.githubBackend}>
                                        <img className='icon-tags'
                                             src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png'
                                             alt='github'/>
                                        GitHub back-end
                                    </a>
                                )}
                                {project.links.githubFrontend && (
                                    <a className='git-back portfolio-blocks-text__checkout-btn p-2 d-flex align-items-center'
                                       href={project.links.githubFrontend}>
                                        <img className='icon-tags'
                                             src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png'
                                             alt='github'/>
                                        GitHub front-end
                                    </a>
                                )}
                                <a className='btn-primary portfolio-blocks-text__checkout-btn p-2 d-flex align-items-center justify-content-center'
                                   href={project.links.website}>
                                    <img className='icon-tags'
                                         src="https://cdn-icons-png.flaticon.com/512/2421/2421045.png" alt='website'/>
                                    Visit web site
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
