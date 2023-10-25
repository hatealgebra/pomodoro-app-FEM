
export type TimeUnion = 'pomodoro' | 'shortBreak' | 'longBreak';
export type FontUnion = 'kumbh' | 'roboto' | 'space';
export type ColorUnion = 'red' | 'blue'| 'purple';

export interface IContext {
    timers?: {
      [key in TimeUnion]: number
    },
    color?: FontUnion,
    font?: FontUnion,
  }