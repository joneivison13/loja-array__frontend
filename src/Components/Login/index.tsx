import * as React from "react";
import { Container } from "./styles";

const LoginComponent: React.FC = () => {
  return (
    <Container>
      <h1>Faça seu Login</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = "/";
        }}
      >
        <div className="label-float">
          <input type="text" placeholder=" " />
          <label>E-Mail</label>
        </div>

        <div className="label-float">
          <input type="password" placeholder=" " />
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
