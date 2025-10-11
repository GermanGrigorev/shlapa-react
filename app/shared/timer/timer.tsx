import { Button, Card } from "flowbite-react";
import { useTimer } from "./use-timer.hook";

export function Timer() {
  const { timeLeft, start, pause, stop, isWorking, isStarted } = useTimer({
    duration: 60,
  });

  if (isWorking) {
    return (
      <div className="flex flex-col gap-3">
        <h1 className=" text-2xl">{timeLeft}</h1>
        <Button onClick={pause}>Pause</Button>
      </div>
    );
  }

  if (isStarted)
    return (
      <div className="flex flex-col gap-3">
        <h1 className=" text-2xl text-gray-400">{timeLeft}</h1>
        <Button onClick={start}>Resume</Button>
        <Button onClick={stop}>Stop</Button>
      </div>
    );

  return (
    <div className="flex flex-col gap-3">
      <Button onClick={start}>Start</Button>
    </div>
  );
}
