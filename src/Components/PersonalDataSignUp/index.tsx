import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "../../services/api";
import { Container } from "./styles";

const PersonalDataSignUp: React.FC = () => {
  const history = useHistory();

  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [Phone, setPhone] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    history.push('/signup/address-data', {
        Name, LastName, Email, CPF, Phone
    })
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
      <h1>Faça seu Cadastro</h1>
      <h2>Preencha seus dados pessoais</h2>

      <form onSubmit={handleSubmit}>
        <div className="label-float">
          <input
            value={Name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder=" "
            autoComplete="text"required
          />
          <label>Nome</label>
        </div>

        <div className="label-float">
          <input
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder=" "required
          />
          <label>Sobrenome</label>
        </div>

        <div className="label-float">
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder=" "required
          />
          <label>Email</label>
        </div>

        <div className="label-float">
          <input
            value={CPF}
            onChange={(e) => setCPF(e.target.value)}
            type="text"
            placeholder=" "required
          />
          <label>CPF</label>
        </div>

        <div className="label-float">
          <input
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder=" "required
          />
          <label>Telefone</label>
        </div>

        <button type="submit">Prosseguir</button>
      </form>
    </Container>
  );
};

export default PersonalDataSignUp;
