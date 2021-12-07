import Image from 'next/image';
import { LogoWrapper } from './style';

const Logo = () => {
  return (
    <LogoWrapper>
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