import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';
import iconav from '~/assets/icon-nav2.png';
import iconavx from '~/assets/icon-nav_x2.png';

import { Container, Content, Img, Nav } from './styles';

import { store } from '~/store';

export default function Header() {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [perfil, setPerfil] = useState();

  const perf = useSelector((state) => state.usuario);

  const { logado } = store.getState().auth;

  function altChecked() {
    setChecked(!checked);
  }

  const Toggle = () => {
    return (
      <Img src={checked ? iconavx : iconav} alt="Menu" onClick={altChecked} />
    );
  };

  function handleLogout() {
    dispatch(logout());
  }

  useEffect(() => {
    async function loadPerfil() {
      setPerfil(perf.perfil);
    }

    loadPerfil();
  }, []);

  return (
    <Container>
      <Content>
        <div>
          <Link to="/dashboard">
            <img src={logo} alt="Methodus - Curso Leitura Dinâmica OnlineDinâmica e Memorização" />
          </Link>
        </div>
        <Toggle />
        <Nav exibir={checked}>
          <ul>
            <li>
              <Link to="/dashboard" onClick={altChecked}>
                INÍCIO
              </Link>
            </li>
            {/* <li>
              <Link to="/sobre" onClick={altChecked}>
                SOBRE O CURSO
              </Link>
            </li> */}
            <li>
              <Link to="/perfil" onClick={altChecked}>
                Perfil
              </Link>
            </li>
            {perfil && perfil.admin && (
            <li>
              <Link to="/admin" onClick={altChecked}>
                ADMIN
              </Link>
            </li>
            )}
            <li>
              <Link to="/suporte" onClick={altChecked}>
                SUPORTE
              </Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Sair</Link>
            </li>
          </ul>
        </Nav>
      </Content>
    </Container>
  );
}
