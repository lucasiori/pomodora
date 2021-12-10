import styled, { css } from 'styled-components';

type CycleType = 'initial' | 'work' | 'break' | 'long-break' | 'menu';

interface WrapperProps {
  currentCycle: CycleType;
  isMenuOpened: boolean;
}

const Wrapper = styled.main<WrapperProps>`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px var(--black-200);
  padding: 0 1rem;
  overflow: hidden;

  section {
    max-width: 100%;

    &:first-of-type {
      margin-top: 2rem;
    }

    & + section {
      margin-top: 4.5rem;
    }
  }

  @media screen and (max-width: 580px) {
    section + section {
      margin-top: 3rem;
    }
  }
`;

interface BackgroundProps {
  isVisible: boolean;
}

const backgroundStyles = (props: BackgroundProps) => css`
  position: absolute;
  inset: 0 0 0 0;
  opacity: ${props.isVisible ? '1' : '0'};
  transition: opacity 0.5s ease;
  z-index: 0;
`;

const InitialBackground = styled.div<BackgroundProps>`
  ${(props) => backgroundStyles(props)};

  background: linear-gradient(
    180deg,
    var(--orange-800) 0%,
    var(--yellow-700) 54.69%,
    var(--green-250) 100%
  );
`;

const WorkBackground = styled.div<BackgroundProps>`
  ${(props) => backgroundStyles(props)};

  background: radial-gradient(
    50% 50% at 50% 50%,
    var(--yellow-700) 0%,
    var(--orange-800) 100%
  );
`;

const BreakBackground = styled.div<BackgroundProps>`
  ${(props) => backgroundStyles(props)};

  background: radial-gradient(
    50% 50% at 50% 50%,
    var(--green-100) 0%,
    var(--green-250) 98.44%
  );
`;

const MenuBackground = styled.div<BackgroundProps>`
  ${(props) => backgroundStyles(props)};

  background: radial-gradient(
    50% 50% at 50% 50%,
    var(--yellow-300) 0%,
    var(--yellow-900) 100%
  );
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 140px;
  z-index: 2;
`;

interface LogoWrapperProps {
  isInSplashScreen: boolean;
}

const LogoWrapper = styled.div<LogoWrapperProps>`
  position: absolute;
  width: 100%;
  max-width: 340px;
  display: flex;
  justify-content: center;
  top: ${({ isInSplashScreen }) => isInSplashScreen ? '50%' : '0'};
  transform: ${({ isInSplashScreen }) => `translateY(${isInSplashScreen ? '-50%' : '0'})`};
  transition: all 1s ease;
`;

interface ContentWrapperProps {
  isVisible: boolean;
}

const ContentWrapper = styled.div<ContentWrapperProps>`
  position: relative;
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: all 1s 0.8s ease;
`;

interface ContentProps {
  isMenuOpened: boolean;
}

const Content = styled.div<ContentProps>`
  opacity: ${({ isMenuOpened }) => isMenuOpened ? '1' : '0'};
  transition: all 1s ease;
  transition-delay: ${({ isMenuOpened }) => isMenuOpened ? '300ms' : '0'};
`;

interface MenuWrapperProps {
  isMenuOpened: boolean;
}

const MenuWrapper = styled.div<MenuWrapperProps>`
  position: absolute;
  max-width: 100%;
  top: 0;
  opacity: ${({ isMenuOpened }) => isMenuOpened ? '1' : '0'};
  transition: all 1s ease;
  transition-delay: ${({ isMenuOpened }) => isMenuOpened ? '250ms' : '0'};
  z-index: ${({ isMenuOpened }) => isMenuOpened ? '99' : '-1'};
`;

export {
  Wrapper,
  InitialBackground,
  WorkBackground,
  BreakBackground,
  MenuBackground,
  Container,
  LogoWrapper,
  ContentWrapper,
  Content,
  MenuWrapper
};