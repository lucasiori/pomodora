import styled, { css, keyframes } from 'styled-components';

const enter = keyframes`
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
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
  isSplashScreen: boolean;
}

const LogoWrapper = styled.div<LogoWrapperProps>`
  position: relative;
  width: 100%;
  max-width: 12.75rem;
  height: 12.75rem;
  opacity: 0;
  
  ${({ isSplashScreen }) => isSplashScreen && css`
    animation: ${enter} 600ms 500ms ease-in-out forwards;
    
    > span {
      animation: ${rotation} 5s linear infinite;
    }
  `};

  ${({ isSplashScreen }) => !isSplashScreen && css`
    max-width: 8.75rem;
    height: 8.75rem;  
    opacity: 1;
  `};
`;

export { LogoWrapper };