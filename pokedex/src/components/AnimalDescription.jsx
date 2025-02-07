import { useState } from "react";

// Possibly here just to make sure; made a different modal in AnimalList.jsx

export default function AnimalDescription({ results }) {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleClickMore = (animal) => {
    setSelectedAnimal(animal);
  };

  const closeModal = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="h-full">
      {/* Display list of results */}
      <div className="h-full sm:px-12 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold w-full">Results:</h1>
        {results &&
          results.map((result, index) => (
            <div
              key={index}
              onClick={() => handleClickMore(result.animal)}
              className="w-full p-2 space-x-4 flex items-center rounded border-black border-2 shadow-[12px_12px_0px_-7px_#2e2e2e] cursor-pointer transform transition-all hover:translate-x-1 hover:translate-y-[-2px]"
            >
              <h1 className="font-bold text-3xl">{result.probability}%</h1>
              <img
                src={result.animal.image}
                className="border-2 h-full w-24 rounded object-cover"
                alt="Tarsier"
              />
              <div className="flex flex-col space-y-4 justify-between h-full grow">
                <h1 className="font-bold text-xl break-all">
                  {result.animal.name}
                </h1>
                <p className="w-full text-end">Discover More &rarr;</p>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {selectedAnimal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4">
          <div className="relative bg-gray-200 w-full md:w-1/2 rounded-lg shadow-lg p-6 border-2 border-black jagged-border">
            <h1 className="text-3xl font-bold">BANTAYBUHAY</h1>
            <button
              onClick={closeModal}
              className="group cursor-pointer absolute top-6 right-5.5 hover:border-black hover:border-3 transition-opacity duration-300 ease-in-out right-2 bg-red-500 text-white text-md font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600"
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