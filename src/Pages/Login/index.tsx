import * as React from 'react';
import { ToastContainer, toast } from "react-toastify";

import LogoImage from '../../assets/img/logo.svg';
import WavesImage from '../../assets/img/waves.svg';
import LoginComponent from '../../Components/Login';
import { Container } from './styles';
import "react-toastify/dist/ReactToastify.css";

interface Props{
  location?:{
    state?:{
      message?:string;
    }
  }
}

const Login = (props:Props) => {
  if(props.location?.state?.message){
    toast.info(props.location.state.message,{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  return(
    <Container>
       <img draggable="false" src={LogoImage} alt=""   className="logo"/>
      <LoginComponent/>
       <img draggable="false" src={WavesImage} alt=""   className="background-waves"/>
    </Container>
  )
}

export default Login;