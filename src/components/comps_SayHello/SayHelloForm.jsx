import React, {useState} from 'react'
import "../../styles/sayHello_styles/sayHello.css"

export default function SayHelloForm() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    }

    const btnOpacity = isChecked ? "100%" : "55%";
    const cursor = isChecked ? "pointer" : "not-allowed";

    return (
        <div className='container'>
            <form className="form-main d-flex flex-column flex-wrap align-items-stretch align-content-around">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We will never share your email address with anyone
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputMessage1" className="form-label">Message:</label>
                    <input type="" className="form-control" id="exampleInputMessage1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={handleCheckboxChange}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me</label>
                </div>
                <button id="btn-main" type="submit" className="btn btn-primary" style={{opacity: btnOpacity, cursor: cursor}} disabled={!isChecked}>
                    Send
                </button>
            </form>
        </div>
    )
}
