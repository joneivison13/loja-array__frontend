import React, { useState, useRef } from "react";

import { Container, SubHeader } from "./styles";
import Logo from "../../assets/img/logoapp.svg";
import Search from "../../assets/img/search.svg";
import Cart from "../../assets/img/cart.svg";
import Location from "../../assets/img/location.svg";
import Navbutton from "../../assets/img/navbutton.svg";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const [mostSearch, setMostSearch] = useState(false);
  const [leftState, setLeftState] = useState(true)

  function mostSearchInput() {
    setMostSearch(!mostSearch);
    if (null !== inputSearchRef.current) {
      inputSearchRef.current?.focus();
    }
  }
  return (
    <>
      <Container>
        <div className="search-input" style={{ top: mostSearch ? 0 : -100 }}>
          <form>
            <input
              placeholder="Faça aqui sua pesquisa"
              type="text"
              ref={inputSearchRef}
              name=""
              id=""
              autoFocus
              onBlur={() => setMostSearch(false)}
            />
            <button className="button-search" type="submit">
              <img src={Search} alt="" draggable="false" />
            </button>
          </form>
        </div>
        <span className="thumbnail">
          <img src={Logo} alt="" className="logo"  draggable="false"/>
          <img src={Navbutton} alt="" className="navbutton" draggable="false" onClick={ () => {
            setLeftState(!leftState)
          }}/>
        </span>

        <span className="items">
          <button className="login" onClick={() => {
            window.location.href = '/login'
          }}>Faça Login ou Cadastre-se</button>
          <div className="search" onClick={() => mostSearchInput()}>
            Search
            <button className="button-search">
              <img src={Search} alt="" draggable="false" />
            </button>
          </div>

          <img src={Cart} alt="" draggable="false" className="cart" />
        </span>
      </Container>

      <SubHeader left={leftState}>
        <div>
          <img src={Location} alt="" />
          <p>
            Olá <br />
            <strong>Selecione o seu Endereço</strong>
          </p>
        </div>
        <p>Mais Vendidos</p>
        <p>Ofertas do  Dia</p>
        <p>Atendimento ao Cliente</p>
        
        <span className="items">
          <div className="search" onClick={() => mostSearchInput()}>
            Search
            <button className="button-search">
              <img src={Search} alt="" draggable="false" />
            </button>
          </div>

          <img src={Cart} alt="" draggable="false" className="cart" />
        </span>
      </SubHeader>
    </>
  );
};

export default Header;
