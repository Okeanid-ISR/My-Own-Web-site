import React from 'react'
import "./LightBox.css"

export default function LightBox(props) {
    return (
        <div className='lightbox'>
            <div className='inside_box'>
                {/* props.children - מאפשר לתקשר עם האינר הטמל של הקומפנינטה שהועבר מהאב */}
                {props.children}
            </div>
        </div>
    )
}
