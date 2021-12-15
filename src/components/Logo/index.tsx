import { LogoWrapper } from './style';

interface LogoProps {
  isInSplashScreen: boolean;
}

const Logo = ({ isInSplashScreen }: LogoProps) => {
  return (
    <LogoWrapper isInSplashScreen={isInSplashScreen}>
      <img src="/assets/logo.png" />
    </LogoWrapper>
  )
};

export default Logo;