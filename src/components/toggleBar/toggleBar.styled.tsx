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
  justify-content: space-between;
  align-items: center;
  margin: 0 22px;
  padding: 0;
  width: 100%;
  position: relative;

  & li {
    padding: 0;
    margin: 0;
  }

  li {
    text-align: center;
    font-family: var(--font-family);
    z-index: 2;

    button {
      border: none;
      background-color: transparent;
      color: var(--color-text);
      opacity: 0.4;
      text-transform: lowercase;
      font-weight: 700;

      &.active {
        color: var(--color-bg);
        opacity: 1;
      }
    }
  }

  .chosen-option {
    background-color: red;
    z-index: 0;
    position: absolute;
    left: -11px;
  }
`;
