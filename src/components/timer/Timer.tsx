/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useRef, useState } from 'react';
import { TimerContainer, TimeContent, CircleProgress } from './timer.styled';
import { useWindowSize } from '@uidotdev/useHooks';
import { getReadableTime } from '../../utils';
import { usePomodoroContext } from '../../state/PomodoroContext';

const Timer = () => {
  const circleRef = useRef(null);
  const context = usePomodoroContext();
  const [timeLeft, setTimeLeft] = useState(context?.timers?.pomodoro);
  const windowSize = useWindowSize();

  const dashArrayValue = useMemo(() => {
    if (!circleRef.current) return 0;

    const radius = circleRef.current.getBoundingClientRect().width / 2;

    return 2 * Math.PI * radius;
  }, [circleRef, windowSize.width]);

  const countdownTheTime = (timeValue: number) => {
    if (timeValue < 0) return;
    getReadableTime(timeValue - 1);

    // return setTimeout(() => countdownTheTime(timeValue), 1000);
  };

  useEffect(() => {
    if (!timeLeft) return;

    const totalSeconds = timeLeft * 60;
    const minutes = totalSeconds / 60;
    const seconds = totalSeconds % 60;
    console.log(minutes, seconds);

    countdownTheTime(totalSeconds);
  }, []);

  return (
    <TimerContainer>
      <CircleProgress>
        <svg width='100%' height='100%'>
          <circle
            // ref={circleRef}
            r='45%'
            cx='50%'
            cy='50%'
            strokeDasharray={dashArrayValue}
          />
        </svg>
      </CircleProgress>
      <TimeContent>
        <h1>{timeLeft}</h1>
        <h3>pause</h3>
      </TimeContent>
    </TimerContainer>
  );
};

export default Timer;
