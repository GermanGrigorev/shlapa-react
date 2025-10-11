import { ListItem, Button } from "flowbite-react";
import { IoMdClose } from "react-icons/io";
import type { IWord } from "~/shared/schema";

export function WordCard({
  word,
  onRemove,
}: {
  word: IWord;
  onRemove?: () => void;
}) {
  return (
    <ListItem className="flex flex-row justify-between items-center">
      {word.text}
      {onRemove && (
        <Button size="md" onClick={onRemove}>
          <IoMdClose />
        </Button>
      )}
    </ListItem>
  );
}
