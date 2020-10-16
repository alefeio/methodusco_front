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
} from './styles';

export default function Dashboard() {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState();
  const [porcentagem, setPorcentagem] = useState(0);

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

  async function criarProva() {
    await api.post(`provas`);

    const response = await api.get(`provas`);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    // fazerProva();
  }

  async function loadProvas() {
    const response = await api.get(`provas`);

    console.log('Prova: ', response.data);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data ? response.data.id : null;

    if (response.data) totalConcluido(response.data);
  }

  // function fazerProva() {
  //   dispatch(updateEmProvaRequest());

  //   loadProvas();
  // }

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
      <Prod>
        <div>
          <Titulo>CURSO LEITURA DINÂMICA ONLINE</Titulo>
          <Titulo2>Teoria, Exercícios e Testes</Titulo2>
          <Titulo3>Olá, {perfil && perfil.nome}.</Titulo3>
          <br />
          <p>
            Seja bem-vindo ao curso de Leitura Dinâmica mais completo do
            mercado.
          </p>
          <br />
          <p>
            Para um melhor aproveitamento e aprendizado, é muito importante que
            você siga rigorosamente o tempo estipulado para cada aula.
          </p>
          <br />
          <p>Bons estudos!</p>

          {prova && (
            <Box1>
              {/* <Titulo3>Sobre o Curso</Titulo3> */}
              <Link to="/avaliacao">
                <Titulo3>Avaliação da Minha Leitura</Titulo3>
              </Link>
              <Titulo3>Treinamentos Eficazes</Titulo3>

              <Link to="/basico">
                <Titulo3>Módulo Básico</Titulo3>
                <p>Mudando Paradigmas da Leitura</p>
                <small>Duração recomendada: 1 mês</small>
              </Link>

              <Link to="/intermediario">
                <Titulo3>Módulo Intermediário</Titulo3>
                <p>Sedimentando Paradigmas da Leitura</p>
                <small>Duração recomendada: 2 meses</small>
              </Link>

              <Link to="/avancado">
                <Titulo3>Módulo Avançado</Titulo3>
                <p>Automatizando Paradigmas da Leitura</p>
                <small>Duração recomendada: 2 meses</small>
              </Link>

              <Link to={`/grafico/${prova.id}`}>
                <Titulo3>Gráfico de Evolução</Titulo3>
                <p>Avalie o seu desempenho.</p>
              </Link>
            </Box1>
          )}

          <Ladodireito>
            {!prova && <Default onClick={criarProva}>Iniciar teste</Default>}
            {prova && (
              <>
                <h2>Progresso: {porcentagem ? porcentagem : 0}% Concluído</h2>
              </>
            )}
          </Ladodireito>

          {provafinalizada && (
            <Ladodireito>
              <h3>Testes realizados</h3>
              <br />
              {provafinalizada.map((p, i) => (
                <p key={p.id}>
                  <Link to={`/grafico/${p.id}`}>
                    Teste {i + 1} (Id: {p.id})
                  </Link>
                </p>
              ))}
            </Ladodireito>
          )}
        </div>
      </Prod>
    </Container>
  );
}
