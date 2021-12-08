import styled, { css } from 'styled-components';

type CycleType = 'initial' | 'work' | 'break';

interface WrapperProps {
  step: CycleType;
}

const getBackground = (step: CycleType) => {
  switch(step) {
    case 'work':
      return css`
        background: radial-gradient(
          50% 50% at 50% 50%,
          var(--yellow-700) 0%,
          var(--orange-800) 100%
        );
      `;
    case 'break':
      return css`background: radial-gradient(
        50% 50% at 50% 50%,
        var(--green-100) 0%,
        var(--green-250) 98.44%
        );
      `;
    default:
      return css`
        background: linear-gradient(
          180deg,
          var(--orange-800) 0%,
          var(--yellow-700) 54.69%,
          var(--green-250) 100%
        );
      `;
  }
}

const Wrapper = styled.main<WrapperProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px var(--black-200);
  padding: 0 1rem;
  overflow: hidden;

  ${({ step }) => getBackground(step)};

  section {
    max-width: 100%;

    &:first-of-type {
      margin-top: 2rem;
    }

    & + section {
      margin-top: 4.5rem;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export {
  Wrapper,
  Content
};