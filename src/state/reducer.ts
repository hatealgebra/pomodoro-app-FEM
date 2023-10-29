import { IContext } from '..';
import { SET_COLOR, SET_FONT, SET_TIMER } from './actions';

const contextReducer = (state: IContext, action: IAction) => {
  switch (action.type) {
    case SET_TIMER:
      console.log('timer');
      break;
    case SET_FONT:
      console.log('font');
      break;
    case SET_COLOR:
      console.log('color');
      break;
    default:
      return state;
  }
};

export default contextReducer;
