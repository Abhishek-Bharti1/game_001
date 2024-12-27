import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useSpring, animated } from "react-spring";
import "../App.css";
import { HEADING, RESTART } from "../constants/constant";

// eslint-disable-next-line react/prop-types
const DraggableItem = ({ id, content }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 rounded-lg text-white font-bold cursor-pointer ${
        isDragging ? "opacity-50" : "opacity-100"
      } bg-blue-500`}
    >
      {content}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const DropZone = ({ id, onDrop, isCorrect }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "item",
    drop: (item) => onDrop(item, id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const getShapeStyle = (zoneId) => {
    if (zoneId === "circle") return "rounded-full w-24 h-24";
    if (zoneId === "triangle") return "triangle";
    return "w-24 h-24";
  };

  return (
    <div
      ref={drop}
      className={`flex justify-center items-center border-2 border-dashed ${
        isOver ? (id === "triangle" ? "triangle is-over" : "bg-green-300") : ""
      } ${
        isCorrect
          ? id === "triangle"
            ? "triangle is-correct"
            : "border-dashed-green-500"
          : ""
      } ${getShapeStyle(id)}`}
    >
      {id === "triangle" ? "" : "Drop Here"}
    </div>
  );
};

const Game = () => {
  const [score, setScore] = useState(0);
  const [correctZones, setCorrectZones] = useState({});

  const handleDrop = (item, zoneId) => {
    if (item.id === zoneId) {
      setScore((prev) => prev + 1);
      setCorrectZones((prev) => ({ ...prev, [zoneId]: true }));
    }
  };

  const springStyles = useSpring({
    from: { scale: 1 },
    to: { scale: score > 0 ? 1.2 : 1 },
    reset: true,
    config: { tension: 200, friction: 10 },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold text-blue-700 font-butterfly-kids">
       {HEADING}
      </h1>

      <animated.div
        style={springStyles}
        className="text-xl text-green-700 font-semibold font-butterfly-kids"
      >
        Score: {score}
      </animated.div>

      <div className="flex space-x-8">
        <DraggableItem id="circle" content="Circle" />
        <DraggableItem id="square" content="Square" />
        <DraggableItem id="triangle" content="Triangle" />
      </div>

      <div className="flex space-x-8 mt-6">
        <DropZone
          id="circle"
          onDrop={handleDrop}
          isCorrect={correctZones["circle"]}
        />
        <DropZone
          id="square"
          onDrop={handleDrop}
          isCorrect={correctZones["square"]}
        />
        <DropZone
          id="triangle"
          onDrop={handleDrop}
          isCorrect={correctZones["triangle"]}
        />
      </div>

      <button
        className="mt-8 px-6 py-3 font-bold text-white rounded-lg bg-[#ea0000] translate-y-8 transition-transform duration-300 ease-in-out hover:animate-vibrate font-butterfly-kids"
        onClick={() => {
          setScore(0);
          setCorrectZones({});
        }}
      >
        {RESTART}
      </button>
    </div>
  );
};
export default Game;
