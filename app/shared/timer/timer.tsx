import { Button } from "flowbite-react";
import { type Seconds } from "./use-timer.hook";

type Props = {
  start: () => void;
  pause: () => void;
  stop: () => void;
  timeLeft: Seconds;
  isWorking: boolean;
  isStarted: boolean;
};

export function Timer({
  timeLeft,
  start,
  pause,
  stop,
  isWorking,
  isStarted,
}: Props) {
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
