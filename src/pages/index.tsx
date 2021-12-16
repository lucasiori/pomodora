import { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import useSettings from '../hooks/useSettings';
import Logo from '../components/Logo';
import CycleSwitcher from '../components/CycleSwitcher';
import Timer from '../components/Timer';
import ControlButtons from '../components/ControlButtons';
import Menu from '../components/Menu';
import { CycleType, CycleState } from '../types/index';
import GlobalStyle from '../style/global';
import {
  Wrapper,
  InitialBackground,
  WorkBackground,
  BreakBackground,
  MenuBackground,
  Container,
  LogoWrapper,
  ContentWrapper,
  Content,
  MenuWrapper,
} from '../style/pages/home';

const Home: NextPage = () => {
  const { settings, reloadSettings } = useSettings();

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [currentCycle, setCurrentCycle] = useState<CycleType>('initial');
  const [cycleState, setCycleState] = useState<CycleState>('initial');
  const [cycleTime, setCycleTime] = useState(0);
  const [breaksAmount, setBreaksAmount] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  const goToNextCycle = () => {
    if (currentCycle !== 'initial' && audioRef.current) {
      audioRef.current.play();
    }
    
    if (currentCycle !== 'work') {
      if (currentCycle === 'break') {
        setBreaksAmount(breaksAmount + 1);
      } else if (currentCycle === 'long-break') {
        setBreaksAmount(0);
      }

      setCurrentCycle('work');
    } else {
      if (breaksAmount === 4 && settings.hasLongBreak) {
        setCurrentCycle('long-break');
      } else {
        setCurrentCycle('break');
      }
    }

    if (settings.autoChangeCycle) {
      setTimeout(handleStartCycle, 5000);
    }
  }

  const updateCycleTime = () => {
    switch (currentCycle) {
      case 'work':
        setCycleTime(settings.workTime * 60);
        break;
      case 'break':
        setCycleTime(settings.breakTime * 60);
        break;
      case 'long-break':
        setCycleTime(settings.longBreakTime * 60);
        break;
      default:
        break;
    }
  }

  const handleStartCycle = () => {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setCycleState('running');
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, [audioRef.current]);

  useEffect(() => {
    if (!isMenuOpened) {
      reloadSettings();
    }
  }, [isMenuOpened]);

  useEffect(() => {
    if (currentCycle === 'initial') return;

    updateCycleTime();
    setCycleState('initial');
  }, [currentCycle]);

  useEffect(() => {
    if (currentCycle !== 'initial') {
      updateCycleTime();
    }
  }, [settings]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentCycle('work');
    }, 2000);
  }, [])
  
  return (
    <Wrapper currentCycle={currentCycle} isMenuOpened={isMenuOpened}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#EA4903" />
        <meta name="description" content="Aplicação para gerenciamento de tempo utilizando o Método de Pomodoro" />

        <title>Pomodora</title>
      </Head>
      
      <GlobalStyle />

      <InitialBackground isVisible={currentCycle === 'initial'} />
      <WorkBackground isVisible={currentCycle === 'work'} />
      <BreakBackground isVisible={currentCycle === 'break'} />
      <MenuBackground isVisible={isMenuOpened} />

      <Container>
        <audio ref={audioRef} src="/assets/audio/alarm.mp3" />

        <LogoWrapper isInSplashScreen={currentCycle === 'initial'}>
          <Logo isInSplashScreen={currentCycle === 'initial'} />
        </LogoWrapper>

        <ContentWrapper isVisible={currentCycle !== 'initial'}>
          <Content isMenuOpened={!isMenuOpened}>
            <CycleSwitcher
              currentCycle={currentCycle}
              onChangeCycle={(type) => setCurrentCycle(type)}
            />

            <Timer
              initialTimeInSeconds={cycleTime}
              cycleState={cycleState}
              onEndCycle={goToNextCycle}
            />

            <ControlButtons
              isRunning={cycleState === 'running'}
              onOpenSettings={() => setIsMenuOpened(true)}
              onPause={() => setCycleState('paused')}
              onReset={() => setCycleState('initial')}
              onStart={handleStartCycle}
            />
          </Content>

          <MenuWrapper isMenuOpened={isMenuOpened}>
            <Menu onClose={() => setIsMenuOpened(false)} />
          </MenuWrapper>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default Home;
