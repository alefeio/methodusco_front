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

export default function Intermediario() {
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
            <small>Módulo Intermediário</small>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>MÓDULO INTERMEDIÁRIO</Titulo>
          <Titulo2>
            Sedimentando Paradigmas da Leitura
            <br />
            <small>(duração recomendada: 2 meses)</small>
          </Titulo2>

          <br />
          <div>
            <Default>
              <Link to="/intermediario/aula07">
                Aula <span>07</span>
              </Link>
            </Default>
            <Default>
              <Link to="/intermediario/aula08">
                Aula <span>08</span>
              </Link>
            </Default>
            <Default>
              <Link to="/intermediario/aula09">
                Aula <span>09</span>
              </Link>
            </Default>
            <Default>
              <Link to="/intermediario/aula10">
                Aula <span>10</span>
              </Link>
            </Default>
            <Default>
              <Link to="/intermediario/aula11">
                Aula <span>11</span>
              </Link>
            </Default>
          </div>
        </div>
      </Prod>
    </Container>
  );
}
