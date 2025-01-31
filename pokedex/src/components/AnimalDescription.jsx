import { useState } from "react";

export default function AnimalDescription(results) {
  const [clickMore, setClickMore] = useState(null);

  const handleClickMore = () => {
    // Replace true with the class name or id
    setClickMore(true);
  };
  return (
    <div className="h-full shadow-[4px_4px_0px_5px_#2e2e2e] rounded">
      {/* Check if the user click one of the results, if true display the details of the animals */}
      {!clickMore ? (
        <div className="h-full sm:px-12 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl font-bold w-full">Results:</h1>
          {/* Replace array with actual results */}
          {[...Array(3)].map((_, index) => (
            <div
              onClick={handleClickMore}
              key={index}
              className="w-full p-2 space-x-4 flex items-center rounded border-black border-2 shadow-[12px_12px_0px_-7px_#2e2e2e] cursor-pointer transform transition-all hover:translate-x-1 hover:translate-y-[-2px]"
            >
              <h1 className="font-bold text-3xl">90%</h1>
              <img
                src="https://c02.purpledshub.com/uploads/sites/62/2024/09/Tarsier.jpg?webp=1&w=1200"
                className="border-2 h-full w-24 rounded object-cover"
              ></img>
              <div className="flex flex-col space-y-4 justify-between h-full scrollable-hidden grow">
                <h1 className="font-bold text-xl break-all">
                  TarsierTarsierTarsierTarsierTarsierarsierTarsier
                </h1>
                <p className="w-full text-end">Discover More &rarr;</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-full flex flex-col p-4  space-y-4">
          <div className="flex justify-center">
            <img
              src="https://c02.purpledshub.com/uploads/sites/62/2024/09/Tarsier.jpg?webp=1&w=1200"
              className="border-2 h-32 w-32 rounded object-cover"
            ></img>
          </div>
          <div className="h-[calc(100%-8rem)] overflow-y-auto flex flex-col items-center space-y-4">
            <h1 className="font-bold text-xl break-all">
              Tarsier (Carlito syrichta)
            </h1>
            <div className="space-y-2">
              <p>
                <strong>Status:</strong>
                Vulnerable, ~200 remaining
              </p>
              <p>
                <strong>Size:</strong>
                10-15 cm, weighing 100-150g
              </p>
              <p>
                <strong>Features:</strong>
                Large eyes, long fingers, nocturnal
              </p>
              <p>
                <strong>Habitat:</strong>
                Philippine rainforests
              </p>
              <p>
                <strong>Threats:</strong>
                Deforestation, pet trade Deforestation, pet trade Deforestation,
                pet trade Deforestation, pet trade
              </p>
              <p>
                <strong>Protection:</strong>
                National Wildlife Act, sanctuary programs
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
