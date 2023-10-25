import { createContext, useContext } from 'react';
import { FontUnion, IContext } from '..';

const defaultTimers = {
  pomodoro: parseInt(localStorage.getItem('pomodoro')!, 10) || 25,
  shortBreak: parseInt(localStorage.getItem('shortBreak')!, 10) || 5,
  longBreak: parseInt(localStorage.getItem('longBreak')!, 10) || 15,
};

const defaultFont = (localStorage.getItem('font') as FontUnion) || 'kumbh';
const defaultColor = (localStorage.getItem('color') as FontUnion) || 'red';

export const initialState: IContext = {
  timers: defaultTimers,
  font: defaultFont,
  color: defaultColor,
};

export const PomodoroContext = createContext<IContext | null>(null);
export const PomodorDispatchContext = createContext<React.Dispatch<any> | null>(
  null
);

export const usePomodoroContext = () => {
  return useContext(PomodoroContext);
};

export const useAppDispatch = () => {
  return useContext(PomodorDispatchContext);
};
