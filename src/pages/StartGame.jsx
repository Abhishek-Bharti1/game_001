import useSound from "use-sound";
import Button from "../components/Button";
import CorrectSound from "../assets/correct.mp3";
// eslint-disable-next-line react/prop-types
const StartGame = ({ handleShowGame }) => {
  const [playSound] = useSound(CorrectSound);
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
      <div className="absolute top-6 right-8 cursor-pointer">
      <button onClick={()=>playSound()} className="p-2 text-white font-butterfly-kids brand-linear-gr rounded-lg text-lg">Check Sound 🔊</button>
      </div>
      
    </div>
  );
};

export default StartGame;
