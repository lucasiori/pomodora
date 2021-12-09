import { useState } from 'react';
import { Wrapper, CycleItem  } from './style';

type CycleType = 'work' | 'break';

interface CycleSwitcherProps {
  onChangeCycle: (type: CycleType) => void;
}

const CycleSwitcher = ({ onChangeCycle }: CycleSwitcherProps) => {
  const [selectedType, setSelectedType] = useState<CycleType>('work');

  const handleChangeCycle = (type: CycleType) => {
    setSelectedType(type);
    onChangeCycle(type);
  }

  return (
    <Wrapper>
      <CycleItem
        type="button"
        cycleType="work"
        isSelected={selectedType === 'work'}
        onClick={() => handleChangeCycle('work')}
      >
        Pomodora
      </CycleItem>

      <CycleItem
        type="button"
        cycleType="break"
        isSelected={selectedType === 'break'}
        onClick={() => handleChangeCycle('break')}
      >
        Intervalo
      </CycleItem>
    </Wrapper>
  );
};

export default CycleSwitcher;