import { Button, List, ListItem, TextInput } from "flowbite-react";
import { IoMdClose } from "react-icons/io";
import { useContext, useState, type FormEvent } from "react";
import { WordsContext } from "~/words-context";

export function WordList() {
  const { words, setWords } = useContext(WordsContext);
  const [value, setValue] = useState("");

  const handleAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      setWords([...words, value]);
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
            <ListItem
              className="flex flex-row justify-between items-center"
              key={idx}
            >
              {word}
              <Button size="md" onClick={handleRemove(idx)}>
                <IoMdClose />
              </Button>
            </ListItem>
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
            <Button>Add entered word</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
