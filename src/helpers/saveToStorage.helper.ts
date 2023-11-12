import { InputTypes } from '../components/form/Form';

export const saveSettingsToStorage = (settings: InputTypes) => {
  const {
    timer: { timers },
    ...rest
  } = settings;

  Object.entries(rest).forEach(([key, value]) =>
    localStorage.setItem(key, value)
  );

  Object.entries(timers).forEach(([key, value]) =>
    localStorage.setItem(key, `${value}`)
  );
};
