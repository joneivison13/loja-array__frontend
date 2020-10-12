import * as React from "react";
import Header from "../../Components/Header";
import { Container } from "./styles";

import BgImage from "../../assets/img/bghome.svg";
import { Product } from "../../Components/Product";

import short01 from '../../assets/products-assets/short01.jpeg'
import short02 from '../../assets/products-assets/short02.jpeg'
import short03 from '../../assets/products-assets/short03.jpeg'
import short04 from '../../assets/products-assets/short04.webp'
import biquini01 from '../../assets/products-assets/biquini01.jpeg'
import biquini02 from '../../assets/products-assets/biquini02.jpeg'
import biquini03 from '../../assets/products-assets/biquini03.jpeg'
import biquini04 from '../../assets/products-assets/biquini04.webp'


interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const products = [
    {
      image:[short01, short02, short03, short04],
      name:'Short azul masculino 01',
      id:1,
      preco:'300.50'
    },
    {
      image:[short02, short03,short04, short01],
      name:'Short azul masculino 02',
      id:2,
      preco:'300.50'
    },
    {
      image:[short03,short04, short01, short02],
      name:'Short azul masculino 03',
      id:3,
      preco:'300.50'
    },

    {
      image:[short04, short03, short01, short02],
      name:'Short azul masculino 03',
      id:3,
      preco:'300.50'
    },
    
    {
      image:[biquini01, biquini02, biquini03,biquini04],
      name:'biquini azul 01',
      id:4,
      preco:'300.50'
    },
    {
      image:[biquini02, biquini03,biquini04, biquini01],
      name:'biquini azul 02',
      id:5,
      preco:'300.50'
    },
    {
      image:[biquini03,biquini04, biquini01, biquini02],
      name:'biquini azul 03',
      id:6,
      preco:'300.50'
    },
    {
      image:[biquini04, biquini01, biquini02,biquini03],
      name:'biquini azul 03',
      id:6,
      preco:'300.50'
    },
  ]
  return (
    <>
      <Header />
      <Container>
        <img src={BgImage} alt="" className="bg" draggable="false" />
        <div className="products">
          {products.map(product => {
            return (
              <Product product={product} key={product.id}/>
            )
          })}
        </div>
      </Container>
    </>
  );
};

export default Home;
