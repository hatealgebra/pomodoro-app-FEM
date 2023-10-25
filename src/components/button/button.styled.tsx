import { styled } from '@linaria/react';

export const Button = styled.button`
  font-size: 1.6rem;
  color: var(--color-white);
  background-color: var(--color-primary);
  font-family: 'Kumbh Sans', sans-serif;
  border-radius: 26.5px;
  border: none;
  text-align: center;
  padding: 21px 47px 16px;
  font-weight: 700;
  position: relative;
  transition: background-color 0.2s ease-in;

  &:hover {
    cursor: pointer;
    background-color: var(--color-primary-faded);
  }
`;
