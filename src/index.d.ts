export interface IContext {
  timers?: {
    [key in TimeUnion]: number;
  };
  color?: FontsUnion;
  font?: FontsUnion;
}

export enum TimeEnum {
  POMODORO = 'pomodoro',
  SHORT_BREAK = 'shortBreak',
  LONG_BREAK = 'longBreak',
}

export enum FontsEnum {
  KUMBH = 'Kumbh Sans',
  ROBOTO = 'Roboto Slab',
  SPACE = 'Space Mono',
}

export enum ColorsEnum {
  RED = 'red',
  BLUE = 'blue',
  PURPLE = 'purple',
}
