import { useState, useEffect } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative w-4/5 max-w-xl h-24">
       
        <div className="absolute bottom-4 left-0 w-full h-4 bg-gray-300 rounded">
          <div
            className="h-4 bg-blue-500 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div
          className="absolute top-0 left-0 transform transition-all duration-75"
          style={{ left: `${progress}%`, transition: "left 0.05s linear" }}
        >
       😒
        </div>
      </div>
    </div>
  );
};

export default Loader;
