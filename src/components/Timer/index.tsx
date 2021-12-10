import { useCallback, useEffect, useState } from 'react';
import { Wrapper, TimerValue } from './style';

type CycleState = 'initial' | 'running' | 'paused';
interface TimerProps {
  initialTimeInSeconds: number;
  cycleState: CycleState;
  onEndCycle: () => void;
}

const Timer = ({
  initialTimeInSeconds,
  cycleState,
  onEndCycle: onEndCycleProp
}: TimerProps) => {
  const [remainingTimeInSeconds, setRemainingTimeInSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  const formatTime = useCallback((value: number): string => {
    if (value === 0) return '';
    
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return formattedTime;
  }, []);

  const onEndCycle = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }

    setTimeout(onEndCycleProp, 500);
  }

  const initInterval = () => {
    const newIntervalId = setInterval(() => {
      setRemainingTimeInSeconds((oldValue) => oldValue - 1);
    }, 1000);

    setIntervalId(newIntervalId);
  }

  useEffect(() => {
    if (cycleState === 'running' && remainingTimeInSeconds === 0) {
      onEndCycle();
    }
  }, [remainingTimeInSeconds])

  useEffect(() => {
    setRemainingTimeInSeconds(initialTimeInSeconds);
  }, [initialTimeInSeconds])

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }

    if (cycleState === 'initial') {
      setRemainingTimeInSeconds(initialTimeInSeconds);
    } else if (cycleState === 'running') {
      initInterval();
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
  }, [cycleState]);

  return (
    <Wrapper>
      <TimerValue>{formatTime(remainingTimeInSeconds) || '--:--'}</TimerValue>
    </Wrapper>
  );
};

export default Timer;