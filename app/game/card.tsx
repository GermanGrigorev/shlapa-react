export function Card({ word }: { word: string }) {
  return (
    <div className="text-red-500 font-bold text-2xl bg-rose-200 p-5 rounded-lg">
      {word}
    </div>
  );
}
