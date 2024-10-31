import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./Header.css";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav>
                <h1>CloudSync</h1>

                <div className="hamburger-icon" onClick={toggleMenu}>
                    <span className={`line ${isOpen ? 'open' : ''}`}></span>
                    <span className={`line ${isOpen ? 'open' : ''}`}></span>
                    <span className={`line ${isOpen ? 'open' : ''}`}></span>
                </div>

                <ul className={`side-menu ${isOpen ? 'open' : ''}`}>
                    <li>Início</li>
                    <li>Suporte</li>
                    <li>Recursos</li>
                    <li>Sobre</li>
                </ul>

                <div className="header-login">
                    <Link to='/'>
                        <span 
                        className="login-header-span">
                            Entrar
                        </span>
                    </Link>
                    <Link to='/cadastro'>
                        <span 
                        className="cadastrar-header-span">
                            Cadastrar
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;