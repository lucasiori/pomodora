import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Logo from '../components/Logo';
import CycleSwitcher from '../components/CycleSwitcher';
import Timer from '../components/Timer';
import GlobalStyle from '../style/global';
import { Wrapper, Content } from '../style/pages/home';
import ControlButtons from '../components/ControlButtons';

type CycleType = 'initial' | 'work' | 'break';

const Home: NextPage = () => {
  const [step, setStep] = useState<CycleType>('initial');

  useEffect(() => {
    setTimeout(() => {
      setStep('work');
    }, 2000);
  }, []);
  
  return (
    <Wrapper step={step}>
      <GlobalStyle />

      <Content>
        <Logo isSplashScreen={step === 'initial'} />

        {step !== 'initial' && (
          <>
            <CycleSwitcher onChangeCycle={() => {}} />

            <Timer
              initialTimeInSeconds={1500}
              isRunning={false}
              onEndCycle={() => {}}
            />

            <ControlButtons
              isRunning={false}
              onOpenSettings={() => {}}
              onPause={() => {}}
              onReset={() => {}}
              onStart={() => {}}
            />
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default Home;
