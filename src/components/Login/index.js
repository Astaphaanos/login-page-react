import React, { useState } from 'react';
import { FaGoogle, FaApple, FaFacebookF } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './Login.css';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    return (
        <section className='form'>

            <div className="form-login-welcome">
                <h1>Seja Bem-Vindo ao CloudSync</h1>
                <p>Conecte-se e experimente a sincronização em nuvem sem complicações</p>
                <img src="/images/cloud.png" alt="cloud-image"/> 
            </div>

            <div className='form-container'>

                <div className="login-form-container">
                    <span>Entrar</span>
                    <h2>Faça seu login agora</h2>
                    <input type="email" placeholder="E-mail" className="login-input"/>
                </div>

                <div className="senha-form-container">
                    <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="Digite uma senha de 8 caracteres ou mais" 
                    className="login-input"/>
                    <span onClick={() => setShowPassword(!showPassword)} className='toggle-password'>
                        {showPassword ? <FiEyeOff/> : <FiEye/>}
                    </span>
                </div>

                <div className="options">
                    <label>
                        <input type='checkbox'/> Manter Conectado
                    </label>
                    <a href="#recovery" className="recovery-link">Recuperar Senha</a>
                </div>

                <button type='submit' className='btn-login'>Entrar</button>

                <div className='divisor'> Ou faça login com</div>

                <div className='social-login'>
                    <button className='social-btn google'><FaGoogle/></button>
                    <button className='social-btn apple'><FaApple/></button>
                    <button className='social-btn facebook'><FaFacebookF/></button>
                </div>

            </div>
        </section>
    );
}

export default Login;