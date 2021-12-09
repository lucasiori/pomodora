import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Logo from '../components/Logo';
import CycleSwitcher from '../components/CycleSwitcher';
import Timer from '../components/Timer';
import ControlButtons from '../components/ControlButtons';
import Menu from '../components/Menu';
import GlobalStyle from '../style/global';
import { Wrapper, Content } from '../style/pages/home';

type CycleType = 'initial' | 'work' | 'break' | 'menu';

const Home: NextPage = () => {
  const [step, setStep] = useState<CycleType>('initial');

  useEffect(() => {
    setTimeout(() => {
      setStep('work');
    }, 2000);
  }, [])
  
  return (
    <Wrapper step={step}>
      <GlobalStyle />

      <Content>
        <Logo isSplashScreen={step === 'initial'} />

        {(step === 'work' || step === 'break') && (
          <>
            <CycleSwitcher
              onChangeCycle={(type) => setStep(type)}
            />

            <Timer
              initialTimeInSeconds={1500}
              isRunning={false}
              onEndCycle={() => {}}
            />

            <ControlButtons
              isRunning={false}
              onOpenSettings={() => setStep('menu')}
              onPause={() => {}}
              onReset={() => {}}
              onStart={() => {}}
            />
          </>
        )}

        {step === 'menu' && (
          <Menu onClose={() => setStep('work')} />
        )}
      </Content>
    </Wrapper>
  );
};

export default Home;
