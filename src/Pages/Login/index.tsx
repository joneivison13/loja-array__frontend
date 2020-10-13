import * as React from 'react';
import LogoImage from '../../assets/img/logo.svg';
import WavesImage from '../../assets/img/waves.svg';
import LoginComponent from '../../Components/Login';
import { Container } from './styles';

const Login:React.FC = () => {
  return(
    <Container>
       <img draggable="false" src={LogoImage} alt=""   className="logo"/>
      <LoginComponent/>
       <img draggable="false" src={WavesImage} alt=""   className="background-waves"/>
    </Container>
  )
}

export default Login;