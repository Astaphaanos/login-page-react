import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Cadastro from './components/Cadastro';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
      </Router>
    </div>
  );
}

//Arrumar o carregamento da página que não começa com o login page
export default App;
