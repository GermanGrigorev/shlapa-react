export function Playing({ words }: { words: string[] }) {
  return (
    <>
      <div>playing</div>
      <div className="border border-amber-200 p-2 rounded-2xl flex flex-col gap-2">
        <h1>Word list:</h1>
        {words.map((word, idx) => (
          <div className="flex justify-between" key={idx}>
            {word}
          </div>
        ))}
      </div>
    </>
  );
}
