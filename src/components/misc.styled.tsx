import { styled } from '@linaria/react';

export const AppTitle = styled.span`
  font-size: 2.4rem;
  color: var(--color-text);
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  padding: 3.2rem 0 4.8rem;
  width: 85%;
  justify-content: space-evenly;
  margin: auto;
  height: 100%;

  &.red-theme {
    --color-theme: var(--color-red-theme);
  }

  &.blue-theme {
    --color-theme: var(--color-blue-theme);
  }

  &.purple-theme {
    --color-theme: var(--color-purple-theme);
  }

  &.kumbh-sans {
    font-family: var(--font-kumbh-sans);
  }

  &.roboto-slab {
    font-family: var(--font-roboto-slab);
  }

  &.space-mono {
    font-family: var(--font-space-mono);
  }
`;
