import { WordsContext } from "~/entities/game";
import { useContext } from "react";
import { Button, Card, List, ListItem } from "flowbite-react";
import { WordCard } from "~/entities/word/ui/word-card/word-card";
import { Timer } from "~/shared/timer";
import { useGetRandomWord } from "~/features/get-random-word";

export function GuessRandomWord() {
  const { words } = useContext(WordsContext);

  const { item, onGuess, onSkip, guessCnt, skipCnt } = useGetRandomWord({
    wordList: words,
  });

  return (
    <>
      <List>
        <ListItem>Word list:</ListItem>
        {words.map((word, idx) => (
          <WordCard word={word} key={idx} />
        ))}
      </List>
      <div>skip: {skipCnt}</div>
      <div>guess: {guessCnt}</div>

      <Card>{item?.text ?? "That's all!"}</Card>

      <div className="flex flex-row gap-5">
        <Button onClick={onGuess}>Guessed</Button>
        <Button onClick={onSkip}>Skip</Button>
      </div>

      <Timer />
    </>
  );
}
