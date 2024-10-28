import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Header from './components/Header';

function App() {
  return (
    <div className="App" style={{backgroundColor:'#E7EBF7'}}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
