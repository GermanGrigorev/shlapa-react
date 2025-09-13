import { useState, type FormEvent } from "react";

export function WordList({
  words,
  setWords,
}: {
  words: string[];
  setWords: (newWords: string[]) => void;
}) {
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
      <header className="flex flex-col items-center gap-9">SHLAPA</header>
      <div className="max-w-[300px] w-full space-y-6 px-4">
        <div className="border border-amber-200 p-2 rounded-2xl flex flex-col gap-2">
          <h1>Word list:</h1>
          {words.map((word, idx) => (
            <div className="flex justify-between" key={idx}>
              {word}
              <button
                onClick={handleRemove(idx)}
                className="cursor-pointer  hover:text-amber-200 "
              >
                X
              </button>
            </div>
          ))}
        </div>

        <form onSubmit={handleAdd}>
          <input
            name="Word-input"
            placeholder="Enter a word"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className=" bg-amber-950"
          />
          <div>
            <button className="mt-5 cursor-pointer border border-amber-200 p-2 rounded-2xl hover:text-amber-200">
              Add entered word
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
