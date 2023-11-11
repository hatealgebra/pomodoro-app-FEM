import { MouseEventHandler, forwardRef } from 'react';
import { InputContainer, InputError, StyledInput } from './input.styled';
import { FieldErrors } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface InputProps {
  label: string;
  onChange: (value: number | string) => void;
  value: number;
  errors: FieldErrors;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, onChange, value, errors, ...props }, newRef) => {
    const sanitizeOnChange = (e) => {
      const newValue = e.target.value;
      const sanitizedValue = newValue.replace(/[^0-9] | e+$/g, '');

      if (newValue === '') {
        return onChange('');
      }
      const number = Number(sanitizedValue);

      onChange(number);
    };
    const handleIncrement = (e: MouseEventHandler<HTMLButtonElement>) => {
      const buttonEl = e?.currentTarget;

      if (!buttonEl) return;

      const increment = buttonEl.dataset.increment;
      const manipulateBy = increment === 'up' ? 5 : -5;

      const newValue = value + manipulateBy;
      if (newValue <= 0) {
        return onChange(0);
      }

      onChange(newValue);
    };

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
            value={value}
            {...props}
          />
          <button type='button' data-increment='up' onClick={handleIncrement}>
            <img src='/assets/icon-arrow-up.svg' alt='Increment up' />
          </button>
          <button type='button' data-increment='down' onClick={handleIncrement}>
            <img src='/assets/icon-arrow-down.svg' alt='Increment down' />
          </button>
        </StyledInput>
        <InputError>
          <ErrorMessage errors={errors} name={props.name} />
        </InputError>
      </InputContainer>
    );
  }
);
export default Input;
