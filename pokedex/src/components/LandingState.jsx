import React, { useState, useEffect } from 'react';
import animalData from "../AnimalData";

const LandingState = ({ fadeOut }) => {
    const [showContent, setShowContent] = useState(false);
    const [splash2, setSplash2] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSplash2(true);
        }, 600);

        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const renderAnimalSlide = (animals) => (
        <>
            {animals.map((animal, index) => (
                <div key={index} className="w-24 h-24 bg-white rounded shadow-lg mx-2.5">
                    <img
                        src={animal.image || "/placeholder.svg"}
                        alt={animal.name}
                        className="w-full h-full object-cover rounded"
                    />
                </div>
            ))}
        </>
    )

    return (
        <div className={`relative w-full h-full ${fadeOut ? "fade-out" : ""}`}>
            <div className="flex flex-col items-center justify-center h-full space-y-4 flex-1">
                <div className="flex flex-col items-center justify-center space-y-4 pb-12">
                    <h1 className="text-8xl font-bold splash">
                        Bantay{" "}
                        <span
                            className={`invisible text-green-400 ${splash2 && "visible splash"
                                }`}
                        >
                            Buhay
                        </span>
                    </h1>
                    <p
                        className={`text-xl font-bold invisible ${showContent && "visible text"
                            }`}
                    >
                        Spot. Learn. Protect. Saving endangered wildlife, one scan at a
                        time.
                    </p>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pop">
                <div className="logos-container top-0 pt-4">
                    <div className="logos-slide">{renderAnimalSlide(animalData.slice(0, 12))}</div>
                    <div className="logos-slide">{renderAnimalSlide(animalData.slice(0, 12))}</div>
                </div>
                <div className="logos-container -bottom-12">
                    <div className="logos-slide reverse">{renderAnimalSlide(animalData.slice(13, 24))}</div>
                    <div className="logos-slide reverse">{renderAnimalSlide(animalData.slice(13, 24))}</div>
                </div>
            </div>

        </div>
    );
};

export default LandingState;