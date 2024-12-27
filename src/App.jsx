import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { lazy, Suspense, useState } from "react";
import "./App.css";
const Game = lazy(() => import("./pages/Game"));
const StartGame = lazy(() => import("./pages/StartGame"));
const Loader = lazy(() => import("./components/Loader"));

function App() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowGame = () => {
    setLoading(true);
    setTimeout(() => {
      setShow(true); 
      setLoading(false); 
    }, 4000); 
  };

  return (
    <main className="bg-freepik-background bg-cover bg-center min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        {loading ? (
          <Loader />
        ) : show ? (
          <DndProvider backend={HTML5Backend}>
            <Game />
          </DndProvider>
        ) : (
          <StartGame handleShowGame={handleShowGame} />
        )}
      </Suspense>
    </main>
  );
}

export default App;
