import { useContext } from 'react';
import { PomodorDispatchContext, PomodoroContext } from './PomodoroContext';
import { IContext } from '..';

type SelectorCallbackType = (state: IContext) => any;

export const useAppSelector = (selector: SelectorCallbackType) => {
  const context = useContext(PomodoroContext);

  return selector(context);
};

export const useAppDispatch = () => {
  return useContext(PomodorDispatchContext);
};
