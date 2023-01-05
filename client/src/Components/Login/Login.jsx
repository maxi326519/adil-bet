import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { postLoginUser } from '../../redux/actions/POST/index.js';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const INITIAL_STATE = {
    email: '',
    password: '',
  };

const Login = () => {

  const { loginWithRedirect } = useAuth0();
  const [login, setLogin] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(login)
    dispatch(postLoginUser(login));
    setLogin(INITIAL_STATE);
    return navigate('/home');
  };
  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    setLogin({
      ...login,
      [name]: value,
    });
  };


  return ( 
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Correo Electronico'
            name='email'
            onChange={handleChange}
            value={login.email}
            type='email'
          />
          <input
            placeholder='Contraseña'
            name='password'
            onChange={handleChange}
            value={login.password}
            type='password'
          />
          <div>
            <button type='submit'>
              Ingresar
            </button>
            <Link to='/register'>
              No tienes una cuenta?
            </Link>
          </div>
        </form>
        <button onClick={() => loginWithRedirect()}>
          Registrarte con Google
        </button>
      </div>
    </div>
  );
};

export default Login;