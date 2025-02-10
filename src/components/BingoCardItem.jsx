import { useState } from "react";
import { cn } from "@/lib/utils";
import * as emoji from "node-emoji";

export default function BingoCardItem({ index = 0, num, isPicked = false }) {
  const [freeEmoji, setFreeEmoji] = useState(emoji.random().emoji);
  const isFree = index === 12;
  const label = isFree ? "FREE" : num;

  return (
    <div
      className={cn(
        "size-10 rounded-md flex items-center text-lg text-center justify-center bg-slate-700 text-slate-300 mx-auto",
        isFree && "bg-transparent text-slate-500 text-sm cursor-pointer",
        isPicked && !isFree && "bg-blue-600 text-blue-300",
      )}
      onClick={() => {
        if (isFree) {
          setFreeEmoji(emoji.random().emoji);
        }
      }}
    >
      {isFree ? freeEmoji : label}
    </div>
  );
}
