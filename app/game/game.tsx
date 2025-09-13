import { useState } from "react";
import { WordList } from "./word-list";
import { Playing } from "./playing";

export function Game() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [words, setWords] = useState<string[]>([]);

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
          <WordList words={words} setWords={setWords} />
        )}
      </div>
    </main>
  );
}
