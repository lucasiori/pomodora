import { useEffect, useState } from 'react';
import { Wrapper, Highlighter } from './style';

interface SwitchProps {
  initialValue?: boolean;
  onChange: (isActive: boolean) => void;
}

const Switch = ({ initialValue = false, onChange }: SwitchProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(initialValue);
  }, [initialValue])

  const handleChange = () => {
    onChange(!isActive);
    setIsActive(!isActive);
  }

  return (
    <Wrapper isActive={isActive} onClick={handleChange}>
      <Highlighter />
    </Wrapper>
  );
}

export default Switch;