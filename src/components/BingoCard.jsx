/* eslint-disable react-hooks/exhaustive-deps */

import BingoCardItem from "./BingoCardItem";
import { useEffect, useState } from "react";

export default function BingoCard({ pickedNumbers = [] }) {
  const bingoLetters = ["B", "I", "N", "G", "O"];
  const maxColumnRange = 15;
  const colNum = 5;
  const [bingoNums, setBingoNums] = useState([]);

  function genColRandNum(colIndex) {
    const startNum = colIndex * maxColumnRange;
    const randNum = Math.floor(Math.random() * maxColumnRange + 1) + startNum;

    return randNum;
  }

  function genBingoNums() {
    const nums = [];
    for (let i = 0; i < bingoLetters.length; i++) {
      const colNums = [];

      for (let o = 0; o < colNum; o++) {
        const randNum = genColRandNum(i);

        if (colNums.length == 0 || !colNums.includes(randNum)) {
          colNums.push(randNum);
        } else {
          o--;
        }
      }

      nums.push(...colNums);
    }

    setBingoNums(nums);
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
      console.log((i % colNum) * colNum);
    }
  }

  function getBingoNum(i) {
    return bingoNums[(i % colNum) * colNum + Math.floor(i / colNum)];
  }

  function isPicked(num) {
    return pickedNumbers.includes(num);
  }

  function regenerateCard() {
    setBingoNums([]);
    genBingoNums();
  }

  useEffect(() => {
    genBingoNums();
  }, []);

  return (
    <div className="flex w-full h-full items-center justify-center flex-col gap-2">
      <div className="flex size-auto items-center justify-center bg-[#1a2330] rounded-lg p-2">
        <div className="grid grid-cols-5 grid-rows-6 mx-auto w-auto text-slate-200 gap-2">
          {bingoLetters.map((letter) => (
            <div
              key={letter}
              className="text-xl font-semibold w-10 text-center mx-auto flex items-center justify-center text-blue-500"
            >
              {letter}
            </div>
          ))}
          {Array.from({ length: 25 }).map((_, index) => {
            const num = getBingoNum(index);

            return (
              <BingoCardItem
                key={index}
                index={index}
                num={num}
                isPicked={isPicked(num)}
              />
            );
          })}
        </div>
      </div>
      <button
        className="btn btn-primary text-xs font-semibold"
        onClick={regenerateCard}
      >
        Regenerate
      </button>
    </div>
  );
}
