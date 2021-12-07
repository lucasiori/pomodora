import { NextPage } from 'next';
import Logo from '../components/Logo';
import GlobalStyle from '../style/global';
import { Wrapper } from '../style/pages/home';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Logo />
    </Wrapper>
  );
};

export default Home;
