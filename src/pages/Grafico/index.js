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
  BtModulos,
} from './styles';

export default function Grafico(props) {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState([]);
  const [porcentagem, setPorcentagem] = useState(0);
  const [testes, setTestes] = useState([]);
  const [atual, setAtual] = useState();
  const [evolucao, setEvolucao] = useState(0);
  const [testeinicial, setTesteinicial] = useState(0);
  const [dataTesteinicial, setDataTesteinicial] = useState('00/00/0000');
  const [modulografico, setModulografico] = useState(1);

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

      loadUltimaProva(id);

      // toast.success('Prova finalizada com sucesso!');
    } catch (error) {
      // toast.error('Erro ao finalizar a prova. Tente novamente!');
    }
  }

  async function loadProvasFinalizadas(id) {
    const response2 = await api.get(`provasfinalizadas`);

    setProvafinalizada(response2.data);

    console.log(`Provas finalizadas:`, response2.data);

    let idTesteinicial = '';

    if (response2.data.length) {
      idTesteinicial = response2.data[0].id;
    } else {
      idTesteinicial = id;
    }

    if (!testeinicial) loadTesteInicial(idTesteinicial);
  }

  async function loadProvas() {
    const response = await api.get(`provas`);

    console.log('Prova: ', response.data);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data ? response.data.id : null;

    if (response.data) totalConcluido(response.data);

    loadProvasFinalizadas(prova_id);
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

  async function loadTestes(id) {
    setTestes([]);

    const response = await api.put(`testealuno/${id}`);

    console.log('Testes: ', response.data);
    console.log('Qtd Testes: ', response.data.length);

    if (prova && prova.id === id && response.data.length >= 20) finalizarProva();

    const tests = response.data;

    let media = 0;
    let divisor = 0;

    let test = [];

    tests.map((t, i) => {
      if (modulografico === 1 && t.numero > 0 && t.numero < 6) {
        media += t.pcm;
        divisor++;
        test.push(t);
        setTestes(test);
      } else if (modulografico === 2 && t.numero > 5 && t.numero < 11) {
        media += t.pcm;
        divisor++;
        test.push(t);
        setTestes(test);
      } else if (modulografico === 3 && t.numero > 10 && t.numero < 16) {
        media += t.pcm;
        divisor++;
        test.push(t);
        setTestes(test);
      } else if (modulografico === 4 && t.numero > 15 && t.numero < 21) {
        media += t.pcm;
        divisor++;
        test.push(t);
        setTestes(test);
      } else if (modulografico === 5 && t.numero > 0 && t.numero < 21) {
        media += t.pcm;
        divisor++;
        test.push(t);
        setTestes(test);
      }
    });

    const med = media / divisor;

    setEvolucao(med.toFixed(1) / testeinicial);
  }

  async function loadTesteInicial(id) {
    const response = await api.put(`testealuno/${id}`);

    if (response.data.length) {
      console.log('Teste Inicial: ', response.data[0]);

      const tInicial = response.data[0].pcm;
      const datatInicial = response.data[0].createdAt;

      setTesteinicial(tInicial);
      setDataTesteinicial(datatInicial);
    }
  }

  async function criarProva() {
    await api.post(`provas`);

    const response = await api.get(`provas`);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    // fazerProva();
  }

  async function loadUltimaProva(id) {
    const response2 = await api.get(`provasfinalizadas`);

    setAtual(response2.data.length + 1);
  }

  useEffect(() => {
    async function loadPerfil() {
      setPerfil(perf.perfil);
    }

    loadPerfil();

    loadUltimaProva(id);
  }, []);

  useEffect(() => {
    criarProva();
    loadProvas();
    loadTestes(id);
  }, [testeinicial, dataTesteinicial, modulografico, id]);

  const numT = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

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
            <Link to="/avancado">
              <small>Módulo Avançado</small>
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
          {/* <BtModulos>
            <Link to="/intermediario">Módulo Intermediário</Link>
            |
            <Link to="/avancado">Módulo Avançado</Link>
            |
            <Link to="/avaliacao">Avaliando seu Desempenho</Link>
          </BtModulos> */}
          <Titulo>GRÁFICO DEMONSTRATIVO DO SEU DESEMPENHO</Titulo>

          <Ladodireito>
            {!prova && <Default onClick={criarProva}>Iniciar teste</Default>}
            {/* {prova && provafinalizada && (
              <>
                <h2>
                  {provafinalizada && (
                    <Link
                      to={`/grafico/${prova.id}`}
                      onClick={() => {
                        setModulografico(1);
                        setPorcentagem(0);
                        window.scrollTo(0, 0);
                        setAtual(provafinalizada.length + 1);
                      }}
                    >
                      Prova {provafinalizada.length + 1}
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
            )} */}

            <ul>
              {/* {provafinalizada.length ? provafinalizada.map((p, i) => {
                      return (
                        <li key={p.id}>
                          <Link
                            to={`/grafico/${p.id}`}
                            onClick={() => {
                              setModulografico(1);
                              setPorcentagem(0);
                              window.scrollTo(0, 0);
                              setAtual(i + 1);
                            }}
                          >
                            Prova {i + 1}
                          </Link>
                        </li>
                      );
                    }) : ''} */}

              {prova && (
                <li>
                  Prova em andamento: {provafinalizada.length + 1}
                  {/* {porcentagem > 0 && (
                          <small>
                            {' '}
                            (progresso: {porcentagem ? porcentagem : 0}%)
                          </small>
                        )} */}
                  {provafinalizada.length ? (
                        <button
                          onClick={() => {
                            finalizarProva();
                            setPorcentagem(0);
                          }}
                        >
                          Finalizar
                        </button>
                        ) : ''}
                </li>
              )}
            </ul>
            <p>(Clique nos testes para acessar os gráficos)</p>
          </Ladodireito>
          <br />
          <br />
          {/* <Titulo2>
            <br />
            <small>Gráfico demonstrativo da</small> Prova {atual}{' '}
            <small>em relação ao seu Teste Inicial</small>
          </Titulo2> */}
          <BtModulos>
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>
                    <span>Módulo Intermediário</span>
                  </th>
                  <th>
                    <span>Módulo Intermediário</span>
                  </th>
                  <th>
                    <span>Módulo Avançado</span>
                  </th>
                  <th>
                    <span>Módulo Avançado</span>
                  </th>
                  <th>
                    <span>Todos os módulos</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {provafinalizada.length
                  ? provafinalizada.map((p, i) => {
                    return (
                      <tr>
                        <td>Prova {i + 1}</td>
                        <td>
                          <Link
                            to={`/grafico/${p.id}`}
                            onClick={() => setModulografico(1)}
                          >
                            {modulografico === 1 && p.id === id ? (
                              <span>Testes 1 a 5</span>
                            ) : (
                              <small>Testes 1 a 5</small>
                            )}
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/grafico/${p.id}`}
                            onClick={() => setModulografico(2)}
                          >
                            {modulografico === 2 && p.id === id ? (
                              <span>Testes 6 a 10</span>
                            ) : (
                              <small>Testes 6 a 10</small>
                            )}
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/grafico/${p.id}`}
                            onClick={() => setModulografico(3)}
                          >
                            {modulografico === 3 && p.id === id ? (
                              <span>Testes 11 a 15</span>
                            ) : (
                              <small>Testes 11 a 15</small>
                            )}
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/grafico/${p.id}`}
                            onClick={() => setModulografico(4)}
                          >
                            {modulografico === 4 && p.id === id ? (
                              <span>Testes 16 a 20</span>
                            ) : (
                              <small>Testes 16 a 20</small>
                            )}
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/grafico/${p.id}`}
                            onClick={() => setModulografico(5)}
                          >
                            {modulografico === 5 && p.id === id ? (
                              <span>Testes 1 a 20</span>
                            ) : (
                              <small>Testes 1 a 20</small>
                            )}
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                  : ''}
                {prova && (
                  <tr>
                    <td>Prova {provafinalizada.length + 1}</td>
                    <td>
                      <Link
                        to={`/grafico/${prova.id}`}
                        onClick={() => setModulografico(1)}
                      >
                        {modulografico === 1 && prova.id === id ? (
                          <span>Testes 1 a 5</span>
                        ) : (
                          <small>Testes 1 a 5</small>
                        )}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/grafico/${prova.id}`}
                        onClick={() => setModulografico(2)}
                      >
                        {modulografico === 2 && prova.id === id ? (
                          <span>Testes 6 a 10</span>
                        ) : (
                          <small>Testes 6 a 10</small>
                        )}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/grafico/${prova.id}`}
                        onClick={() => setModulografico(3)}
                      >
                        {modulografico === 3 && prova.id === id ? (
                          <span>Testes 11 a 15</span>
                        ) : (
                          <small>Testes 11 a 15</small>
                        )}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/grafico/${prova.id}`}
                        onClick={() => setModulografico(4)}
                      >
                        {modulografico === 4 && prova.id === id ? (
                          <span>Testes 16 a 20</span>
                        ) : (
                          <small>Testes 16 a 20</small>
                        )}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/grafico/${prova.id}`}
                        onClick={() => setModulografico(5)}
                      >
                        {modulografico === 5 && prova.id === id ? (
                          <span>Testes 1 a 20</span>
                        ) : (
                          <small>Testes 1 a 20</small>
                        )}
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </BtModulos>

          {/* <BtModulos>
            <span>Módulo Intermediário</span>
            <span>Módulo Intermediário</span>
            <span>Módulo Avançado</span>
            <span>Módulo Avançado</span>
            <span>Todos os módulos</span>
          </BtModulos>
          {provafinalizada.length ? provafinalizada.map((p, i) => {
            return (
              <BtModulos>
                <Link to={`/grafico/${p.id}`} onClick={() => setModulografico(1)}>{(modulografico === 1 && p.id === id) ? <span>Testes 1 a 5 {p.createdAt.split('T')[0].split('-').reverse().join('/')}</span> : <small>Testes 1 a 5 {p.createdAt.split('T')[0].split('-').reverse().join('/')}</small>}</Link>
                <Link to={`/grafico/${p.id}`} onClick={() => setModulografico(2)}>{(modulografico === 2 && p.id === id) ? <span>Testes 6 a 10 {p.createdAt.split('T')[0].split('-').reverse().join('/')}</span> : <small>Testes 6 a 10 {p.createdAt.split('T')[0].split('-').reverse().join('/')}</small>}</Link>
                <Link to={`/grafico/${p.id}`} onClick={() => setModulografico(3)}>{(modulografico === 3 && p.id === id) ? <span>Testes 11 a 15 {p.createdAt.split('T')[0].split('-').reverse().join('/')}</span> : <small>Testes 11 a 15 {p.createdAt.split('T')[0].split('-').reverse().join('/')}</small>}</Link>
                <Link to={`/grafico/${p.id}`} onClick={() => setModulografico(4)}>{(modulografico === 4 && p.id === id) ? <span>Testes 16 a 20 {p.createdAt.split('T')[0].split('-').reverse().join('/')}</span> : <small>Testes 16 a 20 {p.createdAt.split('T')[0].split('-').reverse().join('/')}</small>}</Link>
                <Link to={`/grafico/${p.id}`} onClick={() => setModulografico(5)}>{(modulografico === 5 && p.id === id) ? <span>Testes 1 a 20 {p.createdAt.split('T')[0].split('-').reverse().join('/')}</span> : <small>Testes 1 a 20 {p.createdAt.split('T')[0].split('-').reverse().join('/')}</small>}</Link>
              </BtModulos>
            );
          }) : ''}
          {prova && (
            <BtModulos>
              <Link to={`/grafico/${prova.id}`} onClick={() => setModulografico(1)}>{(modulografico === 1 && prova.id === id) ? <span>Testes 1 a 5 {prova.createdAt.split('T')[0].split('-').reverse().join('/')}</span> : <small>Testes 1 a 5 {prova.createdAt.split('T')[0].split('-').reverse().join('/')}</small>}</Link>
              <Link to={`/grafico/${prova.id}`} onClick={() => setModulografico(2)}>{(modulografico === 2 && prova.id === id) ? <span>Testes 6 a 10 {prova.createdAt.split('T')[0].split('-').reverse().join('/')}</span> : <small>Testes 6 a 10 {prova.createdAt.split('T')[0].split('-').reverse().join('/')}</small>}</Link>
              <Link to={`/grafico/${prova.id}`} onClick={() => setModulografico(3)}>{(modulografico === 3 && prova.id === id) ? <span>Testes 11 a 15 {prova.createdAt.split('T')[0].split('-').reverse().join('/')}</span> : <small>Testes 11 a 15 {prova.createdAt.split('T')[0].split('-').reverse().join('/')}</small>}</Link>
              <Link to={`/grafico/${prova.id}`} onClick={() => setModulografico(4)}>{(modulografico === 4 && prova.id === id) ? <span>Testes 16 a 20 {prova.createdAt.split('T')[0].split('-').reverse().join('/')}</span> : <small>Testes 16 a 20 {prova.createdAt.split('T')[0].split('-').reverse().join('/')}</small>}</Link>
              <Link to={`/grafico/${prova.id}`} onClick={() => setModulografico(5)}>{(modulografico === 5 && prova.id === id) ? <span>Testes 1 a 20 {prova.createdAt.split('T')[0].split('-').reverse().join('/')}</span> : <small>Testes 1 a 20 {prova.createdAt.split('T')[0].split('-').reverse().join('/')}</small>}</Link>
            </BtModulos>
          )} */}
          <Titulo2>
            <br />
            {evolucao > 0 && (
              <>
                <small>Você melhorou </small>
                {evolucao.toFixed(1)}
                <small> vezes em relação ao Teste Inicial</small>
              </>
            )}
          </Titulo2>

          {testeinicial ? (
            <Box1>
              <strong>Testes</strong>
              <strong>PCMs</strong>
              <small>Meta:<br />640 PCMs</small>
              <div className="numeros">
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
              <Teste height={testeinicial / 2} bg="#135c58">
                <span>
                  <p>{testeinicial}
                  </p>
                </span>
                <span>
                  <p>
                    Inicial
                    <br />
                    <h6>{dataTesteinicial && dataTesteinicial
                      .split('T')[0]
                      .split('-')
                      .reverse()
                      .join('/')}
                    </h6>
                  </p>
                </span>
              </Teste>
              {testes.map(
                (t) =>
                  t.numero > 0 && (
                    <Teste key={t.id} height={t.pcm / 2} bg="#135c58">
                      <span>
                        <p>{t.pcm}</p>
                      </span>
                      <span>
                        <p>{t.numero}<br />
                          <h6>{t.createdAt
                            .split('T')[0]
                            .split('-')
                            .reverse()
                            .join('/')}
                          </h6>
                        </p>
                      </span>
                    </Teste>
                  )
              )}

              {/* <Span left="10">Módulo Intermediário: 1 a 10</Span>
              <Span left="50">Módulo Avançado: 11 a 20</Span> */}
            </Box1>
          ) : (
            <Box1>
              <h2>Você não realizou testes</h2>
            </Box1>
          )}
        </div>
      </Prod>
    </Container>
  );
}
