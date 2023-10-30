import { IContext } from '..';
import { ReducerActions, SET_NEW_STATE, SET_TIMER } from './actions';

const contextReducer = (
  state: IContext,
  action: { type: ReducerActions; payload: any }
) => {
  switch (action.type) {
    case SET_NEW_STATE:
      return action.payload;
    case SET_TIMER:
      return {
        ...state,
        timer: {
          ...state.timer,
          currentTimer: action.payload,
        },
      };
    default:
      return state;
  }
};

export default contextReducer;
