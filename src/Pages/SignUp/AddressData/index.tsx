import * as React from 'react';

import LogoImage from '../../../assets/img/logo.svg';
import WavesImage from '../../../assets/img/waves.svg';
import { Container } from './styles';
import AddressDataSignUp from '../../../Components/AddressDataSignup';
import Back from '../../../assets/img/back.svg'

interface Props{}

const AddressData = (props:Props) => {
  return(
    <Container>
      <div className="back">
          <img src={Back} onClick={() => {
            window.location.href = '/'
          }} alt=""/>
        </div>
       <img draggable="false" src={LogoImage} alt=""   className="logo"/>
      <AddressDataSignUp/>
       <img draggable="false" src={WavesImage} alt=""   className="background-waves"/>
    </Container>
  )
}

export default AddressData;