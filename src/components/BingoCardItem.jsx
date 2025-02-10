import { cn } from "@/lib/utils";

export default function BingoCardItem({ index = 0, num }) {
  const isFree = index === 12;
  const label = isFree ? "FREE" : num;

  return (
    <div
      className={cn(
        "size-10 rounded-md flex items-center text-lg text-center justify-center bg-slate-700 text-slate-300 mx-auto",
        isFree && "bg-transparent text-slate-500",
      )}
    >
      {label}
    </div>
  );
}
