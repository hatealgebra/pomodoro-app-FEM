import { useContext, useMemo } from 'react';
import {
  ColorRadioButton,
  FontRadioButton,
  InputGroup,
  RadioGroup,
  SettingsForm,
  SubmitButton,
} from './form.styled';
import { PomodoroContext } from '../../state/PomodoroContext';
import Input from '../input/Input';
import { ColorsEnum, FontsEnum, TimeEnum } from '../../index.d';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../state/hooks';
import { setNewState } from '../../state/actions';

type InputTypes = {
  font: FontsEnum;
  timer: { timers: Record<TimeEnum, number>; currentTimer: TimeEnum };
  color: ColorsEnum;
};

const Form = () => {
  const { timer, font, color } = useContext(PomodoroContext);
  console.log(timer, font, color);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, control } = useForm<InputTypes>({
    defaultValues: {
      timer,
      font,
      color,
    },
  });

  const timersArray = useMemo(() => {
    if (!timer?.timers) return;

    const timeEntries = Object.entries(timer?.timers) as [TimeEnum, number][];
    const timeEntriesArray = timeEntries.map(([name, value]) => {
      return { name, value };
    });

    return timeEntriesArray;
  }, [timer?.timers]);

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    dispatch(setNewState(data));
  };

  return (
    <SettingsForm onSubmit={handleSubmit(onSubmit)}>
      <section>
        <h4>Time (minutes)</h4>
        <InputGroup>
          {timersArray?.map(({ name, value }) => {
            return (
              <Controller
                name={`timer.timers.${name}`}
                control={control}
                render={({ field }) => (
                  <Input key={`${name}-${value}`} label={name} {...field} />
                )}
              />
            );
          })}
        </InputGroup>
      </section>
      <section>
        <h4>Font</h4>
        <RadioGroup>
          {Object.entries(FontsEnum).map(([key, value]) => (
            <FontRadioButton
              key={`${key}-${value}-radio-button`}
              type='radio'
              value={value}
              fontFamily={value}
              {...register('font')}
            />
          ))}
        </RadioGroup>
      </section>
      <section>
        <h4>Color</h4>
        <RadioGroup>
          {Object.entries(ColorsEnum).map(([key, value]) => (
            <ColorRadioButton
              key={`${key}-${value}-radio-button`}
              type='radio'
              value={value}
              color={value}
              {...register('color')}
            />
          ))}
        </RadioGroup>
      </section>
      <SubmitButton type='submit'>Apply</SubmitButton>
    </SettingsForm>
  );
};

export default Form;
