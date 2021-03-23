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
import icoGrafico from '~/assets/ico-grafico.png';

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
  Titulo4,
} from './styles';

export default function Aula11() {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState();

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

  const aula = 11;

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
          <li>|</li>
          <li>
            <small>Aula 11</small>
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

          <Titulo3>Aula 11</Titulo3>
          <br />
          <Box1>
            <p>
              <strong>Avaliação</strong>
            </p>
            <p>
              <Link to="/video/aula11teoria">
                <img src={icoPlay} /> Quanto mudaram os paradigmas da leitura.
              </Link>
            </p>
            <p>
              <strong>→ teste 06:</strong> P.L.M = 750{' '}
              <Link to="/intermediario/teste6">
                <span>&gt;</span>
              </Link>
            </p>
            <p>
              <strong>→ teste 07:</strong> P.L.M = 800{' '}
              <Link to="/intermediario/teste7">
                <span>&gt;</span>
              </Link>
            </p>
            <p>
              <strong>→ teste 08:</strong> P.L.M = 850{' '}
              <Link to="/intermediario/teste8">
                <span>&gt;</span>
              </Link>
            </p>
            <p>
              <strong>→ teste 09:</strong> P.L.M = 900{' '}
              <Link to="/intermediario/teste9">
                <span>&gt;</span>
              </Link>
            </p>
            <p>
              <strong>→ teste 10:</strong> P.L.M = 950{' '}
              <Link to="/intermediario/teste10">
                <span>&gt;</span>
              </Link>
            </p>
            <p>
              <Link to="/video/aula11pratica">
                <img src={icoPlay} /> Avaliando o seu desempenho.
              </Link>
            </p>
          </Box1>
        </div>

        {prova && (
          <Titulo4>
            <Link to={`/grafico/${prova.id}`}>
              <img src={icoGrafico} />
              <div>
                <Titulo3>Gráfico de Evolução</Titulo3>
                <p>Avalie o seu desempenho.</p>
              </div>
            </Link>
          </Titulo4>
        )}
      </Prod>
    </Container>
  );
}
