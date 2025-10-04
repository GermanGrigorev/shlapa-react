import { Button } from "flowbite-react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { WordsContext } from "~/entities/game";
import { localStorageWrapper } from "~/shared/local-storage";
import { routes } from "~/shared/routes";
import type { IWord } from "~/shared/schema";

export default function MainLayout() {
  const [words, setWords] = useState<IWord[]>([]);

  useEffect(() => {
    const arr = localStorageWrapper.getItem<IWord[]>("words");
    if (arr) {
      setWords(arr);
    }
  }, []);

  const handleSetWords = (newWords: IWord[]) => {
    setWords(newWords);
    localStorageWrapper.setItem("words", newWords);
  };

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="flex gap-2">
          <Button href={routes.index}>To WordList</Button>
          <Button href={routes.play}>Play!</Button>
        </div>
        <WordsContext value={{ words, setWords: handleSetWords }}>
          <Outlet />
        </WordsContext>
      </div>
    </main>
  );
}
