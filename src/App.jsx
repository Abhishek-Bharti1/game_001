import { DndProvider } from "react-dnd";
import "./App.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import Game from "./Game";
import StartGame from "./StartGame";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import "./App.css";
function App() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [loading, show]);
  const handleShowGame = () => {
    setLoading(true);
    setTimeout(() => {
      setShow(true);
      setLoading(false);
    }, 4000);
  };
  if (loading) {
    return <Loader/>
  } else
    return (
      <main className="bg-freepik-background bg-cover bg-center min-h-screen">
      {show ? (
        <DndProvider backend={HTML5Backend}>
          <Game />
        </DndProvider>
      ) : (
        <StartGame handleShowGame={handleShowGame} />
      )}
    </main>
    
    );
}

export default App;
