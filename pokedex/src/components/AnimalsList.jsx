import { useState } from "react";

export default function AnimalsList({ setSelectedAnimal, selectedAnimal }) {
  const animalData = {
    name: "Tarsier",
    scientificName: "Carlito syrichta",
    status: "Vulnerable, ~200 remaining",
    size: "10-15 cm, weighing 100-150g",
    features: "Large eyes, long fingers, nocturnal",
    habitat: "Philippine rainforests",
    threats: "Deforestation, pet trade",
    protection: "National Wildlife Act, sanctuary programs",
    image: "https://c02.purpledshub.com/uploads/sites/62/2024/09/Tarsier.jpg?webp=1&w=1200"
  };

  const handleClick = () => {
    setSelectedAnimal(animalData);
  };

  const closeModal = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="flex flex-col h-[calc(100%-2.5rem)] space-y-4 shadow-[4px_4px_0px_5px_#2e2e2e] rounded p-4">
      <h1 className="text-lg font-bold">Philippine Most Endangered Species</h1>

      <div className="space-y-4 overflow-y-auto scroll-smooth py-2 pr-4">
        {[...Array(11)].map((_, index) => (
          <div
            key={index}
            onClick={handleClick} 
            className="mx-1 p-2 space-x-2 flex items-center rounded border-black border-2 h-32 shadow-[12px_12px_0px_-7px_#2e2e2e] cursor-pointer transform transition-all hover:translate-x-1 hover:translate-y-[-2px]"
          >
            <h1 className="font-bold text-3xl">{index + 1}</h1>
            <img
              src="https://c02.purpledshub.com/uploads/sites/62/2024/09/Tarsier.jpg?webp=1&w=1200"
              className="border-2 h-full w-24 rounded object-cover"
              alt="Tarsier"
            />
            <div className="flex flex-col items-start h-full overflow-y-auto scrollable-hidden grow scrollbar-hidden">
              <h1 className="font-bold text-xl">Tarsier</h1>
              <p className="text-sm break-all">
                <strong>Status:</strong> 200 left
              </p>
              <p className="text-sm break-all">
                <strong>Habitat:</strong> Tropical forests
              </p>
              <p className="text-sm break-all">
                <strong>Threat:</strong> Habitat loss, hunting
              </p>
              <p className="text-sm break-all">
                <strong>Conservation:</strong> Protected areas, anti-poaching efforts
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedAnimal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4">
          <div className="relative bg-gray-200 w-full md:w-1/2 rounded-lg shadow-lg p-6 border-2 border-black jagged-border">
            <h1 className="text-3xl font-bold">BANTAYBUHAY</h1>
            <button
              onClick={closeModal}
              className="absolute top-6 right-5.5 hover:border-black hover:border-3 transition-opacity duration-300 ease-in-out right-2 bg-red-500 text-white text-md font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600"
            >
              <span className="opacity-0 hover:cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out">
                ✕
              </span>
            </button>
            <div className="p-4 mt-4 border-black border-2 rounded-lg bg-gradient-to-b from-gray-100 to-gray-300 relative">
              <div className="flex items-center">
                <img
                  src={selectedAnimal.image}
                  alt={selectedAnimal.name}
                  className="border-2 h-32 w-32 rounded object-cover"
                />
                <div className="ml-4 bg-gray-300 rounded-br-lg rounded-tl-lg p-2 bg-gradient-to-b w-full max-w-[60%]">
                  <h1 className="font-bold text-lg leading-tight">
                    {selectedAnimal.name} <br />
                    <span className="text-md font-normal italic">({selectedAnimal.scientificName})</span>
                  </h1>
                </div>
              </div>
              <div className="text-left space-y-2 mt-4 bg-gray-300 px-2 py-1 rounded-br-lg rounded-tl-lg">
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
