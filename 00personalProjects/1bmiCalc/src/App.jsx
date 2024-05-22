import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [weigth, setWeight] = useState(50);
  const [height, setHeight] = useState(160);
  const [bmi, setBmi] = useState(0);

  const calcBmi = useCallback(() => {
    let w = weigth;
    let h = height / 100;
    let b = 0;

    b = w / (h * h);

    setBmi(b);
  }, [weigth, height]);

  useEffect(() => {
    calcBmi();
  });

  return (
    <>
      <div className="w-full max-w-md bg-blue-700 mx-auto my-8 rounded-lg flex justify-center items-center flex-col gap-8">
        <h1 className="text-white text-2xl my-3">BMI Calculator</h1>

        <div className="w-full flex flex-col bg-white px-14 py-7 rounded-b-lg">
          <label className="" htmlFor="weight">
            Weight: {weigth}
          </label>
          <input
            type="range"
            name="weight"
            id="weight"
            min={50}
            max={160}
            onChange={(e) => setWeight(e.target.value)}
          />

          <label className="mt-3" htmlFor="height">
            Height: {height}
          </label>
          <input
            type="range"
            name="height"
            id="height"
            min={160}
            max={220}
            onChange={(e) => setHeight(e.target.value)}
          />

          <div className="w-full flex justify-center mt-6">
            You BMI is : {bmi}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
