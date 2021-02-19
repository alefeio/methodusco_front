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
  Danger,
  Ladodireito,
  Box1,
  Voltar,
} from './styles';

export default function Aula09() {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState();

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

  const aula = 9;

  async function finalizarProva() {
    try {
      await api.delete(`provasaluno/${prova.id}`);

      const response = await api.get(`provasfinalizadas`);

      setProva(null);
      dispatch(updateFimProvaRequest());
      setProvafinalizada(response.data);

      toast.success('Prova finalizada com sucesso!');
    } catch (error) {
      toast.error('Erro ao finalizar a prova. Tente novamente!');
    }
  }

  async function loadProvas() {
    const response = await api.get(`provas`);

    console.log('Prova: ', response.data);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data ? response.data.id : null;
  }

  // function fazerProva() {
  //   dispatch(updateEmProvaRequest());

  //   loadProvas();
  // }

  useEffect(() => {
    async function loadPerfil() {
      setPerfil(perf.perfil);
    }

    loadPerfil();
  }, []);

  useEffect(() => {
    loadProvas();
  }, []);

  useEffect(() => {
    async function loadProvasFinalizadas() {
      const response2 = await api.get(`provasfinalizadas`);

      setProvafinalizada(response2.data);
    }

    loadProvasFinalizadas();
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
            <Link to="/intermediario">
              <small>Módulo Intermediário</small>
            </Link>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>MÓDULO INTERMEDIÁRIO</Titulo>
          <Titulo2>Sedimentando Paradigmas da Leitura</Titulo2>

          <Titulo3>Aula 09</Titulo3>
          <br />
          <Box1>
            <p>
              <strong>Avaliação</strong>
            </p>
            <p>
              <img src={icoPlay} /> Quanto mudaram os paradigmas da leitura.
            </p>
            <p>
              <strong>→ teste 01:</strong> P.L.M = 500{' '}
              <Link to="/intermediario/teste1">&gt;</Link>
            </p>
            <p>
              <strong>→ teste 02:</strong> P.L.M = 550{' '}
              <Link to="/intermediario/teste2">&gt;</Link>
            </p>
            <p>
              <strong>→ teste 03:</strong> P.L.M = 600{' '}
              <Link to="/intermediario/teste3">&gt;</Link>
            </p>
            <p>
              <strong>→ teste 04:</strong> P.L.M = 650{' '}
              <Link to="/intermediario/teste4">&gt;</Link>
            </p>
            <p>
              <strong>→ teste 05:</strong> P.L.M = 700{' '}
              <Link to="/intermediario/teste5">&gt;</Link>
            </p>
            <p>
              <img src={icoPlay} /> Avaliando o seu desempenho.
            </p>
          </Box1>
        </div>
      </Prod>
    </Container>
  );
}
