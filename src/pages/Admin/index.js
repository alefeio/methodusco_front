import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  updateProvaRequest,
  // updateEmProvaRequest,
  updateFimProvaRequest,
} from '~/store/modules/usuario/actions';

import icoConcluido from '~/assets/ico-concluido.jpg';
import icoPlay from '~/assets/ico-play.png';

import {
  Container,
  Prod,
  ModUl,
  ModUl2,
  Titulo,
  Titulo2,
  Titulo3,
  Default,
  Default2,
  Danger,
  Ladodireito,
  Box1,
  Voltar,
} from './styles';

export default function Admin() {
  const [perfil, setPerfil] = useState();

  const perf = useSelector((state) => state.usuario);

  useEffect(() => {
    async function loadPerfil() {
      setPerfil(perf.perfil);
    }

    loadPerfil();
  }, []);

  return (
    <Container>
      <Voltar>
        <ul>
          <li>
            <Link to="/dashboard">
              <small>Home</small>
            </Link>
          </li>
          <li>|</li>
          <li>
            <small>Admin</small>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>ADMINISTRAÇÃO</Titulo>
          <br />
          <Box1>
            <p>
              <Link to="/admin/alunos">
                Administrar alunos
              </Link>
            </p>
            <p>
              <Link to="/admin/videos">
                Administrar vídeos
              </Link>
            </p>

          </Box1>
        </div>
      </Prod>
    </Container>
  );
}
