import React, {useEffect, useState} from "react";
import Header from "../../Components/Header";
import { Container } from "./styles";

import BgImage from "../../assets/img/bghome.svg";
import Product from "../../Components/Product";

import short01 from "../../assets/products-assets/short01.jpeg";
import short02 from "../../assets/products-assets/short02.jpeg";
import short03 from "../../assets/products-assets/short03.jpeg";
import short04 from "../../assets/products-assets/short04.webp";
import biquini01 from "../../assets/products-assets/biquini01.jpeg";
import biquini02 from "../../assets/products-assets/biquini02.jpeg";
import biquini03 from "../../assets/products-assets/biquini03.jpeg";
import biquini04 from "../../assets/products-assets/biquini04.webp";
import api from "../../services/api";
import { AxiosResponse } from "axios";

interface IHomeProps {
  location: any;
}

interface IProduct {
    idproduct: number;
    product_name: string;
    product_price: number;
    product_amount: number;
    user_iduser: number;
    idphoto: number;
    products_photos_dir: string;
    products_idproduct: number;
}

interface ProductsApi{
  product?:IProduct[];
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [productsApi, setProducts] = useState<ProductsApi>();

  useEffect(() => {
    api.get("/product").then(res => {
      // alert('aaa')
        setProducts(res.data);
        console.log(res)
      })
  }, []);
  const location = props.location.state ? props.location.state : null;
  return (
    <>
      <Header userphoto={location} />
      <Container>
        <img draggable="false" src={BgImage} alt="" className="bg" />
        <div className="products">
          {/* {productsApi?.products.map((product) => {
            return <Product product={product} key={product.idproduct} />;
          })} */}
          {productsApi?.product?.map((product) => {
            return <Product product={product} key={product.idproduct} />;
          })}
        </div>
      </Container>
    </>
  );
};

export default Home;
