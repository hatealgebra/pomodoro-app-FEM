enum ReducerActions {
  SET_TIMER = 'SET_TIMER',
  SET_FONT = 'SET_FONT',
  SET_COLOR = 'SET_COLOR',
}

export const setTimer = (payload: any) => ({
  type: SET_TIMER,
  payload: {
    timerType: payload.durationType,
    timerValue: payload.value,
  },
});

export const setFont = (payload: any) => ({
  type: SET_FONT,
  payload,
});

export const setColor = (payload: any) => ({
  type: SET_COLOR,
  payload,
});

export const { SET_TIMER, SET_FONT, SET_COLOR } = ReducerActions;
