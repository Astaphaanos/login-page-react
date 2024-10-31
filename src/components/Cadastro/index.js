import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import { validacao } from '../Validacao/validacao';
import "./Cadastro.css";

const Cadastro = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [values, setValues] = useState({
    usuario: '',
    email: '',
    senha: '',
  });

  const [erros, setErros] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validacaoErros = validacao(values);
    setErros(validacaoErros);

    if (Object.keys(validacaoErros).length === 0) {
      console.log('Login realizado com sucesso', values);
      setValues({
        usuario: '',
        email: '',
        senha: '',
      });
    }
  };

  return (
    <section className="form-cadastro">
      <div className="form-cadastro-welcome">
        <h1>Cadastre-se na nossa plataforma</h1>
        <p>Uma nova jornada de produção está prestes a começar!</p>
        <img src="images/data.png" alt="data" />
      </div>

      <div className="form-container-cadastro">
        
        <form onSubmit={handleSubmit}>
          <span>Cadastre-se</span>
          <h2>Crie uma conta gratuitamente</h2>
          
          <div className="user-cadastro-container">
            <input type="text" 
            placeholder="Usuário" 
            className="login-input-cadastro" 
            name="usuario"
            value={values.usuario}
            onChange={handleChange}
            />
            {erros.usuario && <p className="erro-mensagem">{erros.usuario}</p>}
          </div>

          <div className="login-cadastro-container">
            <input 
            type="email" 
            placeholder="E-mail" 
            name="email"
            className="login-input-cadastro" 
            value={values.email}
            onChange={handleChange}
            />
            {erros.email && <p className="erro-mensagem">{erros.email}</p>}
          </div>

          <div className="senha-cadastro-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite uma senha de 8 caracteres ou mais"
              className="login-input-cadastro"
              name="senha"
              value={values.senha}
              onChange={handleChange}
            />
            {erros.senha && <p className="erro-mensagem">{erros.senha}</p>}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-password"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <button type="submit" className="btn-login">
            Cadastrar
          </button>
        </form>

        <div className="options-cadastro">
          <label>
            <input type="checkbox" /> Concordo com os Termos e Condições
          </label>
        </div>

        <div className="divisor"> Ou cadastre-se com</div>

        <div className="social-login">
          <button className="social-btn google">
            <FaGoogle />
          </button>

          <button className="social-btn apple">
            <FaApple />
          </button>

          <button className="social-btn facebook">
            <FaFacebookF />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Cadastro;
