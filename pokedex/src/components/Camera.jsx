import { useState, useEffect, useRef } from "react";
import * as tmImage from "@teachablemachine/image";

const model_url = "https://teachablemachine.withgoogle.com/models/PzUPM4bAl/"; //Ito ang Magic Model ni Teachable Machine
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

      // Find the highest probability prediction
      const bestMatch = predictions.reduce((max, p) =>
        p.probability > max.probability ? p : max
      );

      setResults(bestMatch.className);
      setPrevComponent(activeComponent);
      setActiveComponent("description");

      //Show The Best Match and Its Probability
      alert(
        `Best match: ${
          bestMatch.className
        } with probability: ${bestMatch.probability.toFixed(2)}`
      );
    }s
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
