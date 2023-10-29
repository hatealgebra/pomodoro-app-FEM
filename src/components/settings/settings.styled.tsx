import { styled } from '@linaria/react';

export const SettingsBackground = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgb(10 12 28 / 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  z-index: 10;
`;

export const SettingsContainer = styled.div`
  width: 85%;
  background-color: #fff;
  height: 85%;
  padding: 2.4rem 0;
  margin: auto;
  max-width: 540px;
  border-radius: 15px;
  position: relative;

  & > * {
    padding: 0 2.4rem;
  }
`;

export const SettingsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.8rem;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    height: 14px;
    aspect-ratio: 1;
  }
`;

export const SettingsButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: filter 0.3s ease-in-out;
  transition: transform 1s ease;
  position: relative;
  width: 28px;
  height: 28px;

  &:hover {
    filter: brightness(2);
    transform: rotate(270deg);
  }
`;
