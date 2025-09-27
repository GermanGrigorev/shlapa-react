import { useEffect, useState } from "react";
import { WordList } from "./word-list";
import { Playing } from "./playing";

export function Game() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    const wordsString = localStorage.getItem("words");
    if (wordsString) {
      const arr: unknown = JSON.parse(wordsString);

      if (Array.isArray(arr) && arr.length > 0 && typeof arr[0] === "string") {
        setWords(arr);
      }
    }
  }, []);

  const handleSetWords = (newWords: string[]) => {
    setWords(newWords);
    localStorage.setItem("words", JSON.stringify(newWords));
  };

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="flex gap-2">
          <button
            onClick={() => setIsPlaying(false)}
            className="cursor-pointer border border-amber-200 p-2 rounded-2xl hover:text-amber-200"
          >
            To WordList
          </button>
          <button
            onClick={() => setIsPlaying(true)}
            className="cursor-pointer border border-amber-200 p-2 rounded-2xl hover:text-amber-200"
          >
            Play!
          </button>
        </div>
        {isPlaying ? (
          <Playing words={words} />
        ) : (
          <WordList words={words} setWords={handleSetWords} />
        )}
      </div>
    </main>
  );
}
