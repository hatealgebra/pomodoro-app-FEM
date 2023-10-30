import { InputContainer, StyledInput } from './input.styled';

interface InputProps {
  label: string;
}

const Input = ({ label, onChange, ...props }: InputProps) => {
  const sanitizeOnChange = (e) => {
    const newValue = e.target.value;
    const sanitizedValue = newValue.replace(/[^0-9] | e+$/g, '');

    if (newValue === '') {
      return onChange('');
    }
    const number = Number(sanitizedValue);

    onChange(number);
  };
  const handleIncrement = (e) => {};

  return (
    <InputContainer>
      <label className='body-two' htmlFor={label}>
        {label}
      </label>
      <StyledInput>
        <input
          onChange={(e) => sanitizeOnChange(e)}
          step='5'
          type='number'
          required
          {...props}
        />
        <button data-increment='up'>
          <img src='/assets/icon-arrow-up.svg' alt='Increment up' />
        </button>
        <button data-increment='down'>
          <img src='/assets/icon-arrow-down.svg' alt='Increment down' />
        </button>
      </StyledInput>
    </InputContainer>
  );
};
export default Input;
