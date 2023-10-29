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
import { SubmitHandler, useForm } from 'react-hook-form';

type TimersType = Record<keyof TimeEnum, number>;

type InputTypes = {
  font: FontsEnum;
  timers: Record<TimeEnum, number>;
  color: ColorsEnum;
};

const Form = () => {
  const { timer, font, color } = useContext(PomodoroContext);

  const { register, handleSubmit, watch, formState } = useForm<InputTypes>({
    defaultValues: {
      timer,
      font,
      color,
    },
  });

  const activeColor = watch('color');

  console.log(activeColor);

  const timersArray = useMemo(() => {
    if (!timer?.timers) return;

    const timeEntries = Object.entries(timer?.timers) as [TimeEnum, number][];
    const timeEntriesArray = timeEntries.map(([name, value]) => {
      return { name, value };
    });

    return timeEntriesArray;
  }, [timer?.timers]);

  const onSubmit: SubmitHandler<InputTypes> = (data) => console.log(data);

  return (
    <SettingsForm onSubmit={handleSubmit(onSubmit)}>
      <section>
        <h4>Time (minutes)</h4>
        <InputGroup>
          {timersArray.map(({ name, value }) => {
            return (
              <Input
                key={`${name}-${value}`}
                label={name}
                {...register(`timers.${name}`)}
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
