import { useEffect, useState } from "react";
import { loadOpenCV } from "./utils/loadOpenCV";
import ImageProcessor from "./functions/imageprocessor";

const App: React.FC = () => {
  const [opencvLoaded, setOpencvLoaded] = useState(false);

  useEffect(() => {
    loadOpenCV()
      .then(() => setOpencvLoaded(true))
      .catch((error) => console.error("Error loading OpenCV:", error));
  }, []);

  return (
    <div>
      <h1>Knitting Pattern Generator</h1>
      {opencvLoaded ? <ImageProcessor /> : <p>Loading OpenCV...</p>}
    </div>
  );
};

export default App;
