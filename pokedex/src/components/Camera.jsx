import { useState, useEffect, useRef } from "react";
import * as tmImage from "@teachablemachine/image";
import animalData from "../AnimalData";


const model_url = "https://teachablemachine.withgoogle.com/models/8ZFwX7j5b/"; //Ito ang Magic Model ni Teachable Machine
const modelURL = model_url + "model.json";
const metadataURL = model_url + "metadata.json";

export default function Camera({
  activeComponent,
  setActiveComponent,
  setPrevComponent,
  setResults,
}) {
  const [model, setModel] = useState(null);
  const [webcam, setWebcam] = useState(null);
  const [prediction, setPrediction] = useState("");
  const webcamRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);

      const newWebcam = new tmImage.Webcam(380, 300, true);
      await newWebcam.setup();
      await newWebcam.play();
      setWebcam(newWebcam);

      if (webcamRef.current) {
        webcamRef.current.innerHTML = "";
        webcamRef.current.appendChild(newWebcam.canvas);
      }

      const updateWebcam = () => {
        if (newWebcam) {
          newWebcam.update();
          requestAnimationFrame(updateWebcam);
        }
      };

      updateWebcam();
    };

    loadModel();
  }, []);

  const handleCapture = async () => {
    if (model && webcam) {
      const predictions = await model.predict(webcam.canvas);
      const sortedArray = [...predictions].sort((a, b) => b.probability - a.probability);

      let result = [];
      for (let i = 0; i < 3; i++) {
         const animal = animalData.find((animal) => animal.id == sortedArray[i].className);
         result.push({animal, probability: (sortedArray[i].probability *100).toFixed(2)});
        }
      console.log(result);


      setResults(result);
      setPrevComponent(activeComponent);
      setActiveComponent("description");

    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <h1 className="text-lg font-bold">Snap Animal Photo</h1>
      <div
        ref={webcamRef}
        className="border-2 w-full h-full sm:w-96 flex justify-center items-center"
      ></div>
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
