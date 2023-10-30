import { useRef } from 'react';
import { TimeEnum } from '../../index.d';
import { selectCurrentTimer } from '../../state/PomodoroContext';
import { setCurrentTimer } from '../../state/actions';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import {
  BarContainer,
  PillButton,
  ToggleButton,
  ToggleButtonGroup,
} from './toggleBar.styled';

const buttonValues = ['pomodoro', 'short break', 'long break'];

const ToggleBar = () => {
  const pillButtonRef = useRef(null);
  const toggleBarRef = useRef(null);

  const currentTimer = useAppSelector(selectCurrentTimer);
  const dispatch = useAppDispatch();

  const setActivePill = (buttonEl: HTMLButtonElement) => {
    const pillEl = pillButtonRef.current;
    const toggleBarEl = toggleBarRef.current;

    if (!pillEl || !pillEl) return;

    const leftPos =
      buttonEl.getBoundingClientRect().left -
      toggleBarEl.getBoundingClientRect().left;

    pillEl.style.transform = `translateX(${leftPos - 26}px)`;
  };

  const transformTimerValue = (value: TimeEnum) => {
    if (!value.includes(' ')) return value;
    const transformArray = value.split(' ');

    const firstWord = transformArray[0];
    const secondWord =
      transformArray[1].slice(0, 1).toUpperCase() + transformArray[1].slice(1);

    return `${firstWord}${secondWord}`;
  };

  const chooseTimer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonEl = e.currentTarget;
    const transformedValue = transformTimerValue(buttonEl.value as TimeEnum);
    setActivePill(buttonEl);
    dispatch(setCurrentTimer(transformedValue));
  };

  return (
    <BarContainer>
      <ToggleButtonGroup ref={toggleBarRef}>
        {buttonValues.map((value, index) => {
          console.log('value', value);
          console.log('currentTime', currentTimer);
          return (
            <li key={`${value}-${index}`}>
              <ToggleButton
                onClick={chooseTimer}
                value={value}
                isActive={currentTimer === transformTimerValue(value)}
              >
                {value}
              </ToggleButton>
            </li>
          );
        })}
        <PillButton ref={pillButtonRef} />
      </ToggleButtonGroup>
    </BarContainer>
  );
};

export default ToggleBar;
