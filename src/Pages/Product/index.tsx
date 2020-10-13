import React, { useState } from "react";
import Header from "../../Components/Header";
import { Container } from "./styles";

import ArrowLeft from "../../assets/img/arrowleft.svg";
import ArrowRight from "../../assets/img/arrowright.svg";
import Search from "../../assets/img/search.svg";
import Cart from "../../assets/img/cart.svg";
// import Product from "../../Components/Product";

export interface IProductProps {
  product: Product;
  location:{
    state:Product;
  }
}

interface Product {
  image: string[];
  name: string;
  id: number;
  preco: string;
}

export default function Product(props: IProductProps) {
  const [indexCarrousel, setIndexCarrousel] = useState(0);
  const product = props.location.state;

  console.log(product)

  const mouseOutSetCarroussel = (index: number) => {
    setIndexCarrousel(index);
  };
  return (
    <>
      <Header />
      <Container>
        <div className="container-caroussel">
          <div className="caroussel">
            <button
              onClick={() =>
                setIndexCarrousel(indexCarrousel === 0 ? 0 : indexCarrousel - 1)
              }
            >
              <img draggable="false" src={ArrowLeft} alt="" />
            </button>
            <img draggable="false" src={product.image[indexCarrousel]} alt="" />
            <button
              onClick={() =>
                setIndexCarrousel(
                  indexCarrousel === product.image.length - 1
                    ? indexCarrousel
                    : indexCarrousel + 1
                )
              }
            >
              <img draggable="false" src={ArrowRight} alt="" />
            </button>
          </div>

          <div className="images">
            {product.image.map((image, index) => {
              return (
                <img
                  draggable="false"
                  src={image}
                  width="80px"
                  alt=""
                  onMouseOver={() => mouseOutSetCarroussel(index)}
                />
              );
            })}
          </div>
        </div>

        <div className="info">
          <h3 className="name">{product.name}</h3>
          <p className="price">
            R$<span>{product.preco}</span>
          </p>
          <div className="cep">
            <p>
              Digite seu CEP para calcularmos a data de entrga e custo do seu
              frete
            </p>
            <form>
              <input type="text" />
              <button className="button-search" type="submit">
                <img draggable="false" src={Search} alt="" />
              </button>
            </form>
          </div>

          <div className="finaly">
            <button type="button" className="pay">Comprar</button>
            <button className="cart">
              <img src={Cart} alt="" />
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
