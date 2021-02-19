import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Barra from '~/components/Barra';

import {
  updateProvaRequest,
  updateRespostaRequest,
} from '~/store/modules/usuario/actions';

import { Container, Prod, Strong, Span } from './styles';

import api from '~/services/api';

import c110 from '~/assets/memorizacao/4/110.jpg';
import c109 from '~/assets/memorizacao/4/109.jpg';
import c108 from '~/assets/memorizacao/4/108.jpg';
import c107 from '~/assets/memorizacao/4/107.jpg';
import c106 from '~/assets/memorizacao/4/106.jpg';
import c105 from '~/assets/memorizacao/4/105.jpg';
import c104 from '~/assets/memorizacao/4/104.jpg';
import c103 from '~/assets/memorizacao/4/103.jpg';
import c102 from '~/assets/memorizacao/4/102.jpg';
import c101 from '~/assets/memorizacao/4/101.jpg';
import c100 from '~/assets/memorizacao/4/100.jpg';
import c99 from '~/assets/memorizacao/4/99.jpg';
import c98 from '~/assets/memorizacao/4/98.jpg';
import c97 from '~/assets/memorizacao/4/97.jpg';
import c96 from '~/assets/memorizacao/4/96.jpg';
import c95 from '~/assets/memorizacao/4/95.jpg';
import c94 from '~/assets/memorizacao/4/94.jpg';
import c93 from '~/assets/memorizacao/4/93.jpg';
import c92 from '~/assets/memorizacao/4/92.jpg';
import c91 from '~/assets/memorizacao/4/91.jpg';
import c90 from '~/assets/memorizacao/3/90.jpg';
import c89 from '~/assets/memorizacao/3/89.jpg';
import c88 from '~/assets/memorizacao/3/88.jpg';
import c87 from '~/assets/memorizacao/3/87.jpg';
import c86 from '~/assets/memorizacao/3/86.jpg';
import c85 from '~/assets/memorizacao/3/85.jpg';
import c84 from '~/assets/memorizacao/3/84.jpg';
import c83 from '~/assets/memorizacao/3/83.jpg';
import c82 from '~/assets/memorizacao/3/82.jpg';
import c81 from '~/assets/memorizacao/3/81.jpg';
import c80 from '~/assets/memorizacao/3/80.jpg';
import c79 from '~/assets/memorizacao/3/79.jpg';
import c78 from '~/assets/memorizacao/3/78.jpg';
import c77 from '~/assets/memorizacao/3/77.jpg';
import c76 from '~/assets/memorizacao/3/76.jpg';
import c75 from '~/assets/memorizacao/3/75.jpg';
import c74 from '~/assets/memorizacao/3/74.jpg';
import c73 from '~/assets/memorizacao/3/73.jpg';
import c72 from '~/assets/memorizacao/3/72.jpg';
import c71 from '~/assets/memorizacao/3/71.jpg';
import c70 from '~/assets/memorizacao/3/70.jpg';
import c69 from '~/assets/memorizacao/3/69.jpg';
import c68 from '~/assets/memorizacao/3/68.jpg';
import c67 from '~/assets/memorizacao/3/67.jpg';
import c66 from '~/assets/memorizacao/3/66.jpg';
import c65 from '~/assets/memorizacao/3/65.jpg';
import c64 from '~/assets/memorizacao/3/64.jpg';
import c63 from '~/assets/memorizacao/3/63.jpg';
import c62 from '~/assets/memorizacao/3/62.jpg';
import c61 from '~/assets/memorizacao/3/61.jpg';
import c60 from '~/assets/memorizacao/2/60.jpg';
import c59 from '~/assets/memorizacao/2/59.jpg';
import c58 from '~/assets/memorizacao/2/58.jpg';
import c57 from '~/assets/memorizacao/2/57.jpg';
import c56 from '~/assets/memorizacao/2/56.jpg';
import c55 from '~/assets/memorizacao/2/55.jpg';
import c54 from '~/assets/memorizacao/2/54.jpg';
import c53 from '~/assets/memorizacao/2/53.jpg';
import c52 from '~/assets/memorizacao/2/52.jpg';
import c51 from '~/assets/memorizacao/2/51.jpg';
import c50 from '~/assets/memorizacao/2/50.jpg';
import c49 from '~/assets/memorizacao/2/49.jpg';
import c48 from '~/assets/memorizacao/2/48.jpg';
import c47 from '~/assets/memorizacao/2/47.jpg';
import c46 from '~/assets/memorizacao/2/46.jpg';
import c45 from '~/assets/memorizacao/2/45.jpg';
import c44 from '~/assets/memorizacao/2/44.jpg';
import c43 from '~/assets/memorizacao/2/43.jpg';
import c42 from '~/assets/memorizacao/2/42.jpg';
import c41 from '~/assets/memorizacao/2/41.jpg';
import c40 from '~/assets/memorizacao/2/40.jpg';
import c39 from '~/assets/memorizacao/2/39.jpg';
import c38 from '~/assets/memorizacao/2/38.jpg';
import c37 from '~/assets/memorizacao/2/37.jpg';
import c36 from '~/assets/memorizacao/2/36.jpg';
import c35 from '~/assets/memorizacao/2/35.jpg';
import c34 from '~/assets/memorizacao/2/34.jpg';
import c33 from '~/assets/memorizacao/2/33.jpg';
import c32 from '~/assets/memorizacao/2/32.jpg';
import c31 from '~/assets/memorizacao/2/31.jpg';
import c30 from '~/assets/memorizacao/1/30.jpg';
import c29 from '~/assets/memorizacao/1/29.jpg';
import c28 from '~/assets/memorizacao/1/28.jpg';
import c27 from '~/assets/memorizacao/1/27.jpg';
import c26 from '~/assets/memorizacao/1/26.jpg';
import c25 from '~/assets/memorizacao/1/25.jpg';
import c24 from '~/assets/memorizacao/1/24.jpg';
import c23 from '~/assets/memorizacao/1/23.jpg';
import c22 from '~/assets/memorizacao/1/22.jpg';
import c21 from '~/assets/memorizacao/1/21.jpg';
import c20 from '~/assets/memorizacao/1/20.jpg';
import c19 from '~/assets/memorizacao/1/19.jpg';
import c18 from '~/assets/memorizacao/1/18.jpg';
import c17 from '~/assets/memorizacao/1/17.jpg';
import c16 from '~/assets/memorizacao/1/16.jpg';
import c15 from '~/assets/memorizacao/1/15.jpg';
import c14 from '~/assets/memorizacao/1/14.jpg';
import c13 from '~/assets/memorizacao/1/13.jpg';
import c12 from '~/assets/memorizacao/1/12.jpg';
import c11 from '~/assets/memorizacao/1/11.jpg';
import c10 from '~/assets/memorizacao/1/10.jpg';
import c9 from '~/assets/memorizacao/1/09.jpg';
import c8 from '~/assets/memorizacao/1/08.jpg';
import c7 from '~/assets/memorizacao/1/07.jpg';
import c6 from '~/assets/memorizacao/1/06.jpg';
import c5 from '~/assets/memorizacao/1/05.jpg';
import c4 from '~/assets/memorizacao/1/04.jpg';
import c3 from '~/assets/memorizacao/1/03.jpg';
import c2 from '~/assets/memorizacao/1/02.jpg';
import c1 from '~/assets/memorizacao/1/01.jpg';

import icoConcluido from '~/assets/ico-concluido.jpg';
import reiniciar from '~/assets/reiniciar.png';

export default function Memorizacao(props) {
  const [exercicio, setExercicio] = useState();
  const [minimo, setMinimo] = useState();
  const [maximo, setMaximo] = useState();
  const [contador, setContador] = useState(0);
  const [iniciado, setIniciado] = useState(false);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [respostas, setRespostas] = useState();
  const [sequencia, setSequencia] = useState(1);
  const [span, setSpan] = useState(false);

  const isMountedRef = useRef(null);

  const id = parseInt(props.match.params.id);

  const { aula } = props;

  const exercicio_id = id;

  const dispatch = useDispatch();

  const resp = useSelector((state) => state.usuario);

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

      // toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      console.tron.log('O exercício já foi concluído!');
    }
  }

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

  function loadContador(maxi, mini) {
    let i = mini;
    let max = maxi;
    let seq = 1;
    const interval = setInterval(() => {
      setSpan(false);

      if (i > max) {
        seq += 1;
        setSequencia(seq);
        i = mini - 1;
        setContador(i);
        max -= 1;
        if (seq > 3) {
          if (isMountedRef.current) loadResposta();
          setConcluido(true);
          isMountedRef.current = false;
          setIniciado(false);
          return clearInterval(interval);
        }
      }

      setTimeout(() => {
        setSpan(true);
      }, 500);

      if (!isMountedRef.current) return clearInterval(interval);
      setContador(i);
      i += 1;
    }, 1326);
  }

  function iniciar(max, min) {
    setIniciado(true);
    isMountedRef.current = true;
    setSequencia(1);
    setContador(0);
    loadContador(max, min);
  }

  function loadExercicio() {
    setExercicio(id);
  }

  function loadNumeros(min, max) {
    setMinimo(min);
    setMaximo(max);
  }

  // function parar() {
  //   setIniciado(false);
  //   isMountedRef.current = false;
  // }

  // async function loadProximo() {
  //   try {
  //     await api.post('resposta', {
  //       resposta: 100,
  //       prova_id: prova.id,
  //       exercicio_id,
  //     });

  //     const response = await api.get(`provas2/${aula}`);

  //     setProva(response.data);
  //     dispatch(updateProvaRequest(response.data));
  //     dispatch(updateRespostaRequest(exercicio_id));

  //     setIniciado(false);
  //     isMountedRef.current = true;
  //     setSequencia(1);

  //     loadProva();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    async function loadRespostas() {
      setRespostas(resp.resposta);
    }

    loadRespostas();
  }, [resp.resposta]);

  useEffect(() => {
    isMountedRef.current = true;

    if (isMountedRef.current) loadProva();
    loadExercicio();

    if (id === 328) {
      loadNumeros(1, 30);
      setContador(30);
    }
    if (id === 329) {
      loadNumeros(31, 60);
      setContador(60);
    }
    if (id === 330) {
      loadNumeros(61, 90);
      setContador(90);
    }
    if (id === 331) {
      loadNumeros(91, 100);
      setContador(100);
    }

    return () => {
      isMountedRef.current = false;
    };
  }, [id]);

  return (
    <Container>
      <Barra
        categoria="Memória"
        modulo="Código alfa-numérico"
        tipo="Repasses"
        exercicio={exercicio}
        nota={prova && prova.nota}
      />
      <Prod>
        <div>
          <h1>
            Repasses: {minimo} - {maximo === 100 ? '0' : maximo}
          </h1>
        </div>
        {iniciado && (
          <div>
            {contador === 1 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c11} alt="Cronômetro" />
              </strong>
            )}
            {contador === 2 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c19} alt="Cronômetro" />
                </strong>
              )}
            {contador === 3 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c1} alt="Cronômetro" />
              </strong>
            )}
            {contador === 4 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c24} alt="Cronômetro" />
                </strong>
              )}
            {contador === 5 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c2} alt="Cronômetro" />
              </strong>
            )}
            {contador === 6 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c15} alt="Cronômetro" />
                </strong>
              )}
            {contador === 7 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c3} alt="Cronômetro" />
              </strong>
            )}
            {contador === 8 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c29} alt="Cronômetro" />
                </strong>
              )}
            {contador === 9 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c13} alt="Cronômetro" />
              </strong>
            )}
            {contador === 10 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c22} alt="Cronômetro" />
                </strong>
              )}
            {contador === 11 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c8} alt="Cronômetro" />
              </strong>
            )}
            {contador === 12 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c26} alt="Cronômetro" />
                </strong>
              )}
            {contador === 13 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c17} alt="Cronômetro" />
              </strong>
            )}
            {contador === 14 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c27} alt="Cronômetro" />
                </strong>
              )}
            {contador === 15 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c6} alt="Cronômetro" />
              </strong>
            )}
            {contador === 16 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c14} alt="Cronômetro" />
                </strong>
              )}
            {contador === 17 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c4} alt="Cronômetro" />
              </strong>
            )}
            {contador === 18 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c20} alt="Cronômetro" />
                </strong>
              )}
            {contador === 19 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c9} alt="Cronômetro" />
              </strong>
            )}
            {contador === 20 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c16} alt="Cronômetro" />
                </strong>
              )}
            {contador === 21 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c23} alt="Cronômetro" />
              </strong>
            )}
            {contador === 22 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c7} alt="Cronômetro" />
                </strong>
              )}
            {contador === 23 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c18} alt="Cronômetro" />
              </strong>
            )}
            {contador === 24 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c10} alt="Cronômetro" />
                </strong>
              )}
            {contador === 25 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c5} alt="Cronômetro" />
              </strong>
            )}
            {contador === 26 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c28} alt="Cronômetro" />
                </strong>
              )}
            {contador === 27 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c12} alt="Cronômetro" />
              </strong>
            )}
            {contador === 28 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c30} alt="Cronômetro" />
                </strong>
              )}
            {contador === 29 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c21} alt="Cronômetro" />
              </strong>
            )}
            {contador === 30 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c25} alt="Cronômetro" />
                </strong>
              )}

            {contador === 31 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c34} alt="Cronômetro" />
              </strong>
            )}
            {contador === 32 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c32} alt="Cronômetro" />
                </strong>
              )}
            {contador === 33 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c51} alt="Cronômetro" />
              </strong>
            )}
            {contador === 34 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c41} alt="Cronômetro" />
                </strong>
              )}
            {contador === 35 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c37} alt="Cronômetro" />
              </strong>
            )}
            {contador === 36 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c58} alt="Cronômetro" />
                </strong>
              )}
            {contador === 37 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c47} alt="Cronômetro" />
              </strong>
            )}
            {contador === 38 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c50} alt="Cronômetro" />
                </strong>
              )}
            {contador === 39 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c54} alt="Cronômetro" />
              </strong>
            )}
            {contador === 40 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c35} alt="Cronômetro" />
                </strong>
              )}
            {contador === 41 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c48} alt="Cronômetro" />
              </strong>
            )}
            {contador === 42 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c44} alt="Cronômetro" />
                </strong>
              )}
            {contador === 43 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c56} alt="Cronômetro" />
              </strong>
            )}
            {contador === 44 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c39} alt="Cronômetro" />
                </strong>
              )}
            {contador === 45 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c59} alt="Cronômetro" />
              </strong>
            )}
            {contador === 46 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c45} alt="Cronômetro" />
                </strong>
              )}
            {contador === 47 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c53} alt="Cronômetro" />
              </strong>
            )}
            {contador === 48 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c36} alt="Cronômetro" />
                </strong>
              )}
            {contador === 49 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c40} alt="Cronômetro" />
              </strong>
            )}
            {contador === 50 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c60} alt="Cronômetro" />
                </strong>
              )}
            {contador === 51 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c31} alt="Cronômetro" />
              </strong>
            )}
            {contador === 52 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c42} alt="Cronômetro" />
                </strong>
              )}
            {contador === 53 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c57} alt="Cronômetro" />
              </strong>
            )}
            {contador === 54 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c49} alt="Cronômetro" />
                </strong>
              )}
            {contador === 55 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c55} alt="Cronômetro" />
              </strong>
            )}
            {contador === 56 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c38} alt="Cronômetro" />
                </strong>
              )}
            {contador === 57 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c43} alt="Cronômetro" />
              </strong>
            )}
            {contador === 58 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c52} alt="Cronômetro" />
                </strong>
              )}
            {contador === 59 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c33} alt="Cronômetro" />
              </strong>
            )}
            {contador === 60 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c46} alt="Cronômetro" />
                </strong>
              )}

            {contador === 61 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c63} alt="Cronômetro" />
              </strong>
            )}
            {contador === 62 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c71} alt="Cronômetro" />
                </strong>
              )}
            {contador === 63 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c73} alt="Cronômetro" />
              </strong>
            )}
            {contador === 64 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c69} alt="Cronômetro" />
                </strong>
              )}
            {contador === 65 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c80} alt="Cronômetro" />
              </strong>
            )}
            {contador === 66 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c66} alt="Cronômetro" />
                </strong>
              )}
            {contador === 67 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c75} alt="Cronômetro" />
              </strong>
            )}
            {contador === 68 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c62} alt="Cronômetro" />
                </strong>
              )}
            {contador === 69 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c77} alt="Cronômetro" />
              </strong>
            )}
            {contador === 70 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c85} alt="Cronômetro" />
                </strong>
              )}
            {contador === 71 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c90} alt="Cronômetro" />
              </strong>
            )}
            {contador === 72 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c65} alt="Cronômetro" />
                </strong>
              )}
            {contador === 73 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c76} alt="Cronômetro" />
              </strong>
            )}
            {contador === 74 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c64} alt="Cronômetro" />
                </strong>
              )}
            {contador === 75 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c82} alt="Cronômetro" />
              </strong>
            )}
            {contador === 76 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c88} alt="Cronômetro" />
                </strong>
              )}
            {contador === 77 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c89} alt="Cronômetro" />
              </strong>
            )}
            {contador === 78 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c78} alt="Cronômetro" />
                </strong>
              )}
            {contador === 79 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c68} alt="Cronômetro" />
              </strong>
            )}
            {contador === 80 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c84} alt="Cronômetro" />
                </strong>
              )}
            {contador === 81 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c74} alt="Cronômetro" />
              </strong>
            )}
            {contador === 82 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c87} alt="Cronômetro" />
                </strong>
              )}
            {contador === 83 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c61} alt="Cronômetro" />
              </strong>
            )}
            {contador === 84 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c70} alt="Cronômetro" />
                </strong>
              )}
            {contador === 85 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c81} alt="Cronômetro" />
              </strong>
            )}
            {contador === 86 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c83} alt="Cronômetro" />
                </strong>
              )}
            {contador === 87 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c67} alt="Cronômetro" />
              </strong>
            )}
            {contador === 88 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c86} alt="Cronômetro" />
                </strong>
              )}
            {contador === 89 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c79} alt="Cronômetro" />
              </strong>
            )}
            {contador === 90 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c72} alt="Cronômetro" />
                </strong>
              )}

            {contador === 91 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c105} alt="Cronômetro" />
              </strong>
            )}
            {contador === 92 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c98} alt="Cronômetro" />
                </strong>
              )}
            {contador === 93 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c92} alt="Cronômetro" />
              </strong>
            )}
            {contador === 94 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c100} alt="Cronômetro" />
                </strong>
              )}
            {contador === 95 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c93} alt="Cronômetro" />
              </strong>
            )}
            {contador === 96 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c108} alt="Cronômetro" />
                </strong>
              )}
            {contador === 97 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c101} alt="Cronômetro" />
              </strong>
            )}
            {contador === 98 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c107} alt="Cronômetro" />
                </strong>
              )}
            {contador === 99 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c96} alt="Cronômetro" />
              </strong>
            )}
            {contador === 100 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c94} alt="Cronômetro" />
                </strong>
              )}
            {contador === 101 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c102} alt="Cronômetro" />
              </strong>
            )}
            {contador === 102 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c103} alt="Cronômetro" />
                </strong>
              )}
            {contador === 103 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c95} alt="Cronômetro" />
              </strong>
            )}
            {contador === 104 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c99} alt="Cronômetro" />
                </strong>
              )}
            {contador === 105 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c104} alt="Cronômetro" />
              </strong>
            )}
            {contador === 106 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c106} alt="Cronômetro" />
                </strong>
              )}
            {contador === 107 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c110} alt="Cronômetro" />
              </strong>
            )}
            {contador === 108 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c97} alt="Cronômetro" />
                </strong>
              )}
            {contador === 109 && (sequencia === 1 || sequencia === 2) && (
              <strong>
                <img src={c91} alt="Cronômetro" />
              </strong>
            )}
            {contador === 110 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <strong>
                  <img src={c109} alt="Cronômetro" />
                </strong>
              )}

            {span && contador === 1 && (sequencia === 1 || sequencia === 3) && (
              <Span size="40" left="35" top="-60" color="red">
                11
              </Span>
            )}
            {span && contador === 2 && sequencia === 1 && (
              <Span size="20" left="55" top="20" color="red">
                19
              </Span>
            )}
            {span && contador === 3 && (sequencia === 1 || sequencia === 3) && (
              <Span size="20" left="55" top="20" color="red">
                1
              </Span>
            )}
            {span && contador === 4 && sequencia === 1 && (
              <Span size="20" left="55" top="-20" color="red">
                24
              </Span>
            )}
            {span && contador === 5 && (sequencia === 1 || sequencia === 3) && (
              <Span size="50" left="44" top="-130" color="red">
                2
              </Span>
            )}
            {span && contador === 6 && sequencia === 1 && (
              <Span size="18" left="45" top="-50" color="red">
                15
              </Span>
            )}
            {span && contador === 7 && (sequencia === 1 || sequencia === 3) && (
              <Span size="15" left="50" top="-12" color="red">
                3
              </Span>
            )}
            {span && contador === 8 && sequencia === 1 && (
              <Span size="18" left="42" top="-15" color="green">
                29
              </Span>
            )}
            {span && contador === 9 && (sequencia === 1 || sequencia === 3) && (
              <Span size="15" left="40" top="45" color="green">
                13
              </Span>
            )}
            {span && contador === 10 && sequencia === 1 && (
              <Span size="18" left="43" top="-50" color="red">
                22
              </Span>
            )}
            {span && contador === 11 && (sequencia === 1 || sequencia === 3) && (
              <Span size="34" left="45" top="-50" color="red">
                8
              </Span>
            )}
            {span && contador === 12 && sequencia === 1 && (
              <Span size="20" left="40" top="-45" color="red">
                26
              </Span>
            )}
            {span && contador === 13 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="55" top="-50" color="yellow">
                17
              </Span>
            )}
            {span && contador === 14 && sequencia === 1 && (
              <Span size="18" left="43" top="-45" color="red">
                27
              </Span>
            )}
            {span && contador === 15 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="55" top="-50" color="green">
                6
              </Span>
            )}
            {span && contador === 16 && sequencia === 1 && (
              <Span size="20" left="35" top="20" color="red">
                14
              </Span>
            )}
            {span && contador === 17 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="47" top="30" color="blue">
                4
              </Span>
            )}
            {span && contador === 18 && sequencia === 1 && (
              <Span size="18" left="42" top="-60" color="red">
                20
              </Span>
            )}
            {span && contador === 19 && (sequencia === 1 || sequencia === 3) && (
              <Span size="20" left="55" top="-30" color="red">
                9
              </Span>
            )}
            {span && contador === 20 && sequencia === 1 && (
              <Span size="35" left="35" top="-60" color="green">
                16
              </Span>
            )}
            {span && contador === 21 && (sequencia === 1 || sequencia === 3) && (
              <Span size="20" left="40" top="25" color="red">
                23
              </Span>
            )}
            {span && contador === 22 && sequencia === 1 && (
              <Span size="22" left="50" top="-60" color="red">
                7
              </Span>
            )}
            {span && contador === 23 && (sequencia === 1 || sequencia === 3) && (
              <Span size="20" left="43" top="-15" color="red">
                18
              </Span>
            )}
            {span && contador === 24 && sequencia === 1 && (
              <Span size="20" left="55" top="25" color="blue">
                10
              </Span>
            )}
            {span && contador === 25 && (sequencia === 1 || sequencia === 3) && (
              <Span size="20" left="55" top="-20" color="red">
                5
              </Span>
            )}
            {span && contador === 26 && sequencia === 1 && (
              <Span size="20" left="25" top="-55" color="green">
                28
              </Span>
            )}
            {span && contador === 27 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="45" top="-50" color="green">
                12
              </Span>
            )}
            {span && contador === 28 && sequencia === 1 && (
              <Span size="18" left="45" top="-50" color="green">
                30
              </Span>
            )}
            {span && contador === 29 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="55" top="-50" color="red">
                21
              </Span>
            )}
            {span && contador === 30 && sequencia === 1 && (
              <Span size="18" left="45" top="-50" color="red">
                25
              </Span>
            )}

            {span && contador === 31 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="40" top="-50" color="red">
                34
              </Span>
            )}
            {span && contador === 32 && sequencia === 1 && (
              <Span size="18" left="40" top="30" color="red">
                32
              </Span>
            )}
            {span && contador === 33 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="35" top="20" color="red">
                51
              </Span>
            )}
            {span && contador === 34 && sequencia === 1 && (
              <Span size="18" left="45" top="0" color="red">
                41
              </Span>
            )}
            {span && contador === 35 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="52" top="-20" color="red">
                37
              </Span>
            )}
            {span && contador === 36 && sequencia === 1 && (
              <Span size="15" left="47" top="-5" color="red">
                58
              </Span>
            )}
            {span && contador === 37 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="42" top="-80" color="red">
                47
              </Span>
            )}
            {span && contador === 38 && sequencia === 1 && (
              <Span size="18" left="35" top="20" color="blue">
                50
              </Span>
            )}
            {span && contador === 39 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="55" top="-20" color="red">
                54
              </Span>
            )}
            {span && contador === 40 && sequencia === 1 && (
              <Span size="18" left="42" top="-65" color="red">
                35
              </Span>
            )}
            {span && contador === 41 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="40" top="20" color="red">
                48
              </Span>
            )}
            {span && contador === 42 && sequencia === 1 && (
              <Span size="18" left="42" top="-40" color="red">
                44
              </Span>
            )}
            {span && contador === 43 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="42" top="40" color="green">
                56
              </Span>
            )}
            {span && contador === 44 && sequencia === 1 && (
              <Span size="18" left="25" top="0" color="red">
                39
              </Span>
            )}
            {span && contador === 45 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="25" top="20" color="blue">
                59
              </Span>
            )}
            {span && contador === 46 && sequencia === 1 && (
              <Span size="18" left="40" top="-50" color="green">
                45
              </Span>
            )}
            {span && contador === 47 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="55" top="-30" color="red">
                53
              </Span>
            )}
            {span && contador === 48 && sequencia === 1 && (
              <Span size="12" left="45" top="30" color="red">
                36
              </Span>
            )}
            {span && contador === 49 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="35" top="-50" color="green">
                40
              </Span>
            )}
            {span && contador === 50 && sequencia === 1 && (
              <Span size="18" left="40" top="-10" color="red">
                60
              </Span>
            )}
            {span && contador === 51 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="35" top="-50" color="green">
                31
              </Span>
            )}
            {span && contador === 52 && sequencia === 1 && (
              <Span size="18" left="48" top="10" color="red">
                42
              </Span>
            )}
            {span && contador === 53 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="45" top="-70" color="red">
                57
              </Span>
            )}
            {span && contador === 54 && sequencia === 1 && (
              <Span size="18" left="55" top="-50" color="green">
                49
              </Span>
            )}
            {span && contador === 55 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="55" top="-20" color="red">
                55
              </Span>
            )}
            {span && contador === 56 && sequencia === 1 && (
              <Span size="18" left="45" top="-50" color="red">
                38
              </Span>
            )}
            {span && contador === 57 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="45" top="-40" color="red">
                43
              </Span>
            )}
            {span && contador === 58 && sequencia === 1 && (
              <Span size="18" left="35" top="-40" color="green">
                52
              </Span>
            )}
            {span && contador === 59 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="45" top="-30" color="blue">
                33
              </Span>
            )}
            {span && contador === 60 && sequencia === 1 && (
              <Span size="18" left="50" top="20" color="green">
                46
              </Span>
            )}

            {span && contador === 61 && (sequencia === 1 || sequencia === 3) && (
              <Span size="15" left="40" top="40" color="red">
                63
              </Span>
            )}
            {span && contador === 62 && sequencia === 1 && (
              <Span size="18" left="50" top="-50" color="red">
                71
              </Span>
            )}
            {span && contador === 63 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="55" top="-30" color="red">
                73
              </Span>
            )}
            {span && contador === 64 && sequencia === 1 && (
              <Span size="18" left="35" top="-10" color="red">
                69
              </Span>
            )}
            {span && contador === 65 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="35" top="-30" color="red">
                80
              </Span>
            )}
            {span && contador === 66 && sequencia === 1 && (
              <Span size="18" left="45" top="0" color="blue">
                66
              </Span>
            )}
            {span && contador === 67 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="45" top="-50" color="red">
                75
              </Span>
            )}
            {span && contador === 68 && sequencia === 1 && (
              <Span size="18" left="45" top="40" color="red">
                62
              </Span>
            )}
            {span && contador === 69 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="35" top="30" color="red">
                77
              </Span>
            )}
            {span && contador === 70 && sequencia === 1 && (
              <Span size="18" left="55" top="0" color="green">
                85
              </Span>
            )}
            {span && contador === 71 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="40" top="0" color="red">
                90
              </Span>
            )}
            {span && contador === 72 && sequencia === 1 && (
              <Span size="18" left="45" top="40" color="red">
                65
              </Span>
            )}
            {span && contador === 73 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="55" top="-50" color="blue">
                76
              </Span>
            )}
            {span && contador === 74 && sequencia === 1 && (
              <Span size="18" left="35" top="-30" color="red">
                64
              </Span>
            )}
            {span && contador === 75 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="45" top="-50" color="red">
                82
              </Span>
            )}
            {span && contador === 76 && sequencia === 1 && (
              <Span size="18" left="45" top="-50" color="green">
                88
              </Span>
            )}
            {span && contador === 77 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="45" top="-50" color="red">
                89
              </Span>
            )}
            {span && contador === 78 && sequencia === 1 && (
              <Span size="18" left="45" top="-50" color="blue">
                78
              </Span>
            )}
            {span && contador === 79 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="50" top="20" color="green">
                68
              </Span>
            )}
            {span && contador === 80 && sequencia === 1 && (
              <Span size="18" left="40" top="-30" color="red">
                84
              </Span>
            )}
            {span && contador === 81 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="45" top="-50" color="red">
                74
              </Span>
            )}
            {span && contador === 82 && sequencia === 1 && (
              <Span size="18" left="55" top="0" color="red">
                87
              </Span>
            )}
            {span && contador === 83 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="55" top="-10" color="blue">
                61
              </Span>
            )}
            {span && contador === 84 && sequencia === 1 && (
              <Span size="18" left="35" top="10" color="red">
                70
              </Span>
            )}
            {span && contador === 85 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="45" top="-50" color="green">
                81
              </Span>
            )}
            {span && contador === 86 && sequencia === 1 && (
              <Span size="18" left="55" top="0" color="red">
                83
              </Span>
            )}
            {span && contador === 87 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="45" top="-30" color="green">
                67
              </Span>
            )}
            {span && contador === 88 && sequencia === 1 && (
              <Span size="18" left="35" top="0" color="red">
                86
              </Span>
            )}
            {span && contador === 89 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="55" top="-50" color="red">
                79
              </Span>
            )}
            {span && contador === 90 && sequencia === 1 && (
              <Span size="18" left="50" top="-50" color="red">
                72
              </Span>
            )}

            {span && contador === 91 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="30" top="0" color="red">
                05
              </Span>
            )}
            {span && contador === 92 && sequencia === 1 && (
              <Span size="18" left="50" top="-20" color="red">
                98
              </Span>
            )}
            {span && contador === 93 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="42" top="-50" color="red">
                92
              </Span>
            )}
            {span && contador === 94 && sequencia === 1 && (
              <Span size="18" left="45" top="-60" color="red">
                0
              </Span>
            )}
            {span && contador === 95 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="60" top="40" color="red">
                93
              </Span>
            )}
            {span && contador === 96 && sequencia === 1 && (
              <Span size="18" left="45" top="-20" color="red">
                08
              </Span>
            )}
            {span && contador === 97 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="50" top="-20" color="red">
                01
              </Span>
            )}
            {span && contador === 98 && sequencia === 1 && (
              <Span size="18" left="45" top="-20" color="red">
                07
              </Span>
            )}
            {span && contador === 99 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="45" top="-20" color="blue">
                96
              </Span>
            )}
            {span && contador === 100 && sequencia === 1 && (
              <Span size="18" left="45" top="30" color="red">
                94
              </Span>
            )}
            {span && contador === 101 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="50" top="-40" color="red">
                02
              </Span>
            )}
            {span && contador === 102 && sequencia === 1 && (
              <Span size="16" left="50" top="-30" color="red">
                03
              </Span>
            )}
            {span && contador === 103 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="42" top="40" color="red">
                95
              </Span>
            )}
            {span && contador === 104 && sequencia === 1 && (
              <Span size="18" left="55" top="30" color="red">
                99
              </Span>
            )}
            {span && contador === 105 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="30" top="-25" color="red">
                04
              </Span>
            )}
            {span && contador === 106 && sequencia === 1 && (
              <Span size="18" left="50" top="-30" color="blue">
                06
              </Span>
            )}
            {span && contador === 107 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="30" top="-10" color="red">
                00
              </Span>
            )}
            {span && contador === 108 && sequencia === 1 && (
              <Span size="18" left="55" top="30" color="red">
                97
              </Span>
            )}
            {span && contador === 109 && (sequencia === 1 || sequencia === 3) && (
              <Span size="18" left="55" top="-50" color="red">
                91
              </Span>
            )}
            {span && contador === 110 && sequencia === 1 && (
              <Span size="18" left="40" top="30" color="green">
                09
              </Span>
            )}
          </div>
        )}

        <div>
          {exercicio_id === 328 && !iniciado && isMountedRef.current && (
            <button onClick={() => iniciar(30, 1)}>Iniciar</button>
          )}
          {exercicio_id === 329 && !iniciado && isMountedRef.current && (
            <button onClick={() => iniciar(60, 31)}>Iniciar</button>
          )}
          {exercicio_id === 330 && !iniciado && isMountedRef.current && (
            <button onClick={() => iniciar(90, 61)}>Iniciar</button>
          )}
          {exercicio_id === 331 && !iniciado && isMountedRef.current && (
            <button onClick={() => iniciar(110, 91)}>Iniciar</button>
          )}

          {!iniciado && !isMountedRef.current && exercicio_id === 328 && (
            <Link onClick={() => iniciar(60, 31)} to="/memorizacao/329">
              Próximo &raquo;
            </Link>
          )}
          {!iniciado && !isMountedRef.current && exercicio_id === 329 && (
            <Link onClick={() => iniciar(90, 61)} to="/memorizacao/330">
              Próximo &raquo;
            </Link>
          )}
          {!iniciado && !isMountedRef.current && exercicio_id === 330 && (
            <Link onClick={() => iniciar(100, 91)} to="/memorizacao/331">
              Próximo &raquo;
            </Link>
          )}
          {!iniciado && !isMountedRef.current && exercicio_id === 331 && (
            <Link to="/dashboard">&laquo; Voltar para Home</Link>
          )}
          {/* {!iniciado && !isMountedRef.current && (
            <button onClick={() => iniciar()}>
              <img src={reiniciar} alt="Reiniciar" />
            </button>
          )} */}
          {/* {iniciado && <button onClick={() => parar()}>Parar</button>} */}
          {/* {concluido && (
            <Strong>
              Concluído <img src={icoConcluido} alt="Exercício concluído" />
            </Strong>
          )}

          {!concluido && (
            <small>
              *A nota será contabilizada após a conclusão do exercício.
            </small>
          )}
          {concluido && (
            <small>*A nota deste exercício já foi contabilizada.</small>
          )} */}
        </div>
      </Prod>
    </Container>
  );
}
