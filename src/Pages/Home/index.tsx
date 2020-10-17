import React, {useEffect, useState} from "react";
import Header from "../../Components/Header";
import { Container } from "./styles";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import BgImage from "../../assets/img/bghome.svg";
import Product from "../../Components/Product";
import api from "../../services/api";
import Footer from "../../Components/Footer";
import { useLocation } from "react-router";

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

interface LocationErrorAndSuccess {
  state?:{
    msgSuccess?:string;
    msgError?:string;
  }
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [productsApi, setProducts] = useState<ProductsApi>();
  const locationHistory:LocationErrorAndSuccess | null = useLocation()

  useEffect(() => {
    api.get("/product").then(res => {
      // alert('aaa')
        setProducts(res.data);
      })
    if(locationHistory.state?.msgSuccess){
      toast.success(locationHistory.state?.msgSuccess)
    }else if(locationHistory.state?.msgError){
      toast.error(locationHistory.state?.msgError)
    }
  }, []);
  const location = props.location.state ? props.location.state : null;
  return (
    <>
      <Header userphoto={location} />
      <Container>
        <img draggable="false" src={BgImage} alt="" className="bg" />
        <div className="products">
          {productsApi?.product?.map((product) => {
            return <Product product={product} key={product.idproduct} />;
          })}
        </div>
        <ToastContainer/>
      </Container>
      <Footer/>
    </>
  );
};

export default Home;
