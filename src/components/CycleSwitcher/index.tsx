import { CycleType } from '../../types'
import { Wrapper, CycleItem  } from './style';

interface CycleSwitcherProps {
  currentCycle: CycleType;
  onChangeCycle: (type: CycleType) => void;
}

const CycleSwitcher = ({ currentCycle, onChangeCycle }: CycleSwitcherProps) => {
  const handleChangeCycle = (type: CycleType) => {
    onChangeCycle(type);
  }

  return (
    <Wrapper>
      <CycleItem
        type="button"
        cycleType="work"
        isSelected={currentCycle === 'work'}
        onClick={() => handleChangeCycle('work')}
      >
        Pomodora
      </CycleItem>

      <CycleItem
        type="button"
        cycleType="break"
        isSelected={currentCycle === 'break' || currentCycle === 'long-break'}
        onClick={() => handleChangeCycle('break')}
      >
        Intervalo
      </CycleItem>
    </Wrapper>
  );
};

export default CycleSwitcher;