import React from 'react'
import FoodBreakfast from "../comps_food/FoodBreakfast";
import FoodLunch from "../comps_food/FoodLunch";
import '../../styles/general_styles/general.css'

export default function Food() {
    return (
        <div className='container'>
            <h2 className="food-main-topic text-center p-5">There are some receipts that I liked personally!</h2>
            <FoodBreakfast/>
            <FoodLunch/>
        </div>
    )
}
