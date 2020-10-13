import * as React from "react";
import { Container } from "./styles";

import Cart from "../../assets/img/cartgray.svg";
import { useHistory } from "react-router-dom";

export interface IProductProps {
  product: Product;
}

interface Product {
  image: string[];
  name: string;
  id: number;
  preco: string;
}

function Product(props: IProductProps) {
  const history = useHistory();
  const { product } = props;
  return (
    <Container onClick={() => history.push(`/products/${product.id}`, {product:product})}>
       <img draggable="false" src={product.image[0]} alt="" className="productimage" />
      <h2 className="titleproduct">{product.name.toLocaleLowerCase()}</h2>
      <p className="priceproduct">
        R$<span>{product.preco}</span>
      </p>
       <img draggable="false" className="cart" src={Cart} alt="" />
    </Container>
  );
}

export default Product;