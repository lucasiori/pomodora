import styled from 'styled-components';

interface WrapperProps {
  isActive: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: 75px;
  height: 42px;
  display: flex;
  align-items: center;
  background-color: ${({ isActive }) => isActive ? 'var(--white-900)' : 'var(--black-200)'};
  border-radius: 30px;
  box-shadow: inset 0px 4px 4px var(--black-200);
  padding: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease;

  > div {
    background-color: ${({ isActive }) => isActive ? 'var(--green-150)' : 'var(--orange-600)'};
    left: ${({ isActive }) => isActive ? 'calc(75px - 32px - 0.25rem)' : '0.25rem'};
  }
`;

const Highlighter = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: 0px 4px 4px var(--black-200);
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
`;

export {
  Wrapper,
  Highlighter
};