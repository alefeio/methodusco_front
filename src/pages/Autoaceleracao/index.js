import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ReactAudioPlayer from 'react-audio-player';

import Barra from '~/components/Barra';

import {
  updateProvaRequest,
  updateRespostaRequest,
} from '~/store/modules/usuario/actions';

import { Container, Prod, Strong, Voltar } from './styles';

import api from '~/services/api';

import beep from '~/assets/beep.mp3';

import c45 from '~/assets/cronometro/45.jpg';
import c44 from '~/assets/cronometro/44.jpg';
import c43 from '~/assets/cronometro/43.jpg';
import c42 from '~/assets/cronometro/42.jpg';
import c41 from '~/assets/cronometro/41.jpg';
import c40 from '~/assets/cronometro/40.jpg';
import c39 from '~/assets/cronometro/39.jpg';
import c38 from '~/assets/cronometro/38.jpg';
import c37 from '~/assets/cronometro/37.jpg';
import c36 from '~/assets/cronometro/36.jpg';
import c35 from '~/assets/cronometro/35.jpg';
import c34 from '~/assets/cronometro/34.jpg';
import c33 from '~/assets/cronometro/33.jpg';
import c32 from '~/assets/cronometro/32.jpg';
import c31 from '~/assets/cronometro/31.jpg';
import c30 from '~/assets/cronometro/30.jpg';
import c29 from '~/assets/cronometro/29.jpg';
import c28 from '~/assets/cronometro/28.jpg';
import c27 from '~/assets/cronometro/27.jpg';
import c26 from '~/assets/cronometro/26.jpg';
import c25 from '~/assets/cronometro/25.jpg';
import c24 from '~/assets/cronometro/24.jpg';
import c23 from '~/assets/cronometro/23.jpg';
import c22 from '~/assets/cronometro/22.jpg';
import c21 from '~/assets/cronometro/21.jpg';
import c20 from '~/assets/cronometro/20.jpg';
import c19 from '~/assets/cronometro/19.jpg';
import c18 from '~/assets/cronometro/18.jpg';
import c17 from '~/assets/cronometro/17.jpg';
import c16 from '~/assets/cronometro/16.jpg';
import c15 from '~/assets/cronometro/15.jpg';
import c14 from '~/assets/cronometro/14.jpg';
import c13 from '~/assets/cronometro/13.jpg';
import c12 from '~/assets/cronometro/12.jpg';
import c11 from '~/assets/cronometro/11.jpg';
import c10 from '~/assets/cronometro/10.jpg';
import c9 from '~/assets/cronometro/9.jpg';
import c8 from '~/assets/cronometro/8.jpg';
import c7 from '~/assets/cronometro/7.jpg';
import c6 from '~/assets/cronometro/6.jpg';
import c5 from '~/assets/cronometro/5.jpg';
import c4 from '~/assets/cronometro/4.jpg';
import c3 from '~/assets/cronometro/3.jpg';
import c2 from '~/assets/cronometro/2.jpg';
import c1 from '~/assets/cronometro/1.jpg';

import icoConcluido from '~/assets/ico-concluido.jpg';
import reiniciar from '~/assets/reiniciar.png';

export default function Autoaceleracao(props) {
  const [exercicio, setExercicio] = useState();
  const [minimo, setMinimo] = useState();
  const [maximo, setMaximo] = useState();
  const [contador, setContador] = useState(0);
  const [iniciado, setIniciado] = useState(false);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [respostas, setRespostas] = useState();
  const [audio, setAudio] = useState(false);

  const isMountedRef = useRef(null);

  const id = parseInt(props.match.params.id);

  const exercicio_id = id;

  const dispatch = useDispatch();

  const resp = useSelector((state) => state.usuario);

  const aula = 0;

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

  function loadContador(maxi, mini) {
    let i = maxi;
    let max = maxi;
    const interval = setInterval(() => {
      if (i === 0) setAudio(true);
      else setAudio(false);
      if (i < 0) {
        if (max === mini) {
          // if (isMountedRef.current) loadResposta();
          setConcluido(true);
          isMountedRef.current = false;
          setIniciado(false);
          return clearInterval(interval);
        }

        max -= 1;
        i = max;
        setContador(i);
      }
      if (!isMountedRef.current) return clearInterval(interval);
      setContador(i);
      i -= 1;
    }, 1000);
  }

  function iniciar() {
    setIniciado(true);
    isMountedRef.current = true;
    loadContador(maximo, minimo);
  }

  function parar() {
    setIniciado(false);
    isMountedRef.current = false;
  }

  useEffect(() => {
    async function loadRespostas() {
      setRespostas(resp.resposta);
    }

    loadRespostas();
  }, [resp.resposta]);

  useEffect(() => {
    isMountedRef.current = true;

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

    function loadExercicio() {
      setExercicio(id);
    }

    function loadNumeros(min, max) {
      setMinimo(min);
      setMaximo(max);
    }

    // if (isMountedRef.current) loadProva();
    loadExercicio();

    if (id === 322) {
      loadNumeros(15, 30);
      setContador(30);
    }
    if (id === 323) {
      loadNumeros(20, 45);
      setContador(45);
    }
    if (id === 324) {
      loadNumeros(20, 30);
      setContador(30);
    }
    if (id === 325) {
      loadNumeros(15, 20);
      setContador(20);
    }
    if (id === 326) {
      loadNumeros(10, 20);
      setContador(20);
    }
    if (id === 327) {
      loadNumeros(10, 15);
      setContador(15);
    }
    if (id === 328) {
      loadNumeros(5, 10);
      setContador(10);
    }
    if (id === 329) {
      loadNumeros(18, 25);
      setContador(25);
    }

    return () => {
      isMountedRef.current = false;
    };
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
          <Link to="/intermediario">
            <small>Módulo Intermediário</small>
          </Link>
        </li>
      </ul>

      <a href="javascript:history.back()">
        <small>&laquo; Voltar</small>
      </a>
    </Voltar>
      <Prod>
        <div>
          <h1>Auto-aceleração: {`${maximo}" - ${minimo}"`}</h1>
          <strong>
            {contador === 1 && <img src={c1} alt="Cronômetro" />}
            {contador === 2 && <img src={c2} alt="Cronômetro" />}
            {contador === 3 && <img src={c3} alt="Cronômetro" />}
            {contador === 4 && <img src={c4} alt="Cronômetro" />}
            {contador === 5 && <img src={c5} alt="Cronômetro" />}
            {contador === 6 && <img src={c6} alt="Cronômetro" />}
            {contador === 7 && <img src={c7} alt="Cronômetro" />}
            {contador === 8 && <img src={c8} alt="Cronômetro" />}
            {contador === 9 && <img src={c9} alt="Cronômetro" />}
            {contador === 10 && <img src={c10} alt="Cronômetro" />}
            {contador === 11 && <img src={c11} alt="Cronômetro" />}
            {contador === 12 && <img src={c12} alt="Cronômetro" />}
            {contador === 13 && <img src={c13} alt="Cronômetro" />}
            {contador === 14 && <img src={c14} alt="Cronômetro" />}
            {contador === 15 && <img src={c15} alt="Cronômetro" />}
            {contador === 16 && <img src={c16} alt="Cronômetro" />}
            {contador === 17 && <img src={c17} alt="Cronômetro" />}
            {contador === 18 && <img src={c18} alt="Cronômetro" />}
            {contador === 19 && <img src={c19} alt="Cronômetro" />}
            {contador === 20 && <img src={c20} alt="Cronômetro" />}
            {contador === 21 && <img src={c21} alt="Cronômetro" />}
            {contador === 22 && <img src={c22} alt="Cronômetro" />}
            {contador === 23 && <img src={c23} alt="Cronômetro" />}
            {contador === 24 && <img src={c24} alt="Cronômetro" />}
            {contador === 25 && <img src={c25} alt="Cronômetro" />}
            {contador === 26 && <img src={c26} alt="Cronômetro" />}
            {contador === 27 && <img src={c27} alt="Cronômetro" />}
            {contador === 28 && <img src={c28} alt="Cronômetro" />}
            {contador === 29 && <img src={c29} alt="Cronômetro" />}
            {contador === 30 && <img src={c30} alt="Cronômetro" />}
            {contador === 31 && <img src={c31} alt="Cronômetro" />}
            {contador === 32 && <img src={c32} alt="Cronômetro" />}
            {contador === 33 && <img src={c33} alt="Cronômetro" />}
            {contador === 34 && <img src={c34} alt="Cronômetro" />}
            {contador === 35 && <img src={c35} alt="Cronômetro" />}
            {contador === 36 && <img src={c36} alt="Cronômetro" />}
            {contador === 37 && <img src={c37} alt="Cronômetro" />}
            {contador === 38 && <img src={c38} alt="Cronômetro" />}
            {contador === 39 && <img src={c39} alt="Cronômetro" />}
            {contador === 40 && <img src={c40} alt="Cronômetro" />}
            {contador === 41 && <img src={c41} alt="Cronômetro" />}
            {contador === 42 && <img src={c42} alt="Cronômetro" />}
            {contador === 43 && <img src={c43} alt="Cronômetro" />}
            {contador === 44 && <img src={c44} alt="Cronômetro" />}
            {contador === 45 && <img src={c45} alt="Cronômetro" />}
          </strong>
        </div>
        <div>
          <span>{contador}</span>
          {audio && <ReactAudioPlayer src={beep} autoPlay />}
          {!iniciado && isMountedRef.current && (
            <button onClick={() => iniciar()}>Iniciar</button>
          )}
          {!iniciado && !isMountedRef.current && (
            <button onClick={() => iniciar()}>
              <img src={reiniciar} alt="Reiniciar" />
            </button>
          )}
          {iniciado && <button onClick={() => parar()}>Parar</button>}
          {concluido && (
            <Strong>
              Concluído <img src={icoConcluido} alt="Exercício concluído" />
            </Strong>
          )}

          {/* {!concluido && (
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
