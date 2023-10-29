// import '@fontsource-variable/kumbh-sans/';
import { AppContainer, AppTitle } from './components/misc.styled';
import ToggleBar from './components/toggleBar/ToggleBar';
import Timer from './components/timer/Timer';
import {
  PomodorDispatchContext,
  PomodoroContext,
  initialState,
} from './state/PomodoroContext';

import contextReducer from './state/reducer';
import { useImmerReducer } from 'use-immer';
import Settings from './components/settings/Settings';

const App = () => {
  const [contextState, dispatch] = useImmerReducer(
    contextReducer,
    initialState
  );

  return (
    <PomodoroContext.Provider value={contextState}>
      <PomodorDispatchContext.Provider value={dispatch}>
        <AppContainer>
          <AppTitle>pomodoro</AppTitle>
          <ToggleBar />
          <Timer />
          <Settings />
        </AppContainer>
      </PomodorDispatchContext.Provider>
    </PomodoroContext.Provider>
  );
};

export default App;
