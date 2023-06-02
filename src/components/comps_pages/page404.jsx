import React from 'react'
import "../../styles/general_styles/general.css"

export default function Page404() {
    return (
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron text-center">
                        <h1 className="display-4">404</h1>
                        <p className="lead">Page Not Found :(</p>
                        <p>We're sorry, but this page is currently under construction. Please check back later for updates.
                            <br/>We appreciate your patience and understanding.</p>
                        <a className="btn btn-primary btn-lg" href="/" role="button">Return to Home</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
