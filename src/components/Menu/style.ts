import styled, { css } from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  width: 340px;
  padding-top: 1rem;

  & {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 0;
  top: 0;
  left: 0;
  opacity: 1;
  transform: translateY(-12.75rem) scale(1);
  filter: drop-shadow(0px 4px 4px var(--black-200));
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.84;
    transform: translateY(-12.75rem) scale(0.9);
  }
`;

interface ContentProps {
  isVisible: boolean;
}

const Content = styled.div<ContentProps>`
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    & + div {
      margin-top: 2rem;
    }
  }
`;

const Label = styled.label`
  color: var(--white-900);
  font-size: 1.25rem;
  letter-spacing: 0.02rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
  filter: drop-shadow(0px 4px 4px var(--black-200));
`;

const Span = styled.span`
  color: var(--white-900);
  font-size: 0.7rem;
  letter-spacing: 0.02rem;
  margin: -1.25rem 0 1.25rem;
  filter: drop-shadow(0px 4px 4px var(--black-200));
`;

type CycleType = 'work' | 'break' | 'long-break';

interface RangeInputProps {
  dataType: CycleType;
  isVisible?: boolean;
}

const getInputThumbColor = (dataType: CycleType) => {
  if (dataType === 'work') {
    return 'var(--orange-900)';
  } else if (dataType === 'break') {
    return 'var(--green-500)';
  } else  if (dataType === 'long-break'){
    return 'var(--green-600)';
  }
}

const RangeInput = styled.input<RangeInputProps>`
  width: 100%;
  border-radius: 30px;
  margin-top: ${({ dataType }) => dataType === 'long-break' ? '1.5rem' : '0'};
  transition: all 0.5s ease;
  -webkit-appearance: none;

  ${({ dataType, isVisible }) => {
    if (dataType === 'long-break') {
      if (isVisible) {
        return css`
          opacity: 1;
          transform: translateY(0);
        `;
      } else {
        return css`
          opacity: 0;
          transform: translateY(-30px);
        `;
      }
    }
  }}

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    background: var(--white-900);
    border: 0;
    border-radius: 30px;
    box-shadow: inset 0px 4px 4px var(--black-200);
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    width: 30px;
    height: 30px;
    background: ${({ dataType }) => getInputThumbColor(dataType)};
    border: 0;
    border-radius: 50%;
    box-shadow: 0px 4px 4px var(--black-200);
    margin-top: -12px;
    cursor: pointer;
    -webkit-appearance: none;
  }
`;

export {
  Wrapper,
  CloseButton,
  Content,
  Label,
  Span,
  RangeInput
};