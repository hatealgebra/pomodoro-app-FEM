import { createContext, useContext } from 'react';
import { ColorsEnum, FontsEnum, IContext } from '../index.d';

const defaultTimers = {
  pomodoro: parseInt(localStorage.getItem('pomodoro')!, 10) || 25,
  shortBreak: parseInt(localStorage.getItem('shortBreak')!, 10) || 5,
  longBreak: parseInt(localStorage.getItem('longBreak')!, 10) || 15,
};

const defaultFont =
  (localStorage.getItem('font') as FontsUnion) || FontsEnum.KUMBH;
const defaultColor =
  (localStorage.getItem('color') as FontsUnion) || ColorsEnum.RED;

export const initialState: IContext = {
  timers: defaultTimers,
  font: defaultFont,
  color: defaultColor,
};

export const PomodoroContext = createContext<IContext>(initialState);
export const PomodorDispatchContext = createContext<React.Dispatch<any> | null>(
  null
);

export const usePomodoroContext = () => {
  return useContext(PomodoroContext);
};

export const useAppDispatch = () => {
  return useContext(PomodorDispatchContext);
};
