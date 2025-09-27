import { Card } from "./card";

export function Playing({ words }: { words: string[] }) {
  return (
    <>
      <div className="border border-amber-200 p-2 rounded-2xl flex flex-col gap-2">
        <h1>Word list:</h1>
        {words.map((word, idx) => (
          <div className="flex justify-between" key={idx}>
            {word}
          </div>
        ))}
      </div>
      <Card word={words[0]} />
      <button className="cursor-pointer border border-amber-200 p-2 rounded-2xl hover:text-amber-200">
        Ugadal
      </button>
      <button className="cursor-pointer border border-amber-200 p-2 rounded-2xl hover:text-amber-200">
        Mimo
      </button>
    </>
  );
}
