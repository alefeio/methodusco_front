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

import { loadAulas } from '~/components/Atualizaaula';

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

export default function Aula12() {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState();

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

  const aula = 12;

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

    // console.log('Prova: ', response.data);

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
    loadAulas(12);
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
            <Link to="/avancado">
              <small>Módulo Avançado</small>
            </Link>
          </li>
          <li>|</li>
          <li>
            <small>Aula 12</small>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>MÓDULO AVANÇADO</Titulo>
          <Titulo2>Automatizando Paradigmas da Leitura</Titulo2>

          <Titulo3>Aula 12</Titulo3>
          <br />
          <Box1>
            <p>
              <strong>Teoria</strong>
            </p>
            <p>
              <Link to="/video/aula12teoria">
                <img src={icoPlay} /> Mecanismos físicos + mecanismos mentais
              </Link>
            </p>
            <p>
              <strong>&raquo;</strong> Leitura elaborativa → autoaceleração
            </p>
            <br />
            <p>
              <strong>Prática</strong>
            </p>
            <p>
              <Link to="/video/aula12pratica">
                <img src={icoPlay} /> Treinamentos intensos, curtos e
              intercalados
              </Link>
            </p>
            <p>
              <strong>&raquo;</strong> Autoaceleração com timer
            </p>
            <p>
              do 1º dia ao 15º → 20” à 15”{' '}
              <Link to="/autoaceleracao/325/avancado/12"><span>&gt;</span></Link> e 18” à 12”{' '}
              <Link to="/autoaceleracao/330/avancado/12"><span>&gt;</span></Link>.
            </p>
            <p>
              do 16º dia ao 30º → 15” à 10”{' '}
              <Link to="/autoaceleracao/327/avancado/12"><span>&gt;</span></Link>.
            </p>
            <br />
            <p>
              <strong>Objetivos</strong>
            </p>
            <p>
              <strong>&raquo;</strong> Automatizar paradigmas da leitura
              dinâmica nos textos
            </p>
            <br />
            <p>
              <strong>Duração</strong>
            </p>
            <p>
              <strong>&raquo;</strong> 30 dias
            </p>
          </Box1>
        </div>
      </Prod>
    </Container>
  );
}
