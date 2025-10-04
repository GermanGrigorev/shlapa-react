import { WordsContext } from "~/entities/game";
import { useContext } from "react";
import { Button, Card, List, ListItem } from "flowbite-react";

export function GuessRandomWord() {
  const { words } = useContext(WordsContext);
  return (
    <>
      <List>
        <ListItem>Word list:</ListItem>
        {words.map((word, idx) => (
          <ListItem key={idx}>{word}</ListItem>
        ))}
      </List>
      <Card>{words[0]}</Card>
      <div className="flex flex-row gap-5">
        <Button>Ugadal</Button>
        <Button>Mimo</Button>
      </div>
    </>
  );
}
