import { useState } from "react";
import AnimalsList from "./components/AnimalsList";
import Camera from "./components/Camera";
import AnimalDescription from "./components/AnimalDescription";
import leftArrow from "./assets/left-arrow.svg";
import "./App.css";

function App() {
  // Set which component is active
  const [activeComponent, setActiveComponent] = useState("animals");
  // Set the prev component redenred
  const [prevComponent, setPrevComponent] = useState(null);
  // Store the results of the image
  const [results, setResults] = useState(null);

  // Render the camera component is the user click start
  const handleStart = () => {
    // Set tbhe prev component for back function
    setPrevComponent(activeComponent);
    // Render the camera component
    setActiveComponent("camera");
  };

  // Handle the back functionality
  const handleBack = () => {
    // Check if the user is in the camera component and clicked back
    // Reset the state
    if (activeComponent === "camera") {
      setPrevComponent(null);
      setActiveComponent("animals");
    } else {
      setActiveComponent(prevComponent);

      // Reset results if the user back from AnimalDescription component
      setResults(null);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center md:py-10">
      <div className="w-full md:w-[600px] h-full flex flex-col font-jura p-4 pb-6">
        <nav className="flex h-10 mb-2 items-center justify-between ">
          <img
            onClick={handleBack}
            className={`${
              prevComponent ? "block" : "hidden"
            } cursor-pointer w-10 h-10 transform transition-all hover:translate-x-[-4px]`}
            src={leftArrow}
            alt=""
          />

          <h1 className="text-3xl font-bold">Pokedex</h1>
          {activeComponent === "animals" ? (
            <button
              onClick={handleStart}
              type="button"
              className={`border-2 rounded px-3 py-1 font-bold hover:bg-black hover:text-white cursor-pointer transform transition-all`}
            >
              Start
            </button>
          ) : (
            <div className="w-10"></div>
          )}
        </nav>

        {activeComponent === "animals" && <AnimalsList />}
        {activeComponent === "camera" && (
          <Camera
            setActiveComponent={setActiveComponent}
            setPrevComponent={setPrevComponent}
            setResults={setResults}
            activeComponent={activeComponent}
          />
        )}
        {activeComponent === "description" && (
          <AnimalDescription results={results} />
        )}
      </div>
    </div>
  );
}

export default App;
