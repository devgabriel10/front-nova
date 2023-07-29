import 'normalize.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import NotFound from './not-found/Index';
import Liberacao from './components/liberacao/Index';
import Apuracao from './components/apuracao/Index';
import Conferencia from './components/conferencia/Index';
import View from './components/view/Index';
import Metas from './components/metas/Index';
import Calendario from './components/calendario/Index';
import Cadastro from './components/cadastro/Index';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/liberacao" element={<Liberacao />} />
        <Route path="/apuracao" element={<Apuracao />} />
        <Route path="/conferencia" element={<Conferencia />} />
        <Route path="/view" element={<View />} />
        <Route path="/metas" element={<Metas />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
