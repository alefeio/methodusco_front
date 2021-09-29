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
  TituloVermelho,
  Default,
  Default2,
  Danger,
  Ladodireito,
  Box1,
  Voltar,
} from './styles';

export default function Basico() {
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

      console.log('response2: ', response2.data)

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
            <small>Módulo Básico</small>
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
            <br />
            <small>(duração recomendada: 1 mês)</small>
          </Titulo2>

          <br />
          <div>
            <Default>
              {provafinalizada && prova && prova.avaliacao ? <Link to="/basico/aula01">
                Aula <span>01</span>
              </Link> : <p>Aula <span>01</span></p>}
            </Default>
            <Default>
              {provafinalizada && prova && prova.aula01 ? <Link to="/basico/aula02">
                Aula <span>02</span>
              </Link> : <p>Aula <span>02</span></p>}
            </Default>
            <Default>
              {provafinalizada && prova && prova.aula02 ? <Link to="/basico/aula03">
                Aula <span>03</span>
              </Link> : <p>Aula <span>03</span></p>}
            </Default>
            <Default>
              {provafinalizada && prova && prova.aula03 ? <Link to="/basico/aula04">
                Aula <span>04</span>
              </Link> : <p>Aula <span>04</span></p>}
            </Default>
            <Default>
              {provafinalizada && prova && prova.aula04 ? <Link to="/basico/aula05">
                Aula <span>05</span>
              </Link> : <p>Aula <span>05</span></p>}
            </Default>
            <Default>
              {provafinalizada && prova && prova.aula05 ? <Link to="/basico/aula06">
                Aula <span>06</span>
              </Link> : <p>Aula <span>06</span></p>}
            </Default>
          </div>
        </div>
      </Prod>
    </Container>
  );
}
