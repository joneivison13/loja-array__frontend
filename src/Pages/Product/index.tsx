import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Container } from "./styles";


import Cart from "../../assets/img/cart.svg";
import Back from '../../assets/img/back.svg'

import api from "../../services/api";
import { useHistory } from "react-router-dom";

export interface IProductProps {}

interface IProduct {
  idproduct: number;
  product_name: string;
  product_price: number;
  product_amount: number;
  user_iduser: number;
  idphoto: number;
  products_photos_dir: string;
  products_idproduct: number;
  product_about:string;
}

interface ProductsApi {
  id: number;
  product?: IProduct;
}

export default function Product(props: IProductProps) {
  const [productApi, setProduct] = useState<ProductsApi>();
  let idProduct = window.location.pathname.split("/")[2];

  const history = useHistory()

  useEffect(() => {
    api.get(`/product/${idProduct}`).then((res) => {
      setProduct(res.data);
    });
  }, [idProduct]);

  const product = productApi?.product

  const productImage = String(process.env.REACT_APP_API_URL) + product?.products_photos_dir
  return (
    <>
      <Header />
      <Container>
        <div className="back">
          <img src={Back} onClick={() => {
            window.location.href = '/'
          }} alt=""/>
        </div>
        <div className="container-caroussel">
          <div className="caroussel">
            <img
              draggable="false"
              src={productImage}
              alt=""
            />
          </div>
        </div>

        <div className="info">
          <h3 className="name">{product?.product_name}</h3>
          <p>{product?.product_about}</p>
          <p className="price">
            R$<span>{product?.product_price.toFixed(2)}</span>
          </p>
          

          <div className="finaly">
            <button type="button" className="pay" onClick={() => alert('comprado')}>
              Comprar
            </button>
            <button className="cart" onClick={() => {
              api.post('/cart', {products_idproducts:idProduct}).then(() => {
                window.location.href = '/cart'
              }).catch(() => {
                history.push('/cart')
              })
            }}>
              <img src={Cart} alt="" /> Adicionar ao carrinho
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
