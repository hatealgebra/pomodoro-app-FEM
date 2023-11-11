import { forwardRef } from 'react';
import { InputContainer, StyledInput } from './input.styled';

interface InputProps {
  label: string;
  onChange: (value: number | string) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, onChange, ...props }, newRef) => {
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
            ref={newRef}
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
  }
);
export default Input;
