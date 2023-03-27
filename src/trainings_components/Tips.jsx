import React, {useEffect} from "react";
import "../styles/trainings/tips.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
    useEffect(() => {
        AOS.init({
            offset: 175,
            duration: 600,
            easing: 'ease-in-out',
            delay: 0
        });
    }, []);

    const objectOfTips = [
        {
            topic: "Good health starts with what you eat, but that doesn't mean you have to give up all the fun and delicious foods in life. It's all about finding balance and enjoying the journey.",
            advice: "Breaking News: Eating Healthy Can Improve Your Health!",
            className: "pic1",
            row:"flex-row"
        },
        {
            topic: "General well-being: Regular exercise in the gym can help improve overall well-being and quality of life. Physical activity improves sleep, increases energy and stamina, improves digestion and overall health.",
            advice: "how the gym will ruin your life (no)",
            className: "pic2",
            row:"flex-row-reverse"

        },
        {
            topic: "Psychological well-being: Exercising in the gym can help improve mood and reduce stress levels. Physical activity stimulates the release of endorphins, which improve mood and reduce anxiety and depression. In addition, exercising in the gym can help improve self-esteem and increase self-confidence.",
            advice: "The Revolutionary Concept of Reducing Stress: Exercise in Gym",
            className: "pic3",
            row:"flex-row"
        },
        {
            topic: "Get enough sleep: Lack of sleep can increase stress levels and lower energy levels. It's recommended to get at least 7-8 hours of sleep a day.",
            advice: "Who Needs Energy Drinks When You Have Sleep? (Hint: It's Cheaper Too)!",
            className: "pic4",
            row:"flex-row-reverse"
        },
        {
            topic: "Increase physical activity: Regular physical activity can help you lose weight, build muscle, and increase endurance. It's recommended to exercise or do physical activity at least 3-4 times a week.",
            advice: "Exercise: The Cure for Your Netflix Addiction!",
            className: "pic5",
            row:"flex-row"
        },
    ]

    return (
        <div className="tips-main">
            <div className="row">
                {objectOfTips.map(item => {
                    return (
                        <div className="tips-cards p-5">
                            <div className="col-12">
                                <div className={"tip-card d-flex p-3 " + item.row}>
                                    <div className="col-6">
                                        <div className="tips-topic text-center">
                                            <h5 className="tips-topic__text d-flex align-items-center">
                                                {item.topic}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex justify-content-around">
                                        <div className={item.className}>

                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-around   ">
                                    <div className="tips-advices-block p-4">
                                        <h3 className="tips-advices-block__text text-center text-animation">{item.advice}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;
