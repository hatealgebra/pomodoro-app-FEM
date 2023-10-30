import { TimeEnum } from '../../index.d';
import { selectCurrentTimer } from '../../state/PomodoroContext';
import { setCurrentTimer } from '../../state/actions';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import {
  BarContainer,
  PillButton,
  ToggleButtonGroup,
} from './toggleBar.styled';

const buttonValues = ['pomodoro', 'short break', 'long break'];

const ToggleBar = () => {
  const currentTimer = useAppSelector(selectCurrentTimer);
  const dispatch = useAppDispatch();

  const transformTimerValue = (value: TimeEnum) => {
    if (!value.includes(' ')) return value;
    const transformArray = value.split(' ');

    const firstWord = transformArray[0];
    const secondWord =
      transformArray[1].slice(0, 1).toUpperCase() + transformArray[1].slice(1);

    return `${firstWord}${secondWord}`;
  };

  const chooseTimer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value as TimeEnum;
    const transformedValue = transformTimerValue(value) as TimeEnum;
    dispatch(setCurrentTimer(transformedValue));
  };

  return (
    <BarContainer>
      <ToggleButtonGroup>
        {buttonValues.map((value, index) => {
          return (
            <li key={`${value}-${index}`}>
              <PillButton onClick={chooseTimer} value={value}>
                {value}
              </PillButton>
            </li>
          );
        })}
      </ToggleButtonGroup>
    </BarContainer>
  );
};

export default ToggleBar;
