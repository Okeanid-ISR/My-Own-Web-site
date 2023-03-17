import React from "react"
import "../styles/hobbies.css"

const Hobbies = () => {
    return (
        <div className="hobbies-main">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div
                            className="hobbies-blocks cursor-pointer d-flex align-items-center flex-column justify-content-evenly">
                            <div className="hb-1"></div>
                            <div className="text-center">
                                <h4 className="hobbies-blocks__topic">Build Muscle</h4>
                                <p>Guide</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div
                            className="hobbies-blocks cursor-pointer d-flex align-items-center flex-column justify-content-evenly">
                            <div className="hb-3"></div>
                            <div className="text-center">
                                <h4 className="hobbies-blocks__topic">Tattoo Designs</h4>
                                <p>Guide</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div
                            className="hobbies-blocks cursor-pointer d-flex align-items-center flex-column justify-content-evenly">
                            <div className="hb-4"></div>
                            <div className="text-center">
                                <h4 className="hobbies-blocks__topic">Food Receipts</h4>
                                <p>Guide</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div
                            className="hobbies-blocks cursor-pointer d-flex align-items-center flex-column justify-content-evenly">
                            <div className="hb-2"></div>
                            <div className="text-center">
                                <h4 className="hobbies-blocks__topic">Education</h4>
                                <p>Guide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hobbies;