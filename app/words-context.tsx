import { createContext } from "react";

export const WordsContext = createContext<{
  words: string[];
  setWords: (newWords: string[]) => void;
}>({ words: [], setWords: () => {} });
