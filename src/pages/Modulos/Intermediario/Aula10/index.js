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

export default function Aula10() {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState();

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

  const aula = 10;

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

          <Titulo3>Aula 10</Titulo3>
          <br />
          <Box1>
            <p>
              <strong>Teoria</strong>
            </p>
            <p>
              <img src={icoPlay} /> Subvocalização = cordas vocais
            </p>
            <br />
            <p>
              <strong>Prática</strong>
            </p>
            <p>
              <img src={icoPlay} /> Explicando como realizar os exercícios
            </p>

            <ul>
              <li>→ Treinamentos curtos, intensos e espaçados</li>
              <li>→ Autoaceleração nos textos com timer</li>
            </ul>
            <p>
              do 1º dia ao 15º → 30” à 20”{' '}
              <Link to="/autoaceleracao/324">&gt;</Link> e 20” à 15”{' '}
              <Link to="/autoaceleracao/325">&gt;</Link>
            </p>
            <p>
              do 16º dia ao 30º → 20” à 10”{' '}
              <Link to="/autoaceleracao/326">&gt;</Link>
            </p>
            <br />
            <p>
              <strong>Objetivos</strong>
            </p>
            <p>
              <strong>&raquo;</strong> Romper paradigmas da leitura silábica
              fonética
            </p>
            <p>
              <strong>&raquo;</strong> Automatizar paradigmas da leitura
              dinâmica.
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
