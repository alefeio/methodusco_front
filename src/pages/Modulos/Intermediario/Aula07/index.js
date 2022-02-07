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

export default function Aula07() {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState();

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

  const aula = 7;

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
    loadAulas(7);
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
            <small>Aula 07</small>
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

          <Titulo3>Aula 07</Titulo3>
          <br />
          <Box1>
            <p>
              <strong>Teoria</strong>
            </p>
            <p>
              <Link to="/video/aula07teoria">
                <img src={icoPlay} /> Autoaceleração: aplicando em textos no
                monitor
              </Link>
            </p>
            <br />
            <p>
              <strong>Prática</strong>
            </p>
            <p>
              <Link to="/video/aula07pratica">
                <img src={icoPlay} /> Explicando como realizar os exercícios
              </Link>
            </p>
            <p>
              <strong>&raquo;</strong> Treinamentos curtos, intensos e espaçados
            </p>
            <div>
              <Default>
                <Link to="/intermediario/exercicios/1">
                  Exerc. <span>01</span>
                </Link>
              </Default>
              <Default>
                <Link to="/intermediario/exercicios/2">
                  Exerc. <span>02</span>
                </Link>
              </Default>
              <Default>
                <Link to="/intermediario/exercicios/3">
                  Exerc. <span>03</span>
                </Link>
              </Default>
              <Default>
                <Link to="/intermediario/exercicios/4">
                  Exerc. <span>04</span>
                </Link>
              </Default>
              <Default>
                <Link to="/intermediario/exercicios/5">
                  Exerc. <span>05</span>
                </Link>
              </Default>
              <Default>
                <Link to="/intermediario/exercicios/6">
                  Exerc. <span>06</span>
                </Link>
              </Default>
            </div>
            <br />
            <p>
              <strong>Objetivos</strong>
            </p>
            <p>
              <strong>&raquo;</strong> Romper paradigmas da leitura silábica
              fonética nos textos
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
              <strong>&raquo;</strong> 10 dias
            </p>
          </Box1>
        </div>
      </Prod>
    </Container>
  );
}
