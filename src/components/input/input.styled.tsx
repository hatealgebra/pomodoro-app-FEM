import { styled } from '@linaria/react';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  width: fit-content;

  label {
    color: var(--color-dark-text);
    opacity: 0.4;
    font-weight: 700;
  }

  @media (--tablet-viewport) {
    display: row;
  }
`;

export const StyledInput = styled.input`
  background-color: var(--color-text);
  width: 140px;
  height: 48px;
  padding: 19px 16px 15px;
`;
