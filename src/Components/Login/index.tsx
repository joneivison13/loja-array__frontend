import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "../../services/api";
import { Container } from "./styles";

const LoginComponent: React.FC = () => {
  const history = useHistory();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    api
      .post("/login", { user_email: user, user_pass: password })
      .then((res: any) => {
        localStorage.setItem("@TOKEN", res.data.token);
        history.push("/", { user: res.data.user });
        console.log('res',  res.data.user )
      })
      .catch(() =>
        toast.error("Usuário/Senha incorretos", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  };
  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <h1>Faça seu Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="label-float">
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder=" "
            autoComplete="email"required
          />
          <label>E-Mail</label>
        </div>

        <div className="label-float">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder=" "required
          />
          <label>Senha</label>
        </div>

        <button type="submit">Entrar</button>
      </form>

      <div className="actions">
        <small>Ainda não tenho conta</small>
        <small>Esqueci minha senha</small>
      </div>
    </Container>
  );
};

export default LoginComponent;
