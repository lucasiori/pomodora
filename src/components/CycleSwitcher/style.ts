import styled from 'styled-components';

type CycleType = 'work' | 'break';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface CycleItemProps {
  cycleType: CycleType;
  isSelected: boolean;
}

const CycleItem = styled.button<CycleItemProps>`
  width: 164px;
  background: ${({ cycleType, isSelected }) => {
    if (isSelected) {
      if (cycleType === 'work') {
        return 'var(--orange-600)';
      } else if (cycleType === 'break') {
        return 'var(--green-300)';
      }
    }

    return 'var(--black-500)';
  }};
  border: 0;
  box-shadow: ${({ isSelected }) => !isSelected && 'inset 0px 4px 4px var(--black-200)'};
  color: var(--white-900);
  font-size: 1.125rem;
  letter-spacing: 0.02rem;
  padding: 1.5rem;
  transition: all 0.2s ease;

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export {
  Wrapper,
  CycleItem
};