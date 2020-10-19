import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";

import Header from "../../Components/Header";

import SpinnerLoading from "../../assets/gif/loading-spinner.gif";
import Arrowleft from "../../assets/img/arrowleftdash.svg";
import Arrowright from "../../assets/img/arrowrightdash.svg";

import api from "../../services/api";

interface ProductCart {
  idproduct: number;
  product_about: string;
  product_amount: number;
  product_name: string;
  product_price: number;
  products_has_user_date: string;
  products_has_user_id: number;
  products_has_user_qtd: number;
  products_idproducts: number;
  user_iduser: number;
  products_photos_dir: string;
  user_name: string;
  user_lastname: string;
}

interface Icart {
  message: ProductCart[];
}

const Cart = () => {
  const history = useHistory();

  const [cartData, setCartData] = useState<Icart>({ message: [] });
  const [loading, setLoading] = useState(true);

  const env: string = String(process.env.REACT_APP_API_URL);
  const urlApi = env[env.length - 1] === "/" ? env : env + "/";

  const callApi = () => {
    api.get("/cart").then((res) => {
      setCartData(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (!!!localStorage.getItem("@TOKEN") && !!!localStorage.getItem("@USER")) {
      history.push("/login", { message: "Faça seu login primeiro." });
    } else {
      callApi();
    }
  }, []);
  const sizeOfproducts = cartData.message?.length;

  return (
    <>
      <Header />
      <Container>
        {loading && (
          <div className="loading">
            <img src={SpinnerLoading} alt="" />
            <h1>Carregando...</h1>
          </div>
        )}

        {sizeOfproducts ? (
          <>
            <div className="action">
              <button
                onClick={() => {
                  cartData.message.map((item) => {
                    api
                      .delete(
                        `/cart?products_idproducts=${item.products_idproducts}&qtd=${item.products_has_user_qtd}`
                      )
                      .then(() => {
                        alert("Venda finalizada com sucesso!");
                        callApi();
                      });
                  });
                }}
              >
                Finalizar compra
              </button>
              <button
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Continuar comprando
              </button>
            </div>

            <hr className="divider" />
            <div className="products">
              {cartData.message.map((product) => {
                return (
                  <>
                    <div className="product_cart">
                      <div className="info">
                        <img src={env + product.products_photos_dir} alt="" />
                        <div className="details">
                          <h1>{product.product_name}</h1>
                          <h5>
                            Vedido por:{" "}
                            {product.user_name + " " + product.user_lastname}
                          </h5>
                          <h4>
                            Valor total: R${product.product_price.toFixed(2)}
                          </h4>
                        </div>
                      </div>
                      <h4 className="qtd">
                        Quantidade de produtos:
                        <button
                          onClick={() => {
                            api
                              .delete(
                                `/cart?products_idproducts=${product.products_idproducts}&qtd=1`
                              )
                              .then(() => {
                                callApi();
                              });
                          }}
                        >
                          <img src={Arrowleft} alt="" />
                        </button>
                        <p>{product.products_has_user_qtd}</p>
                        <button
                          onClick={() => {
                            api
                              .post("/cart", {
                                products_idproducts:
                                  product.products_idproducts,
                              })
                              .then(() => {
                                callApi();
                              });
                          }}
                        >
                          <img src={Arrowright} alt="" />
                        </button>
                      </h4>
                      <button className="finality-product" onClick={() => {
                        api
                        .delete(
                          `/cart?products_idproducts=${product.products_idproducts}&qtd=${product.products_has_user_qtd}`
                        )
                        .then(() => {
                          alert(`${product.product_name} vendo com sucesso!`);
                          callApi();
                        });
                      }}>
                        Finalizar compra deste produto
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        ) : (
          <div className="loading">
            <h1>Carrinho vazio</h1>
            <h3>
              clique <a href="/">aqui</a> para voltar a página inicial.
            </h3>
          </div>
        )}
      </Container>
    </>
  );
};

export default Cart;
