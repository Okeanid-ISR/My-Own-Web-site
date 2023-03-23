import React from "react"
import "../styles/hobbies.css"
//toDo:создать компонент хобби карт

const Hobbies = ({ar}) => {
    return (
        <div className="hobbies-main">
            <div className="container">
                <div className="row">
                    {ar.map((card) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 d-md-flex mb-5 hobbies_general col-md-3">
                                <div
                                    className="hobbies-blocks cursor-pointer d-flex align-items-center flex-column justify-content-evenly">
                                    <div className={card.image}/>
                                    <div className="text-center">
                                        <h4 className="hobbies-blocks__topic">{card.title}</h4>
                                        <p className="hobbies-blocks__guide">{card.definition}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Hobbies;