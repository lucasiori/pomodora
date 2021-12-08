import Image from 'next/image';
import {
  Wrapper,
  ResetButton,
  StartButton,
  PauseButton,
  SettingsButton
} from './style';

interface ControlButtonProps {
  isRunning: boolean;
  onReset: () => void;
  onStart: () => void;
  onPause: () => void;
  onOpenSettings: () => void;
}

const ControlButtons = ({
  isRunning,
  onReset,
  onStart,
  onPause,
  onOpenSettings
}: ControlButtonProps) => {
  return (
    <Wrapper>
      <ResetButton type="button" onClick={onReset}>
        <Image src="/assets/reset.svg" width={28} height={28} />
      </ResetButton>

      {isRunning ? (
        <PauseButton type="button" onClick={onPause}>
          <Image src="/assets/pause.svg" width={30} height={30} />
        </PauseButton>
      ): (
        <StartButton type="button" onClick={onStart}>
          <Image src="/assets/start.svg" width={30} height={30} />
        </StartButton>
      )}

      <SettingsButton type="button" onClick={onOpenSettings}>
        <Image src="/assets/settings.svg" width={28} height={28} />
      </SettingsButton>
    </Wrapper>
  )
};

export default ControlButtons;