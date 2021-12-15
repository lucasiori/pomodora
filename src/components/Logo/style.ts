import styled, { css, keyframes } from 'styled-components';

const enter = keyframes`
  0% {
    transform: scale(0.4);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    opacity: 1;
    transform: scale(1) ;
  }
`;

const rotation = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

interface LogoWrapperProps {
  isInSplashScreen: boolean;
}

const LogoWrapper = styled.div<LogoWrapperProps>`
  position: relative;
  width: 100%;
  max-width: 12.75rem;
  height: 12.75rem;
  opacity: 0;
  transition: all 1s ease;

  > img {
    max-width: 100%;
    max-height: 100%;
    animation: ${rotation} 3.5s linear 1;
  }

  @media screen and (max-width: 580px) {
    max-width: 10.5rem;
    height: 10.5rem;  
  }
  
  ${({ isInSplashScreen }) => isInSplashScreen && css`
    animation: ${enter} 2s 500ms ease-in-out forwards;
  `};

  ${({ isInSplashScreen }) => !isInSplashScreen && css`
    & {
      max-width: 8.75rem;
      height: 8.75rem;  
      opacity: 1;
    }
  `};
`;

export { LogoWrapper };