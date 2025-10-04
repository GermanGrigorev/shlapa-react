import { Button, List, ListItem, TextInput } from "flowbite-react";
import { IoMdClose } from "react-icons/io";
import { useContext, useState, type FormEvent } from "react";
import { WordsContext } from "~/entities/game";
import { WordCard } from "~/entities/word/ui/word-card/word-card";

export function Dictionary() {
  const { words, setWords } = useContext(WordsContext);
  const [value, setValue] = useState("");

  const handleAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      setWords([...words, { text: value, id: 5 }]);
      setValue("");
    }
  };

  const handleRemove = (idx: number) => () => {
    setWords(words.filter((_, wordIdx) => wordIdx !== idx));
  };

  return (
    <div>
      <h1 className="text-2xl mb-10">SHLAPA</h1>
      <div className="max-w-[300px] w-full space-y-6 px-4">
        <List>
          <h2 className=" font-bold text-xl">Word list:</h2>
          {words.map((word, idx) => (
            <WordCard key={idx} word={word} onRemove={handleRemove(idx)} />
          ))}
        </List>

        <form className="flex flex-col gap-4" onSubmit={handleAdd}>
          <TextInput
            name="Word-input"
            placeholder="Enter a word"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <div>
            <Button type="submit">Add entered word</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
