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

export interface IContext {
  timer?: {
    timers: {
      [TimeEnum]: number;
    };
  };
  currentTimer: TimeEnum;
  color?: FontsUnion;
  font?: FontsUnion;
}
