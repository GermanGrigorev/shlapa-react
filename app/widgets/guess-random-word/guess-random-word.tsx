import { WordsContext } from "~/entities/game";
import { useContext } from "react";
import { Button, Card, List, ListItem } from "flowbite-react";
import { WordCard } from "~/entities/word/ui/word-card/word-card";

export function GuessRandomWord() {
  const { words } = useContext(WordsContext);
  return (
    <>
      <List>
        <ListItem>Word list:</ListItem>
        {words.map((word, idx) => (
          <WordCard word={word} key={idx} />
        ))}
      </List>
      <Card>{words[0]?.text}</Card>
      <div className="flex flex-row gap-5">
        <Button>Ugadal</Button>
        <Button>Mimo</Button>
      </div>
    </>
  );
}
