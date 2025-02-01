import { useState } from "react";

// Possibly here just to make sure; made a different modal in AnimalList.jsx

export default function AnimalDescription({ results, selectedAnimal, setSelectedAnimal }) {
  const handleClickMore = (animal) => {
    setSelectedAnimal(animal); 
  };

  const closeModal = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="h-full shadow-[4px_4px_0px_5px_#2e2e2e] rounded">
      {/* Display list of results */}
      <div className="h-full sm:px-12 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold w-full">Results:</h1>
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            onClick={() => handleClickMore({
              name: "Tarsier",
              scientificName: "Carlito syrichta",
              status: "Vulnerable, ~200 remaining",
              size: "10-15 cm, weighing 100-150g",
              features: "Large eyes, long fingers, nocturnal",
              habitat: "Philippine rainforests",
              threats: "Deforestation, pet trade",
              protection: "National Wildlife Act, sanctuary programs",
              image: "https://c02.purpledshub.com/uploads/sites/62/2024/09/Tarsier.jpg?webp=1&w=1200"
            })}
            className="w-full p-2 space-x-4 flex items-center rounded border-black border-2 shadow-[12px_12px_0px_-7px_#2e2e2e] cursor-pointer transform transition-all hover:translate-x-1 hover:translate-y-[-2px]"
          >
            <h1 className="font-bold text-3xl">90%</h1>
            <img
              src="https://c02.purpledshub.com/uploads/sites/62/2024/09/Tarsier.jpg?webp=1&w=1200"
              className="border-2 h-full w-24 rounded object-cover"
              alt="Tarsier"
            />
            <div className="flex flex-col space-y-4 justify-between h-full grow">
              <h1 className="font-bold text-xl break-all">Tarsier</h1>
              <p className="w-full text-end">Discover More &rarr;</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedAnimal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white w-full md:w-1/2 rounded-lg shadow-lg p-6 relative border-2 border-black">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-gray-200 text-black px-3 py-1 rounded-full hover:bg-gray-300"
            >
              ✕
            </button>
            <div className="flex justify-center">
              <img
                src={selectedAnimal.image}
                alt={selectedAnimal.name}
                className="border-2 h-32 w-32 rounded object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h1 className="font-bold text-xl">{selectedAnimal.name} ({selectedAnimal.scientificName})</h1>
              <div className="text-left space-y-2 mt-4">
                <p><strong>Status:</strong> {selectedAnimal.status}</p>
                <p><strong>Size:</strong> {selectedAnimal.size}</p>
                <p><strong>Features:</strong> {selectedAnimal.features}</p>
                <p><strong>Habitat:</strong> {selectedAnimal.habitat}</p>
                <p><strong>Threats:</strong> {selectedAnimal.threats}</p>
                <p><strong>Protection:</strong> {selectedAnimal.protection}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
