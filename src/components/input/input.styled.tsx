import { styled } from '@linaria/react';
import customMedia from '../../constants/customMedia';

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  width: 100%;

  label {
    color: var(--color-dark-text);
    opacity: 0.4;
    font-weight: 700;
  }

  & > * {
    flex: 1;
  }

  ${customMedia.maxSettingsQuery} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledInput = styled.div`
  border: none;
  display: grid;
  grid-template-columns: 1fr auto;
  max-width: 140px;
  border-radius: 10px;
  background-color: #eff1fa;
  font-size: 14px;
  padding-right: 1.6rem;

  button,
  input {
    background-color: transparent;
    border: none;
  }

  button {
    grid-row: span 1;
    grid-column: 2/3;
    display: inline-block;
    height: fit-content;
    cursor: pointer;

    img {
      height: 6px;
      width: 14px;
      object-fit: contain;
    }
  }

  input {
    grid-row: 1/3;
    grid-column: 1/2;
    height: 100;
    width: 100%;
    font-weight: 700;
    padding: 1.5rem 0 1.1rem 1.6rem;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      appearance: none;
    }
  }
`;
