import Image from 'next/image';
import { LogoWrapper } from './style';

interface LogoProps {
  isSplashScreen: boolean;
}

const Logo = ({ isSplashScreen }: LogoProps) => {
  return (
    <LogoWrapper isSplashScreen={isSplashScreen}>
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