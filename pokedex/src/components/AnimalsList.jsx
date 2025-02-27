import { useState } from "react";
import animalData from "../AnimalData";

export default function AnimalsList({ setSelectedAnimal, selectedAnimal }) {
  const handleClick = (index) => {
    setSelectedAnimal(animalData[index]);
  };

  const closeModal = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="flex flex-col h-[calc(100%-2.5rem)] space-y-4 rounded p-4">
      <h1 className="text-lg font-bold">Philippine Endangered Species</h1>

      <div className="space-y-4 overflow-y-auto scroll-smooth py-2 pr-4">
        {animalData &&
          animalData.map((data, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className="mx-1 p-2 space-x-2 flex items-center rounded border-black border-2 h-32 shadow-[12px_12px_0px_-7px_#2e2e2e] cursor-pointer transform transition-all hover:translate-x-1 hover:translate-y-[-2px]"
            >
              <h1 className="font-bold text-3xl">{index + 1}</h1>
              <img
                src={data.image}
                className="border-2 h-full w-28 rounded object-cover"
                alt="Tarsier"
              />
              <div className="flex flex-col items-start h-full overflow-y-auto scrollable-hidden grow scrollbar-hidden">
                <h1 className="font-bold text-xl">{data.name}</h1>
                <p className="text-sm break-all">
                  <strong>Status:</strong> {data.status}
                </p>
                <p className="text-sm break-all">
                  <strong>Habitat:</strong> {data.habitat}
                </p>
                <p className="text-sm break-all">
                  <strong>Threats:</strong> {data.threats}
                </p>
                <p className="text-sm break-all">
                  <strong>Protection:</strong> {data.protection}
                </p>
              </div>
            </div>
          ))}
      </div>

      {selectedAnimal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4">
          <div className="relative bg-gray-200 w-full max-w-xl md:max-w-md rounded-lg shadow-lg p-6 border-2 border-black jagged-border">
            <h1 className="text-3xl font-bold">BANTAYBUHAY</h1>
            <button
              onClick={closeModal}
              className="group cursor-pointer absolute top-6 hover:border-black hover:border-3 transition-opacity duration-300 ease-in-out right-2 bg-red-500 text-white text-md font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
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
                    <span className="text-md font-normal italic">
                      ({selectedAnimal.scientificName})
                    </span>
                  </h1>
                </div>
              </div>
              <div className="text-left space-y-2 mt-4 bg-gray-300 px-2 py-1 rounded-br-lg rounded-tl-lg">
                <p>
                  <strong>Status:</strong> {selectedAnimal.status}
                </p>
                <p>
                  <strong>Size:</strong> {selectedAnimal.size}
                </p>
                <p>
                  <strong>Features:</strong> {selectedAnimal.features}
                </p>
                <p>
                  <strong>Habitat:</strong> {selectedAnimal.habitat}
                </p>
                <p>
                  <strong>Threats:</strong> {selectedAnimal.threats}
                </p>
                <p>
                  <strong>Protection:</strong> {selectedAnimal.protection}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
