import { Button, Spinner } from "flowbite-react";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router";
import { WordsContext } from "~/entities/game";
import { localStorageWrapper } from "~/shared/local-storage";
import { routes } from "~/shared/routes";
import type { IWord } from "~/shared/schema";

export default function MainLayout() {
  const [words, setWords] = useState<IWord[]>([]);
  const [isAppInited, setIsAppInited] = useState<boolean>(false);

  useEffect(() => {
    const arr = localStorageWrapper.getItem<IWord[]>("words");
    if (arr) {
      setWords(arr);
    }
    setTimeout(() => setIsAppInited(true), 2000);
  }, []);

  const handleSetWords = (newWords: IWord[]) => {
    setWords(newWords);
    localStorageWrapper.setItem("words", newWords);
  };

  if (!isAppInited) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <WordsContext value={{ words, setWords: handleSetWords }}>
      <Outlet />
    </WordsContext>
  );
}
