import { styled } from '@linaria/react';
import { ColorsEnum, FontsEnum } from '../../index.d';

export const SettingsForm = styled.form`
  padding: 2.4rem;

  section {
    padding-bottom: 2.4rem;
    width: 95%;
    margin: auto;

    &:not(:nth-of-type(1)) {
      padding-top: 2.4rem;
      border-top: 1px solid var(--color-border);
    }

    &:nth-of-type(2) {
      border-bottom: 1px solid var(--color-border);
    }

    h4 {
      text-align: center;
    }

    & > div {
      margin-top: 1.8rem;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const RadioButton = styled.input`
  appearance: none;
  width: 40px;
  height: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
`;

export const FontRadioButton = styled(RadioButton)<{ fontFamily: FontsEnum }>`
  background-color: var(--color-background-blue);

  &::before {
    font-weight: 400;
    font-family: ${(props) => props.fontFamily}; /* stylelint-disable-line */
    font-size: 1.5rem;
    content: 'Aa';
  }

  &[type='radio']:checked {
    color: #fff;
    background-color: var(--color-component-bg);
    font-weight: 700;
  }
`;

export const ColorRadioButton = styled(RadioButton)<{ color: ColorsEnum }>`
  background-color: ${({ color }) => `var(--color-${color}-theme)`};

  &::before {
    content: '';
    background-image: url('/assets/checkmark.svg');
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: all 0.15s ease-in-out;
  }

  &[type='radio']:checked {
    ::before {
      opacity: 1;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--color-primary);
  font-size: 1.6rem;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 700;
  height: 53px;
  width: 140px;
  text-align: center;
  line-height: 5.3rem;
  position: absolute;
  border: none;
  color: #fff;
  border-radius: 26.5px;
  bottom: calc(-53px / 2);
  cursor: pointer;
  transition: all 0.25s ease-in;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    filter: brightness(1.2);
    color: var(--color-text);
  }
`;
