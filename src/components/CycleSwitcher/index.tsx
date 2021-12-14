import { CycleType } from '../../types'
import { Wrapper, CycleItem  } from './style';

interface CycleSwitcherProps {
  currentCycle: CycleType;
  onChangeCycle: (type: CycleType) => void;
}

const CycleSwitcher = ({ currentCycle, onChangeCycle }: CycleSwitcherProps) => {
  return (
    <Wrapper>
      <CycleItem
        type="button"
        cycleType="work"
        isSelected={currentCycle === 'work'}
        onClick={() => onChangeCycle('work')}
      >
        Pomodora
      </CycleItem>

      <CycleItem
        type="button"
        cycleType="break"
        isSelected={currentCycle === 'break' || currentCycle === 'long-break'}
        onClick={() => onChangeCycle('break')}
      >
        Intervalo
      </CycleItem>
    </Wrapper>
  );
};

export default CycleSwitcher;