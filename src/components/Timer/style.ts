import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimerValue = styled.strong`
  color: var(--white-900);
  font-size: 7rem;
  font-weight: 400;
  filter: drop-shadow(0px 4px 4px var(--black-200));
`;

export {
  Wrapper,
  TimerValue
};