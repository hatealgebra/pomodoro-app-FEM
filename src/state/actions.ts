import { IContext, TimeEnum } from '..';

export enum ReducerActions {
  SET_NEW_STATE = 'SET_NEW_STATE',
  SET_TIMER = 'SET_TIMER',
  SET_FONT = 'SET_FONT',
  SET_COLOR = 'SET_COLOR',
}

export const setNewState = (payload: IContext) => ({
  type: SET_NEW_STATE,
  payload,
});

export const setCurrentTimer = (payload: TimeEnum) => ({
  type: SET_TIMER,
  payload,
});

export const { SET_NEW_STATE, SET_TIMER } = ReducerActions;
