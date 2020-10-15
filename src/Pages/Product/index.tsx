import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Container } from "./styles";

import ArrowLeft from "../../assets/img/arrowleft.svg";
import ArrowRight from "../../assets/img/arrowright.svg";
import Search from "../../assets/img/search.svg";
import Cart from "../../assets/img/cart.svg";
import { useLocation } from "react-router-dom";
import api from "../../services/api";
// import Product from "../../Components/Product";

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
  const location = useLocation();
  let idProduct = window.location.pathname.split("/")[2];

  useEffect(() => {
    api.get(`/product/${idProduct}`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  const product = productApi?.product

  const productImage = String(process.env.REACT_APP_API_URL) + product?.products_photos_dir
  console.log(productImage)
  return (
    <>
      <Header />
      <Container>
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
            R$<span>{product?.product_price}</span>
          </p>
          <div className="cep">
            <p>
              Digite seu CEP para calcularmos a data de entrega e custo do seu
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
            <button type="button" className="pay">
              Comprar
            </button>
            <button className="cart">
              <img src={Cart} alt="" />
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
