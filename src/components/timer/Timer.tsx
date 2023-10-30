/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useRef, useState } from 'react';
import { TimerContainer, TimeContent, CircleProgress } from './timer.styled';
import { useWindowSize } from '@uidotdev/useHooks';
import { getReadableTime } from '../../utils';
import { selectCurrentValue } from '../../state/PomodoroContext';
import { useAppSelector } from '../../state/hooks';

const Timer = () => {
  const circleRef = useRef(null);
  const currentTimeValue = useAppSelector(selectCurrentValue);
  const windowSize = useWindowSize();

  const [timeLeft, setTimeLeft] = useState(currentTimeValue);
  const [isRunning, setIsRunning] = useState(false);

  const dashArrayValue = useMemo(() => {
    if (!circleRef.current) return 0;

    const radius = circleRef.current.getBoundingClientRect().width / 2;

    return 2 * Math.PI * radius;
  }, [circleRef, windowSize.width]);

  const reflectedState = useMemo(() => {
    if (timeLeft === 0) return 'reset';

    if (isRunning) return 'pause';

    return 'start';
  }, [isRunning]);

  const countdownString = getReadableTime(timeLeft);
  const visualProgress = (timeLeft / currentTimeValue) * dashArrayValue;

  const toggleStartStop = () => setIsRunning((prevState) => !prevState);

  const countdownTheTime = (timeValue: number) => {
    const updatedValue = timeValue - 1;
    setTimeLeft(updatedValue);
  };

  useEffect(() => {
    let intervalId;

    if (!isRunning) {
      clearInterval(intervalId);
      return;
    }
    // setTimeout(() => {
    //   countdownTheTime(timeLeft);
    // }, 1000);
    intervalId = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prev: number) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  useEffect(() => {
    setIsRunning(false);

    setTimeLeft(currentTimeValue);
  }, [currentTimeValue]);

  return (
    <TimerContainer onClick={toggleStartStop}>
      <CircleProgress>
        <svg width='100%' height='100%'>
          <circle
            ref={circleRef}
            r='45%'
            cx='50%'
            cy='50%'
            strokeDasharray={dashArrayValue}
            strokeDashoffset={dashArrayValue - visualProgress}
          />
        </svg>
      </CircleProgress>
      <TimeContent>
        <h1>{countdownString}</h1>
        <h3>{reflectedState}</h3>
      </TimeContent>
    </TimerContainer>
  );
};

export default Timer;
