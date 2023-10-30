import { IContext } from '..';

export enum ReducerActions {
  SET_NEW_STATE = 'SET_NEW_STATE',
  SET_FONT = 'SET_FONT',
  SET_COLOR = 'SET_COLOR',
}

export const setNewState = (payload: IContext) => ({
  type: SET_NEW_STATE,
  payload,
});

export const { SET_NEW_STATE } = ReducerActions;
