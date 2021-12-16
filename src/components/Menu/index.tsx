import useSettings from '../../hooks/useSettings';
import Switch from '../Switch';
import {
  Wrapper,
  CloseButton,
  Content,
  Label,
  Span,
  RangeInput
} from './style';

interface MenuProps {
  onClose: () => void;
}

const Menu = ({ onClose }: MenuProps) => {
  const {
    settings,
    isSettingsLoaded,
    setWorkTime,
    setBreakTime,
    setHasLongBreak,
    setLongBreakTime,
    setAutoChangeCycle
  } = useSettings();
  
  const {
    workTime,
    breakTime,
    hasLongBreak,
    longBreakTime,
    autoChangeCycle
  } = settings;

  return (
    <Wrapper>
      <CloseButton type="button" onClick={onClose}>
        <img src="/assets/close.svg" width={24} height={24} />
      </CloseButton>

      <Content isVisible={isSettingsLoaded} hasLongBreak={hasLongBreak}>
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
              hasLongBreak
                ? `Intervalo longo - ${longBreakTime > 1 ? `${longBreakTime} minutos` : `${longBreakTime} minuto`}`
                : 'Intervalo longo'
            }
          </Label>
          <Span>(A cada 4 intervalos)</Span>
          
          <Switch
            initialValue={hasLongBreak}
            onChange={(isActive) => setHasLongBreak(isActive)}
          />

          <RangeInput
            id="long-break-input"
            type="range"
            dataType="long-break"
            min={1}
            max={59}
            step={1}
            value={longBreakTime}
            onChange={({ target }) => setLongBreakTime(Number(target.value))}
            isVisible={hasLongBreak}
          />
        </div>

        <div>
          <Label>Troca automática de ciclos</Label>
          
          <Switch
            initialValue={autoChangeCycle}
            onChange={(isActive) => setAutoChangeCycle(isActive)}
          />
        </div>
      </Content>
    </Wrapper>
  )
}

export default Menu;