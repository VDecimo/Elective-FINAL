import { useState, useEffect } from "react";
import AnimalsList from "./components/AnimalsList";
import Camera from "./components/Camera";
import leftArrow from "./assets/left-arrow.svg";
import backgroundImage from "./assets/background.jpg";
import "./App.css";
import LandingState from "./components/LandingState";
import AnimalDescription from "./components/AnimalDescription";

function App() {
  const [activeComponent, setActiveComponent] = useState("landing");
  const [prevComponent, setPrevComponent] = useState(null);
  const [results, setResults] = useState(null);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [popIn, setPopIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setActiveComponent("animals");
        setFadeOut(false);
        setPopIn(true);
      }, 1000); // Duration of fade-out animation
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    setPrevComponent(activeComponent);
    setActiveComponent("camera");
  };

  const handleBack = () => {
    if (activeComponent === "camera") {
      setPrevComponent(null);
      setActiveComponent("animals");
    } else {
      setActiveComponent(prevComponent);
      setResults(null);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center md:py-10 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {activeComponent === "landing" ? (
        <LandingState
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
          fadeOut={fadeOut}
        />
      ) : (
        <div className={`w-full md:w-[600px] h-full flex flex-col font-jura p-4 pb-6 bg-white rounded shadow-[4px_4px_0px_5px_#2e2e2e] ${popIn ? "pop" : ""}`}>
          <nav className="flex h-10 mb-2 items-center justify-between">
            <img
              onClick={handleBack}
              className={`${prevComponent ? "block" : "hidden"} cursor-pointer w-8 h-8 transform transition-all hover:translate-x-[-4px]`}
              src={leftArrow}
              alt="Back"
            />
            <h1 className="text-3xl font-bold">BANTAYBUHAY</h1>
            {activeComponent === "animals" ? (
              <button
                onClick={handleStart}
                type="button"
                className="border-2 rounded px-3 py-1 font-bold hover:bg-black hover:text-white cursor-pointer transform transition-all"
              >
                Start
              </button>
            ) : (
              <div className="w-10"></div>
            )}
          </nav>

          {activeComponent === "animals" && (
            <AnimalsList
              setSelectedAnimal={setSelectedAnimal}
              selectedAnimal={selectedAnimal}
            />
          )}

          {/* Camera Component */}
          {activeComponent === "camera" && (
            <Camera
              setActiveComponent={setActiveComponent}
              setPrevComponent={setPrevComponent}
              setResults={setResults}
              activeComponent={activeComponent}
            />
          )}

          {/* Animal Description Component */}
          {activeComponent === "description" && (
            <AnimalDescription results={results} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
