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

export default function Aula06() {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState([]);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

  const aula = 6;

  async function criarProva() {
    const provas2 = await api.post(`provas2/${aula}`);

    console.log('provas2 > ', provas2);

    const response = await api.get(`provas2/${aula}`);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));
  }

  async function finalizarProva() {
    try {
      await api.delete(`provas2aluno/${prova.id}`);

      const response = await api.get(`provas2finalizadas/${aula}`);

      setProva(null);
      dispatch(updateFimProvaRequest());
      setProvafinalizada(response.data);

      setTotal(0);

      criarProva();

      toast.success('Prova finalizada com sucesso!');
    } catch (error) {
      toast.error('Erro ao finalizar a prova. Tente novamente!');
    }
  }

  async function loadProvas() {
    const response = await api.get(`provas2/${aula}`);

    console.log('Prova: ', response.data);

    if(response.data) {
      setProva(response.data);
      dispatch(updateProvaRequest(response.data));
    }

    const prova_id = response.data ? response.data.id : null;

    let apr = 0;
    let div = 0;

    if (response.data.monitor03 > 0) {
      apr += response.data.monitor03;
      div += 1;
    }

    if (response.data.monitor04 > 0) {
      apr += response.data.monitor04;
      div += 1;
    }

    if (response.data.monitor05 > 0) {
      apr += response.data.monitor05;
      div += 1;
    }

    if (response.data.monitor06 > 0) {
      apr += response.data.monitor06;
      div += 1;
    }

    if (response.data.monitor07 > 0) {
      apr += response.data.monitor07;
      div += 1;
    }

    if (response.data.monitor08 > 0) {
      apr += response.data.monitor08;
      div += 1;
    }

    if (response.data.monitor09 > 0) {
      apr += response.data.monitor09;
      div += 1;
    }

    if (response.data.percepcao01 > 0) {
      apr += response.data.percepcao01;
      div += 1;
    }

    if (response.data.percepcao02 > 0) {
      apr += response.data.percepcao02;
      div += 1;
    }

    if (response.data.percepcao03 > 0) {
      apr += response.data.percepcao03;
      div += 1;
    }

    const tot = apr / div;

    setTotal(tot);
  }

  useEffect(() => {
    async function loadPerfil() {
      setPerfil(perf.perfil);
    }

    loadPerfil();
  }, []);

  useEffect(() => {
    criarProva();
    loadProvas();
  }, []);

  useEffect(() => {
    async function loadProvasFinalizadas() {
      const response2 = await api.get(`provas2finalizadas/${aula}`);

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
          <li>|</li>
          <li>
            <small>Aula 06</small>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>MÓDULO BÁSICO</Titulo>
          <Titulo2>Mudando Paradigmas da Leitura</Titulo2>

          <Titulo3>Aula 06</Titulo3>
          <br />
          <Box1>
            <p>
              <strong>Teoria</strong>
            </p>
            <p>
              <Link to="/video/aula06teoria">
                <img src={icoPlay} /> Leitura Dinâmica e a Compreensão dos Textos
              </Link>
            </p>
            <br />
            <p>
              <strong>Prática</strong>
            </p>
            <p>
              <Link to="/video/aula06pratica">
                <img src={icoPlay} /> Explicando como realizar os exercícios
              </Link>
            </p>
            <p>
              <strong>&raquo;</strong> Treinamentos curtos, intensos e
              intervalados
            </p>
            <div>
              <Default>
                <Link to="/apostila/2/aula/06">
                  Exerc. <span>02</span>
                </Link>
              </Default>
              <Default>
                <Link to="/apostila/332/aula/06">
                  Exerc. <span>03</span>
                </Link>
              </Default>
              <Default>
                <Link to="/apostila/333/aula/06">
                  Exerc. <span>04</span>
                </Link>
              </Default>
              <Default>
                <Link to="/apostila/334/aula/06">
                  Exerc. <span>05</span>
                </Link>
              </Default>
              <Default>
                <Link to="/apostila/335/aula/06">
                  Exerc. <span>06</span>
                </Link>
              </Default>
              <Default>
                <Link to="/apostila/336/aula/06">
                  Exerc. <span>07</span>
                </Link>
              </Default>
              <Default>
                <Link to="/apostila/151/aula/06">
                  Exerc. <span>08</span>
                </Link>
              </Default>
              <Default>
                <Link to="/apostila/337/aula/06">
                  Exerc. <span>09</span>
                </Link>
              </Default>
              <Default>
                <Link to="/percepcaovisual/186/aula/06">
                  Exerc. <span>10</span>
                </Link>
              </Default>
              <Default>
                <Link to="/percepcaovisual/208/aula/06">
                  Exerc. <span>11</span>
                </Link>
              </Default>
              <Default>
                <Link to="/percepcaovisual/286/aula/06">
                  Exerc. <span>12</span>
                </Link>
              </Default>
              <Default>
                <Link to="/percepcaovisual/207/aula/06">
                  Exerc. <span>13</span>
                </Link>
              </Default>
            </div>
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
              dinâmica
            </p>
            <br />
            <p>
              <strong>Duração</strong>
            </p>
            <p>
              <strong>&raquo;</strong> 5 dias
            </p>
          </Box1>
          {prova && prova.nota > 0 && <Titulo>Treinamento atual:</Titulo>}
          {prova && prova.nota === 0 && <Titulo>Novo Treinamento:</Titulo>}
          {!prova && (
            <Titulo3>
              <Default2 onClick={criarProva}>Novo Treinamento</Default2>
            </Titulo3>
          )}
          {prova && (
            <Titulo3>
              {`Id: ${provafinalizada.length + 1}`}
              {total > 0 && ` | Aproveitamento: ${total.toFixed(1)}%`}
              <br />
              <br />
              {/* <Default onClick={fazerProva}>Acessar</Default> */}
              <Danger onClick={finalizarProva}>Finalizar</Danger>
            </Titulo3>
          )}
          <br />
          <Titulo2>Treinamentos anteriores:</Titulo2>
          <ModUl>
            {provafinalizada &&
              provafinalizada.map((p, i) => (
                <li key={p.id}>{`Id: ${i + 1} | Nota: ${(
                  (p.monitor03 +
                    p.monitor04 +
                    p.monitor05 +
                    p.monitor06 +
                    p.monitor07 +
                    p.monitor08 +
                    p.monitor09 +
                    p.percepcao01 +
                    p.percepcao02 +
                    p.percepcao03) /
                  10
                ).toFixed(1)}%`}</li>
              ))}
          </ModUl>
        </div>
      </Prod>
    </Container>
  );
}
