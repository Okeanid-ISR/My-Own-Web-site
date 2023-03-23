import React from "react"
import "../styles/portfolio.css"

const Portfolio = () => {
    return (
        <div className="portfolio-main">
            <div className="container">
                <div className="row">
                        <div className="portfolio__topic text-center">
                            <h2 className="portfolio__port-topic">
                                My Portfolio
                            </h2>
                            <h4 className="fs-5">Here are a few past design projects I've worked on. </h4>
                        </div>
                    <div className="col-12 mt-3 col-md-6 col-lg-6 col-xl-4  d-flex justify-content-around">
                            <a href="https://atlas-main-isr.netlify.app/">
                                <div className="portfolio-blocks atlas ">
                                    <div className="overlay">
                                        The Atlas API Project is a software tool that provides developers with easy
                                        access
                                        to geographic data. This data can be used to create maps, analyze location-based
                                        data, and develop location-based services. The project simplifies the process of
                                        working with geographic data, making it easier to build applications that use
                                        this
                                        information.
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 mt-3 col-md-6 col-lg-6 col-xl-4 d-flex justify-content-around">
                            <a href="https://new-ehya.netlify.app/">
                                <div className="portfolio-blocks ehya">
                                    <div className="overlay">
                                        EhyaSpace is the collaboration hub that brings the right people, information,
                                        and
                                        tools together to get work done. From Fortune 100 companies to corner markets,
                                        millions of people around the world use Slack to connect their teams, unify
                                        their
                                        systems, and drive their business forward.
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 mt-3 col-md-12 col-lg-12 col-xl-4 d-flex justify-content-around">
                            <a href="https://new-year-ws.netlify.app/">
                                <div className="portfolio-blocks cmas">
                                    <div className="overlay">
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
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Portfolio;