import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("green");

  return (
    <>
      <div
        className="w-full h-screen flex justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="absolute bottom-12 px-4 py-2 bg-white rounded-full flex justify-center items-center gap-7">
          <button
            onClick={() => setColor("red")}
            className="bg-red-700 w-24 h-12 rounded-full font-semibold text-xl"
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="bg-green-700 w-24 h-11 rounded-full font-semibold text-xl"
          >
            Green
          </button>

          <button
            onClick={() => setColor("Blue")}
            className="bg-blue-700 w-24 h-11 rounded-full font-semibold text-xl"
          >
            Blue
          </button>

          <button
            onClick={() => setColor("purple")}
            className="bg-purple-700 w-24 h-11 rounded-full font-semibold text-xl"
          >
            Purple
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="bg-yellow-400 w-24 h-11 rounded-full font-semibold text-xl"
          >
            yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
