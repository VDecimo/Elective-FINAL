import { useState } from "react";

export default function AnimalsList() {
  return (
    <div className="flex flex-col h-[calc(100%-2.5rem)] space-y-4 shadow-[4px_4px_0px_5px_#2e2e2e] rounded p-4">
      <h1 className="text-lg font-bold">Philippine Most Endangered Species</h1>

      <div className="space-y-4 overflow-y-auto pb-2 scroll-smooth">
        {/* Replace the arrray with actual data */}
        {[...Array(11)].map((_, index) => (
          <div
            key={index}
            className="mx-1 p-2 space-x-2 flex items-center rounded border-black border-2 h-32 shadow-[12px_12px_0px_-7px_#2e2e2e] cursor-pointer transform transition-all hover:translate-x-1 hover:translate-y-[-2px]"
          >
            <h1 className="font-bold text-3xl">{index + 1}.</h1>
            <img
              src="https://c02.purpledshub.com/uploads/sites/62/2024/09/Tarsier.jpg?webp=1&w=1200"
              className="border-2 h-full w-24 rounded object-cover"
            ></img>
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
                <strong>Conservation:</strong> Protected areas, anti-poaching
                efforts rotected areas, anti-poaching efforts
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
