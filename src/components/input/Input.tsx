import { InputContainer, StyledInput } from './input.styled';
import { TimeUnion } from '../..';
import { usePomodoroContext } from '../../state/PomodoroContext';

interface InputProps {
  label: TimeUnion;
}

const Input = ({ label }: InputProps) => {
  const context = usePomodoroContext();
  console.log(context);
  return (
    <InputContainer>
      <label className='body-two' htmlFor={label}>
        {label}
      </label>
      <StyledInput name={label} type='number' step='5' />
    </InputContainer>
  );
};

export default Input;
