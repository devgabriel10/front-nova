import 'normalize.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
