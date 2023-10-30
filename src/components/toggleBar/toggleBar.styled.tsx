import { styled } from '@linaria/react';

export const BarContainer = styled.div`
  display: flex;
  align-content: center;
  background-color: var(--color-component-bg);
  padding: 8px 7px 7px;
  border-radius: 31.5px;
  width: 100%;
  max-width: 373px;
`;

export const ToggleButtonGroup = styled.ul`
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  width: 100%;
  position: relative;
  list-style-type: none;

  & li {
    padding: 0;
    margin: 0;
  }

  li {
    text-align: center;
    font-family: var(--font-family);
    z-index: 2;
  }
`;

export const ToggleButton = styled.button<{ isActive: boolean }>`
  border: none;
  background-color: transparent;
  color: ${({ isActive }) =>
    isActive
      ? 'var(--color-bg)'
      : 'var(--color-text)'}; // stylelint-disable-line
  opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
  text-transform: lowercase;
  font-weight: 700;
  z-index: 1;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
`;

export const PillButton = styled.button`
  background-color: red;
  z-index: 0;
  position: absolute;
  height: 100%;
  left: 0;
  width: 33.3%;
  border-radius: 26.5px;
  border: none;
  transition: transform 0.25s ease-in-out;
`;
