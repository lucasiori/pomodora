import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    var(--orange-800) 0%,
    var(--yellow-700) 54.69%,
    var(--green-250) 100%
  );
  box-shadow: 0px 4px 4px var(--black-200);
  overflow: hidden;
`;

export { Wrapper };