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

export default function Aula03() {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState();

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

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
            <Link to="/basico">
              <small>Módulo Básico</small>
            </Link>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>MÓDULO BÁSICO</Titulo>
          <Titulo2>
            Mudando Paradigmas da Leitura
          </Titulo2>

          <Titulo3>Aula 03</Titulo3>
          <br />
          <Box1>
            <p>
              <strong>Teoria</strong>
            </p>
            <p>
              <strong>&raquo;</strong> Relembrando a teoria básica.
            </p>
            <br />
            <p>
              <strong>Prática</strong>
            </p>
            <p>
              <strong>&raquo;</strong> Treinamentos curtos, intensos e
              intervalados.
            </p>
            <div>
              <Default>
                <Link to="/apostila/2">
                  Exerc. <span>02</span>
                </Link>
              </Default>
              <Default>
                <Link to="/apostila/332">
                  Exerc. <span>03</span>
                </Link>
              </Default>
              <Default>
                <Link to="/apostila/333">
                  Exerc. <span>04</span>
                </Link>
              </Default>
              <Default>
                <Link to="/apostila/334">
                  Exerc. <span>05</span>
                </Link>
              </Default>
              <Default>
                <Link to="/apostila/335">
                  Exerc. <span>06</span>
                </Link>
              </Default>
            </div>
            <br />
            <p>
              <strong>Objetivos</strong>
            </p>
            <p>
              <strong>&raquo;</strong> Romper paradigmas silábico/fonético.
            </p>
            <p>
              <strong>&raquo;</strong> Treinar paradigmas da leitura dinâmica.
            </p>
            <br />
            <p>
              <strong>Duração</strong>
            </p>
            <p>
              <strong>&raquo;</strong> 5 dias.
            </p>
          </Box1>
        </div>
      </Prod>
    </Container>
  );
}
