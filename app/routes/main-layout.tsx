import { Button } from "flowbite-react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { WordsContext } from "~/words-context";

export default function MainLayout() {
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
          <Button href="/">To WordList</Button>
          <Button href="/play">Play!</Button>
        </div>
        <WordsContext value={{ words, setWords: handleSetWords }}>
          <Outlet />
        </WordsContext>
      </div>
    </main>
  );
}
