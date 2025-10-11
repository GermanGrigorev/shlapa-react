import { useEffect, useState } from "react";

type Seconds = number;

type Props = { duration: Seconds };

type Return = {
  start: () => void;
  pause: () => void;
  stop: () => void;
  timeLeft: Seconds;
  isWorking: boolean;
  isStarted: boolean;
};

export function useTimer({ duration }: Props): Return {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [timeoutIdx, setTimeoutIdx] = useState<NodeJS.Timeout | null>(null);

  const pause = () => {
    if (timeoutIdx) {
      clearInterval(timeoutIdx);
      setTimeoutIdx(null);
    }
  };

  const start = () => {
    pause();

    const timeout = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev < 1) {
          pause();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setTimeoutIdx(timeout);
  };

  const stop = () => {
    pause();
    setTimeLeft(duration);
  };

  return {
    isWorking: timeoutIdx !== null,
    isStarted: timeLeft !== duration,
    start,
    pause,
    stop,
    timeLeft,
  };
}
