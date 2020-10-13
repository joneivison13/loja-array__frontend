import React, { useState, useRef } from "react";

import { Container, SubHeader } from "./styles";
import Logo from "../../assets/img/logoapp.svg";
import Search from "../../assets/img/search.svg";
import Cart from "../../assets/img/cart.svg";
import Location from "../../assets/img/location.svg";
import Navbutton from "../../assets/img/navbutton.svg";

interface IHeaderProps {
  userphoto?:any;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const [mostSearch, setMostSearch] = useState(false);
  const [leftState, setLeftState] = useState(true);

  function mostSearchInput() {
    setMostSearch(!mostSearch);
    if (null !== inputSearchRef.current) {
      inputSearchRef.current?.focus();
    }
  }

  console.log(props)
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
              <img draggable="false" src={Search} alt="" />
            </button>
          </form>
        </div>
        <span className="thumbnail">
          <img draggable="false" src={Logo} alt="" className="logo" />
          <img
            draggable="false"
            src={Navbutton}
            alt=""
            className="navbutton"
            onClick={() => {
              setLeftState(!leftState);
            }}
          />
        </span>

        <span className="items">
          {!!localStorage.getItem("@TOKEN") ? (
            <div className="profile">
              <img width='50px' className="profile" src={`http://localhost:3333/static/img/${props.userphoto.user.user_photo}`} alt=""/>
            </div>
          ) : (
            <button
              className="login"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Faça Login ou Cadastre-se
            </button>
          )}
          <div className="search" onClick={() => mostSearchInput()}>
            Search
            <button className="button-search">
              <img draggable="false" src={Search} alt="" />
            </button>
          </div>

          <img
            draggable="false"
            src={Cart}
            onClick={() => alert("Página de carrinho em produção")}
            alt=""
            className="cart"
          />
        </span>
      </Container>

      <SubHeader left={leftState}>
        <div>
          <img draggable="false" src={Location} alt="" />
          <p>
            Olá <br />
            <strong>Selecione o seu Endereço</strong>
          </p>
        </div>
        <p>Mais Vendidos</p>
        <p>Ofertas do Dia</p>
        <p>Atendimento ao Cliente</p>

        <span className="items">
          <div className="search" onClick={() => mostSearchInput()}>
            Search
            <button className="button-search">
              <img draggable="false" src={Search} alt="" />
            </button>
          </div>

          <img draggable="false" src={Cart} alt="" className="cart" />
        </span>
      </SubHeader>
    </>
  );
};

export default Header;
