import React, {useEffect} from 'react';
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import LogoImage from '../../../assets/img/logo.svg';
import WavesImage from '../../../assets/img/waves.svg';
import { Container } from './styles';
import PersonalDataSignUp from '../../../Components/PersonalDataSignUp';
import { useLocation } from 'react-router';

import Back from '../../../assets/img/back.svg'

interface Props{}

const PersonalData = (props:Props) => {
  const locationHistory:any = useLocation()
  useEffect(() => {
    if(locationHistory.state?.msgError.length){
      toast.error(locationHistory.state.msgError)
    }
  }, [])
  return(
    <Container>
      <div className="back">
          <img src={Back} onClick={() => {
            window.location.href = '/'
          }} alt=""/>
        </div>
       <img draggable="false" src={LogoImage} alt=""   className="logo"/>
      <PersonalDataSignUp/>
       <img draggable="false" src={WavesImage} alt=""   className="background-waves"/>
       <ToastContainer/>
    </Container>
  )
}

export default PersonalData;