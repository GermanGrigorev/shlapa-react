import { WordsContext } from "~/entities/game";
import { useContext } from "react";
import { Button, Card, List, ListItem } from "flowbite-react";
import { WordCard } from "~/entities/word/ui/word-card/word-card";
import { Timer, useTimer } from "~/shared/timer";
import { useGetRandomWord } from "~/features/get-random-word";

export function GuessRandomWord() {
  const { words } = useContext(WordsContext);

  const { item, onGuess, onSkip, guessCnt, skipCnt } = useGetRandomWord({
    wordList: words,
  });

  const { timeLeft, start, pause, stop, isWorking, isStarted } = useTimer({
    duration: 60,
  });

  return (
    <>
      <div>
        skip: {skipCnt}
        <br />
        guess: {guessCnt}
      </div>

      {isWorking && <Card>{item?.text ?? "That's all!"}</Card>}

      <div className="flex flex-row gap-5">
        <Button onClick={onGuess}>Guessed</Button>
        <Button onClick={onSkip}>Skip</Button>
      </div>

      <Timer
        start={start}
        pause={pause}
        stop={stop}
        timeLeft={timeLeft}
        isWorking={isWorking}
        isStarted={isStarted}
      />
    </>
  );
}
