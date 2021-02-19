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

import icoPlay from '~/assets/ico-play.png';
import icoTeste from '~/assets/ico-teste.png';
import icoPlay2 from '~/assets/ico-play2.png';
import icoPlay3 from '~/assets/ico-play3.png';
import icoGrafico from '~/assets/ico-grafico.png';

import {
  Container,
  Prod,
  ModUl,
  ModUl2,
  Titulo,
  Titulo2,
  Titulo3,
  Titulo4,
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
    criarProva();
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
          <Titulo>
            Curso Leitura Dinâmica Online
            <br />
            Teoria, Exercícios e Testes
          </Titulo>
          {/* <Titulo3>Olá, {perfil && perfil.nome}.</Titulo3> */}
          <br />
          <Titulo2>
            Olá, {perfil && perfil.nome}
            <br />
            Seja bem-vindo ao curso de Leitura Dinâmica Online
          </Titulo2>
          {/* <br />
          <p>Bons estudos!</p> */}

          {prova && (
            <Box1>
              {/* <Titulo3>Sobre o Curso</Titulo3> */}
              <Titulo4>
                <Link to="/video/sobre">
                  <img src={icoPlay} /> Sobre o Autor e Curso
                </Link>
              </Titulo4>
              <Titulo4>
                Avalie sua Leitura:
                <ul>
                  <li>
                    <Link to="/video/avalie">
                      <img src={icoPlay3} /> Vídeo explicativo
                    </Link>
                  </li>
                  <li>
                    <Link to="/avaliacao">
                      <img src={icoTeste} /> Faça o teste
                    </Link>
                  </li>
                </ul>
              </Titulo4>
              <Titulo4>
                <Link to="/video/treinamentoseficazes">
                  <img src={icoPlay} /> Treinamentos Eficazes
                </Link>
              </Titulo4>

              <Link to="/basico">
                <img src={icoPlay2} />
                <div>
                  <Titulo3>MÓDULO BÁSICO</Titulo3>
                  <p>Mudando Paradigmas da Leitura</p>
                  <small>Duração recomendada: 1 mês</small>
                </div>
              </Link>

              <Link to="/intermediario">
                <img src={icoPlay2} />
                <div>
                  <Titulo3>MÓDULO INTERMEDIÁRIO</Titulo3>
                  <p>Sedimentando Paradigmas da Leitura</p>
                  <small>Duração recomendada: 2 meses</small>
                </div>
              </Link>

              <Link to="/avancado">
                <img src={icoPlay2} />
                <div>
                  <Titulo3>MÓDULO AVANÇADO</Titulo3>
                  <p>Automatizando Paradigmas da Leitura</p>
                  <small>Duração recomendada: 2 meses</small>
                </div>
              </Link>

              <Titulo4>
                <Link to={`/grafico/${prova.id}`}>
                  <img src={icoGrafico} />
                  <div>
                    <Titulo3>Gráfico de Evolução</Titulo3>
                    <p>Avalie o seu desempenho.</p>
                  </div>
                </Link>
              </Titulo4>
            </Box1>
          )}

          {/* <Ladodireito>
            {!prova && <Default onClick={criarProva}>Iniciar teste</Default>}
            {prova && (
              <>
                <h2>Progresso: {porcentagem ? porcentagem : 0}% Concluído</h2>
              </>
            )}
          </Ladodireito>

          {provafinalizada && provafinalizada.length && (
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
          )} */}
        </div>
      </Prod>
    </Container>
  );
}
