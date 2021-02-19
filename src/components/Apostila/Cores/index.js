import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  updateProvaRequest,
  updateRespostaRequest,
} from '~/store/modules/usuario/actions';

import Barra from '~/components/Barra';

import {
  Prod,
  ListaProdutos,
  Strong,
  Circulo,
  Direita,
  Cima,
  Baixo,
  Voltar,
} from './styles';

import api from '~/services/api';

import icoConcluido from '~/assets/ico-concluido.jpg';
import reiniciar from '~/assets/reiniciar.png';

export default function Opcoes02(props) {
  const [contador, setContador] = useState(0);
  const [contagem, setContagem] = useState(true);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [grupo, setGrupo] = useState(1);
  const [left, setLeft] = useState(12);
  const [top, setTop] = useState(5);
  const [espaco, setEspaco] = useState();
  const [direita, setDireita] = useState(false);
  const [cima, setCima] = useState(false);
  const [baixo, setBaixo] = useState(false);
  const [apresentacao, setApresentacao] = useState(false);

  const isMountedRef = useRef(null);

  const { ex, exercicio, pergunta, aula } = props;

  const exercicio_id = parseInt(exercicio);

  const dispatch = useDispatch();

  const resp = useSelector((state) => state.usuario);

  async function loadProva() {
    const response = await api.get(`provas2/${aula}`);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data.id;

    const respostaExiste = await api.get(
      `respostaid?prova_id=${prova_id}&exercicio_id=${exercicio_id}`
    );

    if (respostaExiste.data) {
      setConcluido(true);

      const re = resp.resposta.filter((r) => r === exercicio_id);

      if (!re) dispatch(updateRespostaRequest(exercicio_id));
    }
  }

  async function loadResposta() {
    try {
      await api.post('resposta', {
        resposta: 0,
        prova_id: prova.id,
        exercicio_id,
      });

      const response = await api.get(`provas2/${aula}`);

      setProva(response.data);
      dispatch(updateProvaRequest(response.data));
      dispatch(updateRespostaRequest(exercicio_id));

      setContagem(true);
      setContador(null);
      setConcluido(true);

      loadProva();

      // toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      setContagem(true);
      setContador(null);
    }
  }

  function loadAsterisco1(vel) {
    setTop(5);
    setEspaco(5);
    setGrupo(1);
    let i = 0;
    const pos = [19, 49, 80];
    const ast1 = setInterval(() => {
      setLeft(pos[i]);
      if (i === 2) return clearInterval(ast1);
      i += 1;
    }, vel);
  }

  function loadAsterisco2(vel) {
    setTop(60);
    setEspaco(5);
    setGrupo(2);
    let i = 0;
    const pos = [80, 49, 19];
    const ast2 = setInterval(() => {
      setLeft(pos[i]);
      if (i === 2) return clearInterval(ast2);
      i += 1;
    }, vel);
  }

  function loadAsterisco3(vel) {
    setEspaco(0);
    setGrupo(3);
    let i = 0;
    let j = 0;
    const posTop = [-5, 22, 50, 77];
    const posLeft = [19, 49, 80, 80, 49, 19, 19, 49, 80, 80, 49, 19];
    const ast5 = setInterval(() => {
      setTop(posTop[j]);
      setLeft(posLeft[i]);
      if (i === 11) return clearInterval(ast5);
      i += 1;
      if (i % 3 === 0) j += 1;
    }, vel);
  }

  function loadAsterisco4(vel) {
    setEspaco(0);
    setGrupo(3);
    let i = 0;
    let j = 0;
    const posTop = [77, 50, 22, -5];
    const posLeft = [19, 49, 80, 80, 49, 19, 19, 49, 80, 80, 49, 19];
    const ast6 = setInterval(() => {
      setTop(posTop[j]);
      setLeft(posLeft[i]);
      if (i === 11) return clearInterval(ast6);
      i += 1;
      if (i % 3 === 0) j += 1;
    }, vel);
  }

  function loadAsterisco5(vel) {
    setEspaco(0);
    setGrupo(3);
    let i = 0;
    let j = 0;
    const posTop = [-5, 22, 50, 77, 77, 50, 22, -5, -5, 22, 50, 77];
    const posLeft = [19, 49, 80];
    const ast7 = setInterval(() => {
      setTop(posTop[j]);
      setLeft(posLeft[i]);
      if (j === 11) return clearInterval(ast7);
      j += 1;
      if (j % 4 === 0) i += 1;
    }, vel);
  }

  function loadAsterisco6(vel) {
    setEspaco(0);
    setGrupo(3);
    let i = 0;
    let j = 0;
    const posTop = [77, 50, 22, -5, -5, 22, 50, 77, 77, 50, 22, -5];
    const posLeft = [80, 49, 19];
    const ast7 = setInterval(() => {
      setTop(posTop[j]);
      setLeft(posLeft[i]);
      if (j === 11) return clearInterval(ast7);
      j += 1;
      if (j % 4 === 0) i += 1;
    }, vel);
  }

  function loadContador(num) {
    let i = num;
    setContagem(true);

    if (i < 6 || (i >= 10 && i < 15) || (i >= 19 && i < 24)) {
      const c1 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco1(333);
        if (i === 6 || i === 15 || i === 24) {
          clearInterval(c1);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c1);
      }, 999);
    } else if (
      (i >= 6 && i < 10) ||
      (i >= 15 && i < 19) ||
      (i >= 24 && i < 28)
    ) {
      const c2 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco2(200);
        if (i === 10 || i === 19 || i === 28) {
          clearInterval(c2);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c2);
      }, 600);
    } else if (i >= 28 && i < 33) {
      const c3 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco1(150);
        if (i === 33) {
          clearInterval(c3);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c3);
      }, 450);
    } else if (i >= 33 && i < 37) {
      const c4 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco2(150);
        if (i === 37) {
          clearInterval(c4);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c4);
      }, 450);
    } else if (i >= 37 && i < 39) {
      const c5 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco3(150);
        if (i === 39) {
          clearInterval(c5);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c5);
      }, 1800);
    } else if (i >= 39 && i < 41) {
      // setDireita(true);
      const c6 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco4(150);
        setDireita(false);
        if (i === 41) {
          clearInterval(c6);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c6);
      }, 1800);
    } else if (i >= 41 && i < 43) {
      // setBaixo(true);
      const c7 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco5(150);
        setBaixo(false);
        if (i === 43) {
          clearInterval(c7);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c7);
      }, 1800);
    } else if (i >= 43 && i < 45) {
      // setCima(true);
      const c8 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco6(150);
        setCima(false);
        if (i === 45) {
          clearInterval(c8);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c8);
      }, 1800);
    } else if (i >= 45 && i < 47) {
      const c9 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco3(125);
        if (i === 47) {
          clearInterval(c9);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c9);
      }, 1500);
    } else if (i >= 47 && i < 49) {
      // setDireita(true);
      const c10 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco4(125);
        setDireita(false);
        if (i === 49) {
          clearInterval(c10);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c10);
      }, 1500);
    } else if (i >= 49 && i < 51) {
      // setBaixo(true);
      const c11 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco5(125);
        setBaixo(false);
        if (i === 51) {
          clearInterval(c11);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c11);
      }, 1500);
    } else if (i >= 51 && i < 53) {
      // setCima(true);
      const c12 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco6(125);
        setCima(false);
        if (i === 53) {
          clearInterval(c12);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c12);
      }, 1500);
    } else if (i >= 53 && i < 55) {
      const c13 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco3(100);
        if (i === 55) {
          clearInterval(c13);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c13);
      }, 1200);
    } else if (i >= 55 && i < 57) {
      // setDireita(true);
      const c14 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco4(100);
        setDireita(false);
        if (i === 57) {
          clearInterval(c14);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c14);
      }, 1200);
    } else if (i >= 57 && i < 59) {
      // setBaixo(true);
      const c15 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco5(100);
        setBaixo(false);
        if (i === 59) {
          clearInterval(c15);
          return loadContador(i);
        }

        if (!isMountedRef.current) return clearInterval(c15);
      }, 1200);
    } else if (i >= 59 && i <= 61) {
      // setCima(true);
      const c16 = setInterval(() => {
        i += 1;
        setContador(i);
        loadAsterisco6(100);
        setCima(false);
        if (i > 61) {
          // if (isMountedRef.current) loadResposta();
          setContagem(true);
          setContador(null);
          setConcluido(true);

          setContagem(false);
          isMountedRef.current = false;
          return clearInterval(c16);
        }

        if (!isMountedRef.current) return clearInterval(c16);
      }, 1200);
    }
  }

  async function loadProximo() {
    try {
      await api.post('resposta', {
        resposta: 100,
        prova_id: prova.id,
        exercicio_id,
      });

      const response = await api.get(`provas2/${aula}`);

      setProva(response.data);
      dispatch(updateProvaRequest(response.data));
      dispatch(updateRespostaRequest(exercicio_id));

      setContagem(true);

      loadProva();
    } catch (error) {
      setContagem(true);
    }
  }

  useEffect(() => {
    isMountedRef.current = true;

    setTimeout(() => setApresentacao(false), 2000);

    setConcluido(false);
    setContador(0);
    setContagem(true);

    if (isMountedRef.current) loadProva();

    return () => {
      isMountedRef.current = false;
    };
  }, [exercicio]);

  return (
    <>
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
            <Link to={`/basico/aula0${aula}`}>
              <small>Aula 0{aula}</small>
            </Link>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      {/* <Barra exercicio={exercicio_id} nota={prova && prova.nota} /> */}
      <Prod>
        <div>
          <h3>{ex}</h3>
        </div>
        {apresentacao && (
          <div>
            <h2>{pergunta}</h2>
          </div>
        )}
        {!apresentacao && (
          <div>
            {contagem && contador >= 1 && (
              <ListaProdutos espaco={espaco} left={left} top={top}>
                <strong>*</strong>
                {cima && (
                  <Cima bottom="15" right="5">
                    &uarr;
                  </Cima>
                )}
                {direita && (
                  <Direita bottom="15" left="5">
                    &rarr;
                  </Direita>
                )}
                {baixo && (
                  <Baixo top="-15" left="5">
                    &darr;
                  </Baixo>
                )}
                {(grupo === 1 || grupo === 3) && (
                  <Circulo bg="ffcc66">*</Circulo>
                )}
                {(grupo === 1 || grupo === 3) && (
                  <Circulo bg="c0dcc0">*</Circulo>
                )}
                {(grupo === 1 || grupo === 3) && (
                  <Circulo bg="cc33ff">*</Circulo>
                )}
                {grupo === 1 && <Circulo bg="fff">*</Circulo>}
                {grupo === 1 && <Circulo bg="fff">*</Circulo>}
                {grupo === 1 && <Circulo bg="fff">*</Circulo>}
                {grupo === 2 && <Circulo bg="fff">*</Circulo>}
                {grupo === 2 && <Circulo bg="fff">*</Circulo>}
                {grupo === 2 && <Circulo bg="fff">*</Circulo>}
                {(grupo === 2 || grupo === 3) && (
                  <Circulo bg="00ff33">*</Circulo>
                )}
                {(grupo === 2 || grupo === 3) && (
                  <Circulo bg="cc0033">*</Circulo>
                )}
                {(grupo === 2 || grupo === 3) && (
                  <Circulo bg="996600">*</Circulo>
                )}
                {grupo === 3 && <Circulo bg="ffff99">*</Circulo>}
                {grupo === 3 && <Circulo bg="99cc99">*</Circulo>}
                {grupo === 3 && <Circulo bg="ffff00">*</Circulo>}
                {grupo === 3 && <Circulo bg="cc9900">*</Circulo>}
                {grupo === 3 && <Circulo bg="ff9999">*</Circulo>}
                {grupo === 3 && <Circulo bg="880000">*</Circulo>}
              </ListaProdutos>
            )}
            {contador === 0 && (
              <div>
                <button onClick={() => loadContador(1)}>Iniciar</button>
              </div>
            )}
            {/* {concluido && (
              <Strong>
                Concluído <img src={icoConcluido} alt="Exercício concluído" />
              </Strong>
            )}

            {!concluido && !contador && (
              <small>
                *A nota será contabilizada após a conclusão do exercício. <br />
                ** Ao clicar em próximo sem responder, a questão será
                contabilizada como errada.
              </small>
            )}
            {concluido && !contador && (
              <small>*A nota deste exercício já foi contabilizada.</small>
            )} */}

            {!isMountedRef.current && (
              <div>
                {/* {exercicio > 186 && (
              <Link to={`/percepcaovisual/${exercicio - 1}`}>Anterior</Link>
            )} */}
                {exercicio < 207 && (
                  <>
                    <button
                      onClick={() => {
                        loadContador(1);
                        setGrupo(100);
                        isMountedRef.current = true;
                      }}
                    >
                      <img src={reiniciar} alt="Reiniciar" />
                    </button>
                    {/* <Link
                      onClick={() => loadProximo()}
                      to={`/apostila/${exercicio + 1}`}
                    >
                      Próximo &raquo;
                    </Link> */}
                  </>
                )}
              </div>
            )}
          </div>
        )}
        <div> </div>
      </Prod>
    </>
  );
}
