import React from 'react'
import "../../styles/tattoo_styles/tattooStyles.css"
import {tattoosArr} from "./tattoosArr";

export default function TattooStyles() {

    return (
        <div className="tattoos-styles-main">
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <div className="tattoos-styles-topic p-5">
                            <h2 className="text-center tattoos-styles-topic__text">Tattoo styles</h2>
                        </div>
                        <div className="tattoos-styles-blocks d-flex flex-wrap">
                            {tattoosArr.map(item => {
                                return (
                                    <div key={item.style} className="col-6 tattoos-styles-block d-flex flex-column">

                                            <div className="tattoos-styles-block-text">
                                                <h4 className="tattoos-styles-block-text__topic text-center">{item.style}</h4>
                                                <p className="tattoos-styles-block-text__description text-center">{item.description}</p>
                                            </div>

                                        <div className=" d-flex justify-content-center">
                                            <div id={`carouselExample-${item.style}`} className="carousel slide">
                                                <div className="carousel-inner">
                                                    {item.img.map((image, imageIndex) => {
                                                        return (
                                                            <div key={imageIndex}
                                                                 className={`carousel-item${imageIndex === 0 ? " active" : ""}`}>
                                                                <img src={image} className="d-block carousel-inner__image"
                                                                     alt={`tattoo ${imageIndex}`}/>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <button className="carousel-control-prev" type="button"
                                                        data-bs-target={`#carouselExample-${item.style}`}
                                                        data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon"
                                                          aria-hidden="true"></span>
                                                    <span className="visually-hidden">previous</span>
                                                </button>
                                                <button className="carousel-control-next" type="button"
                                                        data-bs-target={`#carouselExample-${item.style}`}
                                                        data-bs-slide="next">
                                                    <span className="carousel-control-next-icon"
                                                          aria-hidden="true"></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
