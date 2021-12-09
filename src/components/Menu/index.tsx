import { useState } from 'react';
import Image from 'next/image';
import Switch from '../Switch';
import { Wrapper, CloseButton, Label, Span, RangeInput } from './style';

interface MenuProps {
  onClose: () => void;
}

const Menu = ({ onClose }: MenuProps) => {
  const [isLongBreakActive, setIsLongBreakActive] = useState(false);
  const [workTime, setWorkTime] = useState(25)
  const [breakTime, setBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);

  return (
    <Wrapper>
      <CloseButton type="button" onClick={onClose}>
        <Image src="/assets/close.svg" width={24} height={24} />
      </CloseButton>

      <div>
        <Label htmlFor="work-input">
          Pomodora - {workTime > 1 ? `${workTime} minutos` : `${workTime} minuto`}
        </Label>
        <RangeInput
          id="work-input"
          type="range"
          dataType="work"
          min={1}
          max={59}
          step={1}
          value={workTime}
          onChange={({ target }) => setWorkTime(Number(target.value))}
        />
      </div>

      <div>
        <Label htmlFor="break-input">
          Intervalo - {breakTime > 1 ? `${breakTime} minutos` : `${breakTime} minuto`}
        </Label>
        <RangeInput
          id="break-input"
          type="range"
          dataType="break"
          min={1}
          max={59}
          step={1}
          value={breakTime}
          onChange={({ target }) => setBreakTime(Number(target.value))}
        />
      </div>

      <div>
        <Label htmlFor="long-break-input">
          {
            isLongBreakActive
              ? `Intervalo longo - ${longBreakTime > 1 ? `${longBreakTime} minutos` : `${longBreakTime} minuto`}`
              : 'Intervalo longo'
          }
        </Label>
        <Span>(A cada 4 intervalos)</Span>
        
        <Switch onChange={(isActive) => setIsLongBreakActive(isActive)} />

        <RangeInput
          id="long-break-input"
          type="range"
          dataType="long-break"
          min={1}
          max={59}
          step={1}
          value={longBreakTime}
          onChange={({ target }) => setLongBreakTime(Number(target.value))}
          isVisible={isLongBreakActive}
        />
      </div>
    </Wrapper>
  )
}

export default Menu;