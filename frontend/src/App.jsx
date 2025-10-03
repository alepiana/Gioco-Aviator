// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState, useEffect } from "react";

function App() {
  const totalTime = 10; // secondi totali della barra
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [running, setRunning] = useState(false);

  // Aggiorna il timer
  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = Math.max(prev - 0.1, 0);
        if (newTime === 0) {
          setRunning(false);
          alert("Condoglianze! Il tempo è scaduto.");
        }
        return newTime;
      });
    }, 100);

    return () => clearInterval(id);
  }, [running]);

  // Start del gioco
  const startGame = () => {
    setTimeLeft(totalTime);
    setRunning(true);
  };

  // Reset del gioco
  const resetGame = () => {
    setTimeLeft(totalTime);
    setRunning(false);
  };

  const barWidth = `${(timeLeft / totalTime) * 100}%`;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <h1 className="text-3xl font-bold mb-8">Gioco del Tempo</h1>

      {/* Barra */}
      <div className="w-3/4 h-8 bg-gray-300 rounded-full overflow-hidden shadow-lg">
        <div
          className="h-full bg-green-500 transition-all"
          style={{ width: barWidth }}
        ></div>
      </div>

      <p className="mt-4 text-xl">
        Tempo rimasto: {timeLeft > 0 ? timeLeft.toFixed(1) : "0.0"}s
      </p>

      {/* Pulsanti */}
      <div className="mt-6 space-x-4">
        <button
          onClick={startGame}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg shadow-md"
        >
          Start
        </button>
        <button
          onClick={resetGame}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg shadow-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
