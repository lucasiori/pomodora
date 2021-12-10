import Image from 'next/image';
import { LogoWrapper } from './style';

interface LogoProps {
  isInSplashScreen: boolean;
}

const Logo = ({ isInSplashScreen }: LogoProps) => {
  return (
    <LogoWrapper isInSplashScreen={isInSplashScreen}>
      <Image
        src="/assets/logo.png"
        layout="fill"
        objectFit="contain"
        priority
      />
    </LogoWrapper>
  )
};

export default Logo;