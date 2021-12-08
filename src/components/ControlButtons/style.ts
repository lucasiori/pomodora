import styled, { css } from 'styled-components';

const baseButtonStyles = (size: string, backgroundColor: string) => css`
  width: ${size};
  height: ${size};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${`var(${backgroundColor})`};
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 4px var(--black-200);
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  button + button {
    margin-left: 1.5rem;
  }
`;

const ResetButton = styled.button`
  ${baseButtonStyles('4.375rem', '--orange-900')};
`;

const StartButton = styled.button`
  ${baseButtonStyles('5.625rem', '--green-500')};
`;

const PauseButton = styled.button`
  ${baseButtonStyles('5.625rem', '--orange-800')};
`;

const SettingsButton = styled.button`
  ${baseButtonStyles('4.375rem', '--yellow-700')};
`;

export {
  Wrapper,
  ResetButton,
  StartButton,
  PauseButton,
  SettingsButton
};