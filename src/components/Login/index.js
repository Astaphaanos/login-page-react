import React, { useState } from "react";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { validacao } from '../Validacao/validacao';
import "./Login.css";

const Login = () => {
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
    <section className="form">

      <div className="form-login-welcome">
        <h1>Seja Bem-Vindo ao CloudSync</h1>
        <p>
          Conecte-se e experimente a sincronização em nuvem sem complicações
        </p>
        <img src="/images/cloud.png" alt="cloud-image" />
      </div>

      <div className="form-container">

        <form onSubmit={handleSubmit}> 
          <div className="login-form-container">
            <span>Entrar</span>
            <h2>Faça seu login agora</h2>
            <input 
            type="email" 
            placeholder="E-mail"
            name="email" 
            className="login-input" 
            value={values.email}
            onChange={handleChange}
            />
            {erros.email && <p className="erro-mensagem">{erros.email}</p>}
          </div>

          <div className="senha-form-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              className="login-input"
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

          <div className="options">
            <label>
              <input type="checkbox" /> Manter Conectado
            </label>
            <a href="#recovery" className="recovery-link">
              Recuperar Senha
            </a>
          </div>

          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>

        <div className="divisor"> Ou faça login com</div>

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

export default Login;
