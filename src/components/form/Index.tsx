import { useState } from 'react';
import Swal from 'sweetalert2';
import Input from './Input';
import Button from '../Button';
import logo from '/home/cliente/Documentos/controle-empresas/front/src/assets/logo.jpeg';
import '/home/cliente/Documentos/controle-empresas/front/src/css/Index.css';
import { Link, json } from 'react-router-dom';

export type FormState = {
  login: string,
  senha: string,
};

export function Form() {
  const formEmpty = {
    login: '',
    senha: '',
  };

  const [formData, setFormData] = useState(formEmpty);
  const [verifyPassword, setVerifyPassword] = useState(false);
  const [checkboxLembrarSenha, setcheckboxLembrarSenha] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    ));
  };

  const checkForm = () => {
    const regexPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (formData.login !== ''
      && formData.senha !== ''
      && formData.login.match(regexMail)
      && formData.senha.match(regexPassword)) return true;
    return false;
  };

  const registerButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (checkForm()) {
      <Link to="/login" />
      if (checkForm() && checkboxLembrarSenha) {
        const obj = {
          login: formData.login,
          senha: formData.senha,
        }
        let usuariosLoginSalvo = [obj];
        if (localStorage.length === 0) {
          localStorage.setItem('usuariosLoginSalvo', JSON.stringify(obj));
        } else {
          usuariosLoginSalvo = JSON.parse(localStorage.getItem('usuariosLoginSalvo'));
          JSON.stringify(localStorage.setItem('usuariosLoginSalvo,', usuariosLoginSalvo));
        }
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Informações de Login inválidas!',
      })
    }
  };

  const showVerifyPassword = () => {
    setVerifyPassword(!verifyPassword);
  }

  const lembrarSenha = () => {
    setcheckboxLembrarSenha(!checkboxLembrarSenha);
  }

  return (
    <div id="home-form-container">
      <div id="home-form-subcontainer">

        <div className="home-logo-container">
          <img src={logo} alt="logo" width="250px" className="home-logo" />
        </div>
        <div className="home-entrar-container">
          <p className="home-entrar">Entre na sua conta</p>
        </div>

        <div className="home-form-container">

          <form>

            <div className="home-login-label">
              <label htmlFor="username">Login</label>
            </div>

            <Input
              type="text"
              id="username"
              className="home-input-mail"
              name="login"
              autoComplete="off"
              onChange={handleChange}
            />

            <div className="home-password-forgot-label">
              <label htmlFor="password">Senha</label>
              <a className="home-forgot-password" href="">Esqueceu sua senha?</a>
            </div>

            <Input
              type="password"
              id="password"
              className="home-input-password"
              name="senha"
              onChange={handleChange}
            />

            <div className="home-verify-password">
              <div className="home-verify-check">
                <label htmlFor="checkbox-password-verify">Verificador de senha</label>
                <div className="home-input-check-verify-password">
                  <Input
                    type="checkbox"
                    onChange={showVerifyPassword}
                  />
                </div>
              </div>

              {verifyPassword &&
                <>
                  {(formData.senha.length >= 8)
                    ? <p className="home-valid-password-check">Possuir 8 ou mais caracteres</p>
                    : <p className="home-invalid-password-check">Possuir 8 ou mais caracteres</p>}
                  {(formData.senha.length <= 16 && formData.senha.length >= 8)
                    ? <p className="home-valid-password-check">Possuir até 16 caracteres</p>
                    : <p className="home-invalid-password-check">Possuir até 16 caracteres</p>}
                  {(formData.senha.match(/[A-Za-z0-9]*\d+[A-Za-z0-9]*/))
                    ? <p className="home-valid-password-check">Possuir letras e números</p>
                    : <p className="home-invalid-password-check">Possuir letras e números</p>}
                  {(formData.senha.match(/[^a-zA-Z 0-9]+/g))
                    ? <p className="home-valid-password-check">Possuir algum caractere especial</p>
                    : <p className="home-invalid-password-check">Possuir algum caractere especial</p>}
                </>
              }
            </div>

            <div className="home-storage-submit-container">
              <div className="home-storage">
                <label htmlFor="checkbox-password-remember">Lembrar-me</label>
                <div className="home-input-check-forgot-password">
                  <Input
                    type="checkbox"
                    id="home-checkbox-password-remember"
                    onChange={lembrarSenha}
                  />
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  onClick={(event) => registerButton(event)}
                  className="btn-submit"
                >
                  Entrar
                </Button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
