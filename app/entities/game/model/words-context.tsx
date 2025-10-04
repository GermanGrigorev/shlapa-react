import { createContext } from "react";
import type { IWord } from "~/shared/schema";

export const WordsContext = createContext<{
  words: IWord[];
  setWords: (newWords: IWord[]) => void;
}>({ words: [], setWords: () => {} });
