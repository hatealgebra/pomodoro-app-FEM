import { styled } from '@linaria/react';

export const TimerContainer = styled.div`
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow:
    50px 50px 100px 0 #121530,
    -50px -50px 100px 0 #272c5a;
  position: relative;

  &,
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 410px;
    align-content: center;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  & > div {
    background-color: #0e112a;
    width: 90%;
    height: 90%;
  }
`;

export const TimeContent = styled.div`
  margin: auto;
  font-weight: 700;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  color: var(--color-text);
  text-align: center;

  & > * {
    z-index: 1;
  }

  h3 {
    text-transform: uppercase;
  }
`;

export const CircleProgress = styled.div`
  position: absolute;
  background-color: #0e112a;

  svg {
    display: flex;
    justify-items: center;
    align-items: center;
    transform: rotate(-90deg);
  }
  circle {
    fill: transparent;
    stroke: #f87070;
    stroke-width: 10;
    stroke-linecap: round;
    stroke-dashoffset: 200;
    transition: stroke-dashoffset 1s;
  }
`;
