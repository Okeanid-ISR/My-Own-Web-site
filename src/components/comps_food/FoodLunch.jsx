import React, {useState} from 'react'
import "../../styles/food-styles/foodLunch.css"
import LightBox from "./LightBox";
import {foodLunchArr} from "./foodLunchArr"

export default function FoodBreakfast() {
    const [isShowLight, setIsShowLight] = useState(false);
    const [lightInfo, setLightInfo] = useState({})
    const showLightBox = (_info) => {
        setLightInfo(_info);
        setIsShowLight(true);
    }

    return (
        <div className='food-lunch-main'>
            <div className="container">
                <div className="row">
                    <h3 className="food-lunch__topic text-center mt-3 mb-4">Lunch</h3>

                    <div className="food-lunch-blocks d-flex flex-row flex-wrap align-items-stretch">
                        {
                            foodLunchArr.map((item) => {
                                return (
                                    <div className="col-6 mt-3">
                                        <div
                                            className="food-lunch-block p-2 d-flex flex-column justify-content-between">
                                            <h4 className="food-lunch-block__topic text-center">{item.topic}</h4>
                                            <img className="food-lunch-block__image" src={item.img}/>
                                            <ul>
                                                {
                                                    item.Ingredients.map((ingredient, ingredientIndex) => {
                                                        return (
                                                            <li key={ingredientIndex}>{ingredient}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <button onClick={() => showLightBox(item)}
                                                    className="btn btn-primary">Instruction
                                            </button>
                                            {isShowLight && (
                                                <LightBox>
                                                    <div className="d-flex flex-column text-center align-items-center">
                                                        <img className="food-lunch-block__image-inner" src={lightInfo.img} />
                                                        <h2>{lightInfo.topic}</h2>
                                                        <p>Instruction: {lightInfo.Instruction}</p>
                                                        <button className="btn-close p-3"
                                                                onClick={() => setIsShowLight(false)}></button>
                                                    </div>
                                                </LightBox>
                                            )}

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
