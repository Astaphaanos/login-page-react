import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header>
            <nav>
                <h1>CloudSync</h1>
                <ul>
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