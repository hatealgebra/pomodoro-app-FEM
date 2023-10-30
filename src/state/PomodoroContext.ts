import { createContext } from 'react';
import { ColorsEnum, FontsEnum, IContext, TimeEnum } from '../index.d';

const POMODORO = 45;
const SHORT_BREAK = 5;
const LONG_BREAK = 15;

const defaultTimers = {
  pomodoro: parseInt(localStorage.getItem('pomodoro')!, 10) || POMODORO,
  shortBreak: parseInt(localStorage.getItem('shortBreak')!, 10) || SHORT_BREAK,
  longBreak: parseInt(localStorage.getItem('longBreak')!, 10) || LONG_BREAK,
};

const defaultFont = localStorage.getItem('font') || FontsEnum.KUMBH;
const defaultColor = localStorage.getItem('color') || ColorsEnum.RED;

export const initialState: IContext = {
  timer: {
    timers: defaultTimers,
    currentTimer: TimeEnum.POMODORO,
  },
  font: defaultFont,
  color: defaultColor,
};

export const PomodoroContext = createContext<IContext>(initialState);
export const PomodorDispatchContext = createContext<React.Dispatch<any> | null>(
  null
);

// Selectors for timer
export const selectCurrentTimer = (state: IContext) =>
  state.timer?.currentTimer;
export const selectTimers = (state: IContext) => state.timer?.timers;
export const selectCurrentValue = (state: IContext) =>
  state.timer.timers[state.timer.currentTimer] * 60;

// Selectors for font and color theme
export const selectFont = (state: IContext) => state.font;
export const selectColor = (state: IContext) => state.color;
