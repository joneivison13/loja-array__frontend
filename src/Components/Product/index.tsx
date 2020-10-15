import * as React from "react";
import { Container } from "./styles";

import Cart from "../../assets/img/cartgray.svg";
import { useHistory } from "react-router-dom";

export interface IProductProps {
  product: Product;
}

interface Product {
  idproduct: number;
  product_name: string;
  product_price: number;
  product_amount: number;
  user_iduser: number;
  idphoto: number;
  products_photos_dir: string;
  products_idproduct: number;
}

function Product(props: IProductProps) {
  const history = useHistory();
  const { product } = props;
  return (
    <Container onClick={() => history.push(`/products/${product.idproduct}`)}>
       <img draggable="false" src={process.env.REACT_APP_API_URL + product.products_photos_dir} alt="" className="productimage" />
      <h2 className="titleproduct">{product.product_name.toLocaleLowerCase()}</h2>
      <p className="priceproduct">
        R$<span>{product.product_price}</span>
      </p>
       <img draggable="false" className="cart" src={Cart} alt="" />
    </Container>
  );
}

export default Product;