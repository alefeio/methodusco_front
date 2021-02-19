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
  Teste,
  Numeros,
  Span,
} from './styles';

export default function Grafico(props) {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState();
  const [porcentagem, setPorcentagem] = useState(0);
  const [testes, setTestes] = useState([]);
  const [atual, setAtual] = useState();

  const id = parseInt(props.match.params.id);

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

  const aula = 0;

  async function finalizarProva() {
    try {
      await api.delete(`provasaluno/${prova.id}`);

      const response = await api.get(`provasfinalizadas`);

      setProva(null);
      dispatch(updateFimProvaRequest());
      setProvafinalizada(response.data);

      setPorcentagem(null);
      setTestes([]);

      criarProva();
      loadProvas();

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

    if (response.data) totalConcluido(response.data);
  }

  async function totalConcluido(prova) {
    let pr = porcentagem;

    if (prova.avaliacao) pr += 1;
    if (prova.aula01) pr += 1;
    if (prova.aula02) pr += 1;
    if (prova.aula03) pr += 1;
    if (prova.aula04) pr += 1;
    if (prova.aula05) pr += 1;
    if (prova.aula06) pr += 1;
    if (prova.aula07) pr += 1;
    if (prova.aula08) pr += 1;
    if (prova.aula09) pr += 1;
    if (prova.aula10) pr += 1;
    if (prova.aula11) pr += 1;
    if (prova.aula12) pr += 1;
    if (prova.aula13) pr += 1;
    if (prova.aula14) pr += 1;
    if (prova.aula15) pr += 1;
    if (prova.aula16) pr += 1;

    setPorcentagem(((pr / 17) * 100).toFixed(1));
  }

  async function loadTestes() {
    const response = await api.put(`testealuno/${id}`);

    console.log('Testes: ', response.data);

    setTestes(response.data);
  }

  async function criarProva() {
    await api.post(`provas`);

    const response = await api.get(`provas`);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    // fazerProva();
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
    loadTestes();
  }, [id]);

  useEffect(() => {
    async function loadProvasFinalizadas() {
      const response2 = await api.get(`provasfinalizadas`);

      setProvafinalizada(response2.data);

      setAtual(response2.data.length + 1);
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
            <small>Avaliando seu Desempenho</small>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>AVALIANDO O SEU DESEMPENHO</Titulo>
          <Titulo2>
            <small>Gráfico demonstrativo da</small> Prova {atual}{' '}
            <small>em relação aos resultados dos 3 módulos</small>
          </Titulo2>
          {/* <Titulo2>Gráfico: Prova {atual}</Titulo2> */}

          {testes.length ? (
            <Box1>
              <strong>Testes</strong>
              <strong>PCMs</strong>
              <small>Meta = 640 PCMs</small>
              <div>
                <Numeros>
                  <p>900</p>
                </Numeros>
                <Numeros>
                  <p>800</p>
                </Numeros>
                <Numeros>
                  <p>700</p>
                </Numeros>
                <Numeros>
                  <p>600</p>
                </Numeros>
                <Numeros>
                  <p>500</p>
                </Numeros>
                <Numeros>
                  <p>400</p>
                </Numeros>
                <Numeros>
                  <p>300</p>
                </Numeros>
                <Numeros>
                  <p>200</p>
                </Numeros>
                <Numeros>
                  <p>100</p>
                </Numeros>
                <Numeros>
                  <p>0</p>
                </Numeros>
                <Numeros> </Numeros>
              </div>
              {testes.map((t) => (
                <Teste key={t.id} height={t.pcm / 2} bg="#135c58">
                  <span>
                    <p>{t.pcm}</p>
                  </span>
                  {t.numero === 0 ? (
                    <span>
                      <p>Inicial</p>
                    </span>
                  ) : (
                    <span>
                      <p>{t.numero}</p>
                    </span>
                  )}
                </Teste>
              ))}
              {testes.length < 21 && (
                <>
                  {testes.length === 1 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 2 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 3 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 4 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 5 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 6 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 7 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 8 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 9 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 10 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 11 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 12 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 13 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 14 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 15 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 16 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 17 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 18 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 19 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                  {testes.length === 20 && (
                    <>
                      <Teste>
                        <span></span>
                        <span></span>
                      </Teste>
                    </>
                  )}
                </>
              )}

              <Span left="10">Módulo Intermediário: 1 a 10</Span>
              <Span left="50">Módulo Avançado: 11 a 20</Span>
            </Box1>
          ) : (
            <Box1>
              <h2>Você não realizou testes.</h2>
            </Box1>
          )}

          <Ladodireito>
            <h2>Provas</h2>
            <small>Clique nas provas para acessar o gráfico</small>
            <br />
            <br />

            {!prova && <Default onClick={criarProva}>Iniciar teste</Default>}
            {prova && provafinalizada && (
              <>
                <h2>
                  {provafinalizada && (
                    <Link
                      to={`/grafico/${prova.id}`}
                      onClick={() => {
                        setPorcentagem(0);
                        window.scrollTo(0, 0);
                        setAtual(provafinalizada.length + 1);
                      }}
                    >
                      Prova {provafinalizada.length + 1}
                      {porcentagem > 0 && (
                        <small>
                          {' '}
                          (progresso: {porcentagem ? porcentagem : 0}%)
                        </small>
                      )}
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      finalizarProva();
                      setPorcentagem(0);
                    }}
                  >
                    Finalizar
                  </button>
                </h2>
              </>
            )}

            {provafinalizada && provafinalizada.length && (
              <ul>
                {provafinalizada.map((p, i) => {
                  return (
                    <li key={p.id}>
                      <Link
                        to={`/grafico/${p.id}`}
                        onClick={() => {
                          setPorcentagem(0);
                          window.scrollTo(0, 0);
                          setAtual(i + 1);
                        }}
                      >
                        Prova {i + 1}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </Ladodireito>
        </div>
      </Prod>
    </Container>
  );
}
