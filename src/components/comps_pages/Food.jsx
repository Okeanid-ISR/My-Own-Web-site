import React from 'react'
import FoodBreakfast from "../comps_food/FoodBreakfast";
import '../../styles/general_styles/general.css'
import '../../ScrollToTop'

export default function Food() {
    return (
        <div className='container'>

            <h2 className="food-main-topic text-center p-5">There are some receipts that I liked personally!</h2>
            <FoodBreakfast/>
        </div>
    )
}
