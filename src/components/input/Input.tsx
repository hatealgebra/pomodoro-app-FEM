import { RegisterOptions } from 'react-hook-form';
import { InputContainer, StyledInput } from './input.styled';
import { forwardRef } from 'react';

interface InputProps {
  label: string;
}

const Input = forwardRef<HTMLInputElement, RegisterOptions & InputProps>(
  ({ onChange, onBlur, name, label }, ref) => {
    const handleIncrement = (e) => {};

    return (
      <InputContainer>
        <label className='body-two' htmlFor={label}>
          {label}
        </label>
        <StyledInput>
          <input
            step='5'
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
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
