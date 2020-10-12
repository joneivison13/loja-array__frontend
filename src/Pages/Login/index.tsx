import * as React from 'react';
import LogoImage from '../../assets/img/logo.svg';
import WavesImage from '../../assets/img/waves.svg';
import LoginComponent from '../../Components/Login';
import { Container } from './styles';

const Login:React.FC = () => {
  return(
    <Container>
      <img src={LogoImage} alt="" draggable="false" className="logo"/>
      <LoginComponent/>
      <img src={WavesImage} alt="" draggable="false" className="background-waves"/>
    </Container>
  )
}

export default Login;