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
    <div className="relative flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col p-6 absolute top-0 rounded-b-full bg-amber-800 w-screen items-center">
        <div>{guessCnt}</div>
        <div className=" uppercase ">Guessed</div>
      </div>
      <div className="flex flex-col p-6 absolute bottom-0 rounded-t-full bg-amber-800 w-screen items-center">
        <div>{skipCnt}</div>
        <div className=" uppercase ">Skipped</div>
      </div>
      {isWorking ? (
        <div className="rounded-full w-40  h-40 text-5xl uppercase">
          {item?.text}
        </div>
      ) : (
        <div className="flex flex-col justify-between">
          <Button
            className="rounded-full w-40  h-40 text-5xl uppercase"
            onClick={start}
          >
            Start
          </Button>
        </div>
      )}
    </div>
  );

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
