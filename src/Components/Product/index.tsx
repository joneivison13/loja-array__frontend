import * as React from 'react';
import { Container } from './styles';

import Cart from '../../assets/img/cartgray.svg'

export interface IProductProps {
  product:Product;
}

interface Product{
  image:string[],
  name:string;
  id:number;
  preco:string;
}

export function Product (props: IProductProps) {
  const {product} = props
  return (
    <Container onClick={() => alert('Página de produto em produção')}>
      <img src={product.image[0]} alt="" className="productimage" />
      <h2 className="titleproduct">{product.name.toLocaleLowerCase()}</h2>
      <p className="priceproduct">R$<span>{product.preco}</span></p>
      <img className="cart" src={Cart} alt="" />
    </Container>
  );
}
