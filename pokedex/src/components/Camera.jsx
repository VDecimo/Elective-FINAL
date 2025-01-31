import { useState } from "react";

export default function Camera({
  activeComponent,
  setActiveComponent,
  setPrevComponent,
  setResults,
}) {
  // Make this asynchronous function
  // Input here the functionality for fetching the results
  const handleCapture = () => {
    // Set here the results
    setResults(true);

    // Handles rendering of components
    setPrevComponent(activeComponent);
    // Render the AnimalDescription component after fetching the results
    setActiveComponent("description");
  };
  return (
    <div className="h-full flex flex-col items-center justify-center shadow-[4px_4px_0px_5px_#2e2e2e] rounded p-4">
      <h1 className="text-lg font-bold">Snap Animal Photo</h1>
      {/* Display here the camera */}
      <div className="border-2 w-full h-full sm:w-96"></div>
      <button
        onClick={handleCapture}
        type="button"
        className="my-10 border-2 rounded px-3 py-1 font-bold hover:bg-black hover:text-white cursor-pointer transform transition-all"
      >
        Capture
      </button>
    </div>
  );
}
