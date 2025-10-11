import { useEffect, useState } from "react";
import type { IWord } from "~/shared/schema";

type Props = {
  wordList: IWord[];
};

type Return = {
  item: IWord | null;
  onGuess: () => void;
  onSkip: () => void;
  guessCnt: number;
  skipCnt: number;
};

export function useGetRandomWord({ wordList }: Props): Return {
  console.log("--initial", wordList);
  const [list, setList] = useState<IWord[]>(wordList);

  const [guessCnt, setGuessCnt] = useState<number>(0);
  const [skipCnt, setSkipCnt] = useState<number>(0);

  const next = () => {
    setList((prev) => {
      if (prev.length < 1) {
        return [];
      }
      const copy = [...prev];
      copy.shift();
      return copy;
    });
  };

  const onGuess = () => {
    next();
    setGuessCnt((prev) => prev + 1);
  };

  const onSkip = () => {
    next();
    setSkipCnt((prev) => prev + 1);
  };

  return {
    item: list[0] ?? null,
    onGuess,
    onSkip,
    guessCnt,
    skipCnt,
  };
}
