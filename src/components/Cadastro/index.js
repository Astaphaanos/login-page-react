import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaGoogle, FaApple, FaFacebookF } from 'react-icons/fa';
import './Cadastro.css';

const Cadastro = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className='form'>

            <div className='form-cadastro-welcome'>
                <h1>Cadastre-se na nossa plataforma</h1>
                <p>Uma nova jornada de produção está prestes a começar!</p>
                <img src='images/data.png' alt='data'/>
            </div>
            
            <div className='form-container'>
                <span>Cadastre-se</span>
                <h2>Crie uma conta gratuitamente</h2>

                <div className='user-form-container'>
                    <input type='text' placeholder='Usuário' className='login-input'/>
                </div>

                <div className="login-form-container">
                    <input 
                    type="email" 
                    placeholder="E-mail" className="login-input"/>
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

                <button type='submit' className='btn-login'>Cadastrar</button>

                <div className="options">
                    <label>
                        <input type='checkbox'/> Concordo com os Termos e Condições
                    </label>
                </div>

                <div className='divisor'> Ou cadastre-se com</div>
                
                <div className='social-login'>
                    <button className='social-btn google'><FaGoogle/></button>
                    <button className='social-btn apple'><FaApple/></button>
                    <button className='social-btn facebook'><FaFacebookF/></button>
                </div>
                
            </div>
        </section>
    )
}

export default Cadastro;