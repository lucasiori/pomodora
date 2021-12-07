import styled, { keyframes } from 'styled-components';

const enter = keyframes`
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    opacity: 1;
    transform: scale(1);
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

const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 18.75rem;
  height: 18.75rem;
  opacity: 0;
  animation: ${enter} 600ms 500ms ease-in-out forwards;
  
  > span {
    animation: ${rotation} 5s linear infinite;
  }
`;

export { LogoWrapper };