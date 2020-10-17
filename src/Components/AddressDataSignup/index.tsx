import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "../../services/api";
import { Container } from "./styles";

const PersonalDataSignUp: React.FC = (props) => {
  const history = useHistory();
  const location:any = useLocation();

  const [Cep, setCep] = useState("");
  const [Bairro, setBairro] = useState("");
  const [Cidade, setCidade] = useState("");
  const [Estado, setEstado] = useState("");
  const [Phone, setPhone] = useState("");
  const [Senha, setSenha] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    api.post("/user", {
      user_name:location.state.Name,
      user_lastname:location.state.LastName,
      user_cpf:location.state.CPF,
      user_email:location.state.Email,
      user_pass:Senha,
      user_whatsapp:location.state.Phone,
      user_city:Cidade,
      user_state:Estado,
      user_district:Bairro,
      user_postalcode:Cep,
    }).then(res => {
      history.push('/login', {
        msgSuccess:'Cadastro Feito com Sucesso.\n Agora Efetue seu Login.'
      })
    }).catch(res => {
      history.push('/', {
        msgError:'Aconteceu um erro no seu cadastro, por favor, retorne mais tarde.'
      })
    })
  };
  return (
    <Container>
      <h1>Faça seu Cadastro</h1>
      <h2>Preencha seu Endereço</h2>

      <form onSubmit={handleSubmit}>
        <div className="label-float">
          <input
            value={Cep}
            onChange={(e) => setCep(e.target.value)}
            type="text"
            placeholder=" "
            autoComplete="text"
            required
          />
          <label>Cep</label>
        </div>

        <div className="label-float">
          <input
            value={Bairro}
            onChange={(e) => setBairro(e.target.value)}
            type="text"
            placeholder=" "
            required
          />
          <label>Bairro</label>
        </div>

        <div className="label-float">
          <input
            value={Cidade}
            onChange={(e) => setCidade(e.target.value)}
            type="text"
            placeholder=" "
            required
          />
          <label>Cidade</label>
        </div>

        <div className="label-float">
          <input
            value={Estado}
            onChange={(e) => setEstado(e.target.value)}
            type="text"
            placeholder=" "
            required
          />
          <label>Estado</label>
        </div>

        <div className="label-float">
          <input
            value={Senha}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            placeholder=" "
            required
          />
          <label>Senha</label>
        </div>

        <button type="submit">Prosseguir</button>
      </form>
    </Container>
  );
};

export default PersonalDataSignUp;
