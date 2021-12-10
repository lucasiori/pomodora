import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import useSettings from '../hooks/useSettings';
import Logo from '../components/Logo';
import CycleSwitcher from '../components/CycleSwitcher';
import Timer from '../components/Timer';
import ControlButtons from '../components/ControlButtons';
import Menu from '../components/Menu';
import { CycleType, CycleState } from '../types/index';
import GlobalStyle from '../style/global';
import { Wrapper, Content } from '../style/pages/home';

const Home: NextPage = () => {
  const { settings, isSettingsLoaded, reloadSettings } = useSettings();

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [currentCycle, setCurrentCycle] = useState<CycleType>('initial');
  const [cycleState, setCycleState] = useState<CycleState>('initial');
  const [cycleTime, setCycleTime] = useState(0);
  const [breaksAmount, setBreaksAmount] = useState<number>(0);

  const goToNextCycle = () => {
    if (currentCycle !== 'work') {
      if (currentCycle === 'break') {
        setBreaksAmount(breaksAmount + 1);
      } else if (currentCycle === 'long-break') {
        setBreaksAmount(0);
      }

      setCurrentCycle('work');
      return;
    }

    if (breaksAmount === 4 && settings.hasLongBreak) {
      setCurrentCycle('long-break');
    } else {
      setCurrentCycle('break');
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
      <GlobalStyle />

      <Content>
        <Logo isSplashScreen={currentCycle === 'initial'} />

        {(currentCycle !== 'initial') && !isMenuOpened && (
          <>
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
              onStart={() => setCycleState('running')}
            />
          </>
        )}

        {isMenuOpened && (
          <Menu onClose={() => setIsMenuOpened(false)} />
        )}
      </Content>
    </Wrapper>
  );
};

export default Home;
