import { useCallback, useEffect, useState } from 'react';
import { Wrapper, TimerValue } from './style';

interface TimerProps {
  initialTimeInSeconds: number;
  isRunning: boolean;
  onEndCycle: () => void;
}

const Timer = ({ initialTimeInSeconds, isRunning, onEndCycle }: TimerProps) => {
  const [remainingTimeInSeconds, setRemainingTimeInSeconds] = useState(initialTimeInSeconds);

  const formatTime = useCallback((value: number): string => {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return formattedTime;
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    let timeout: NodeJS.Timeout;

    if (remainingTimeInSeconds > 0) {
      timeout = setTimeout(() => {
        setRemainingTimeInSeconds((oldValue) => oldValue - 1);
      }, 1000);
    } else {
      onEndCycle();
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [remainingTimeInSeconds]);

  useEffect(() => {
    if (isRunning) {
      setRemainingTimeInSeconds(initialTimeInSeconds - 1);
    }
  }, [isRunning]);

  return (
    <Wrapper>
      <TimerValue>{formatTime(remainingTimeInSeconds) || '--:--'}</TimerValue>
    </Wrapper>
  );
};

export default Timer;