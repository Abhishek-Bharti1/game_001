import Button from "./components/Button";

// eslint-disable-next-line react/prop-types
const StartGame = ({ handleShowGame }) => {
  return (
    <div className="h-screen w-screen flex relative">
      <div className="w-1/12 bg-[#1a1333]"></div>
      <div className="w-1/12 bg-[#262949]"></div>
      <div className="w-1/12 bg-[#045459]"></div>
      <div className="w-1/12 bg-[#087353]"></div>
      <div className="w-1/12 bg-[#15c286]"></div>
      <div className="w-1/12 bg-[#abd96d]"></div>
      <div className="w-1/12 bg-[#fbbf54]"></div>
      <div className="w-1/12 bg-[#ee6b3b]"></div>
      <div className="w-1/12 bg-[#ec0f47]"></div>
      <div className="w-1/12 bg-[#a02c5d]"></div>
      <div className="w-1/12 bg-[#700460]"></div>
      <div className="w-1/12 bg-[#022c7a]"></div>
      <div className="absolute top-[45%] left-[45%]">
        <Button handleShowGame={handleShowGame} />
      </div>
    </div>
  );
};

export default StartGame;
