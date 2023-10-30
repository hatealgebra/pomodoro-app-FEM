import { IContext } from '..';
import { ReducerActions, SET_NEW_STATE } from './actions';

const contextReducer = (
  state: IContext,
  action: { type: ReducerActions; payload: any }
) => {
  switch (action.type) {
    case SET_NEW_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default contextReducer;
