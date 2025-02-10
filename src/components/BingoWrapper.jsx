import BingoCard from "./BingoCard";
import { useState } from "react";
export default function BingoWrapper() {
  const maxNum = 75;
  const [pickedNumbers, setPickedNumbers] = useState([]);

  function genRandNum() {
    while (true) {
      const num = Math.floor(Math.random() * maxNum) + 1;

      if (!pickedNumbers.includes(num)) {
        setPickedNumbers([...pickedNumbers, num]);
        return num;
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen pt-8">
      <div className="flex flex-col justify-center items-center mb-auto">
        <BingoCard pickedNumbers={pickedNumbers} />
        <div className="flex justify-center items-center my-6 gap-2">
          <button
            className="btn btn-orange"
            onClick={() => setPickedNumbers([])}
            disabled={pickedNumbers.length === 0}
          >
            Reset
          </button>
          <button
            className="btn btn-blue"
            onClick={() => genRandNum()}
            disabled={pickedNumbers.length >= maxNum}
          >
            Draw
          </button>
        </div>
      </div>
      {pickedNumbers.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-auto bg-[#1a2330] rounded-lg p-2 max-w-2xl">
          {pickedNumbers.map((num) => (
            <div
              key={num}
              className="bg-slate-700/50 rounded-md px-2 py-1 text-slate-400"
            >
              {num}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
