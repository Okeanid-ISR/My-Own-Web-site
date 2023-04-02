import React from "react"
import "../../styles/home_styles/collaboration.css"
import {Link} from "react-router-dom";

const Collaboration = () => {
    return (
        <div className="collaboration-main">
            <div className="container">
                <div className="collaboration-info text-center">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="collaboration-main__collab">Interested in collaborations with me?</h4>
                            <p className="collaboration-info-desires"> I'd be happy to collaborate with you! Let's create something great together!</p>
                        </div>
                        <div className="col-12">
                            <Link to={"sayHello"}>
                                <button className="btn-email">Email me</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collaboration;