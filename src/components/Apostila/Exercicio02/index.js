import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Barra from '~/components/Barra';

import {
  updateProvaRequest,
  updateRespostaRequest,
} from '~/store/modules/usuario/actions';

import { Container, Prod, Strong, Voltar } from './styles';

import api from '~/services/api';

import c34 from '~/assets/autoaceleracao/2/34.jpg';
import c33 from '~/assets/autoaceleracao/2/33.jpg';
import c32 from '~/assets/autoaceleracao/2/32.jpg';
import c31 from '~/assets/autoaceleracao/2/31.jpg';
import c30 from '~/assets/autoaceleracao/2/30.jpg';
import c29 from '~/assets/autoaceleracao/2/29.jpg';
import c28 from '~/assets/autoaceleracao/2/28.jpg';
import c27 from '~/assets/autoaceleracao/2/27.jpg';
import c26 from '~/assets/autoaceleracao/2/26.jpg';
import c25 from '~/assets/autoaceleracao/2/25.jpg';
import c24 from '~/assets/autoaceleracao/2/24.jpg';
import c23 from '~/assets/autoaceleracao/2/23.jpg';
import c22 from '~/assets/autoaceleracao/2/22.jpg';
import c21 from '~/assets/autoaceleracao/2/21.jpg';
import c20 from '~/assets/autoaceleracao/2/20.jpg';
import c19 from '~/assets/autoaceleracao/2/19.jpg';
import c18 from '~/assets/autoaceleracao/2/18.jpg';
import c17 from '~/assets/autoaceleracao/2/17.jpg';
import c16 from '~/assets/autoaceleracao/2/16.jpg';
import c15 from '~/assets/autoaceleracao/2/15.jpg';
import c14 from '~/assets/autoaceleracao/2/14.jpg';
import c13 from '~/assets/autoaceleracao/2/13.jpg';
import c12 from '~/assets/autoaceleracao/2/12.jpg';
import c11 from '~/assets/autoaceleracao/2/11.jpg';
import c10 from '~/assets/autoaceleracao/2/10.jpg';
import c9 from '~/assets/autoaceleracao/2/09.jpg';
import c8 from '~/assets/autoaceleracao/2/08.jpg';
import c7 from '~/assets/autoaceleracao/2/07.jpg';
import c6 from '~/assets/autoaceleracao/2/06.jpg';
import c5 from '~/assets/autoaceleracao/2/05.jpg';
import c4 from '~/assets/autoaceleracao/2/04.jpg';
import c3 from '~/assets/autoaceleracao/2/03.jpg';
import c2 from '~/assets/autoaceleracao/2/02.jpg';
import c1 from '~/assets/autoaceleracao/2/01.jpg';

import icoConcluido from '~/assets/ico-concluido.jpg';
import reiniciar from '~/assets/reiniciar.png';

export default function Exercicio02(props) {
  const [minimo, setMinimo] = useState();
  const [maximo, setMaximo] = useState();
  const [contador, setContador] = useState(0);
  const [iniciado, setIniciado] = useState(false);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [respostas, setRespostas] = useState();
  const [apresentacao, setApresentacao] = useState(false);

  const isMountedRef = useRef(null);

  const { ex, exercicio, aula } = props;

  const exercicio_id = parseInt(exercicio);

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

  function loadContador(maxi, mini, sequencia = 1) {
    let i = mini;
    let max = maxi;
    let seq = sequencia;
    if (seq === 1) {
      const interval1 = setInterval(() => {
        if (i > max) {
          seq += 1;
          clearInterval(interval1);
          return loadContador(34, 1, seq);
        }

        if (!isMountedRef.current) return clearInterval(interval1);
        setContador(i);
        i += 1;
      }, 300);
    } else if (seq === 2) {
      const interval2 = setInterval(() => {
        if (i > max) {
          seq += 1;
          clearInterval(interval2);
          return loadContador(34, 1, seq);
        }

        if (!isMountedRef.current) return clearInterval(interval2);
        setContador(i);
        i += 1;
      }, 200);
    } else if (seq === 3) {
      const interval3 = setInterval(() => {
        if (i > max) {
          seq += 1;
          loadContador(34, 1);
          i = mini;
          setContador(i);
          max -= 1;
          if (seq > 6) {
            // if (isMountedRef.current) loadResposta();
            setConcluido(true);
            isMountedRef.current = false;
            setIniciado(false);
            return clearInterval(interval3);
          }
        }

        if (!isMountedRef.current) return clearInterval(interval3);
        setContador(i);
        i += 1;
      }, 100);
    }
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

      loadProva();
    } catch (error) {
      console.tron.log(error);
    }
  }

  useEffect(() => {
    async function loadRespostas() {
      setRespostas(resp.resposta);
    }

    setTimeout(() => setApresentacao(false), 2000);

    loadRespostas();
  }, [resp.resposta]);

  useEffect(() => {
    isMountedRef.current = true;

    function loadNumeros(min, max) {
      setMinimo(min);
      setMaximo(max);
    }

    if (isMountedRef.current) loadProva();
    if (exercicio_id === 2) {
      loadNumeros(1, 34);
      setContador(34);
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
            <h2> </h2>
          </div>
        )}
        {!apresentacao && iniciado && (
          <div>
            <p>*</p>
            {contador === 1 && <span>pintor</span>}
            {contador === 2 && <span>pera</span>}
            {contador === 3 && <span>livro</span>}
            {contador === 4 && <span>ninho</span>}
            {contador === 5 && <span>morangos</span>}
            {contador === 6 && <span>maçã</span>}
            {contador === 7 && <span>surfista</span>}
            {contador === 8 && <span>leão</span>}
            {contador === 9 && <span>abacaxi</span>}
            {contador === 10 && <span>vagão</span>}
            {contador === 11 && <span>uva</span>}
            {contador === 12 && <span>filme</span>}
            {contador === 13 && <span>bailarina</span>}
            {contador === 14 && <span>pão</span>}
            {contador === 15 && <span>tambor</span>}
            {contador === 16 && <span>café</span>}
            {contador === 17 && <span>peixe</span>}
            {contador === 18 && <span>gato</span>}
            {contador === 19 && <span>pássaro</span>}
            {contador === 20 && <span>livros</span>}
            {contador === 21 && <span>laranjas</span>}
            {contador === 22 && <span>cofre</span>}
            {contador === 23 && <span>pirâmide</span>}
            {contador === 24 && <span>trator</span>}
            {contador === 25 && <span>paz</span>}
            {contador === 26 && <span>foca</span>}
            {contador === 27 && <span>guitara</span>}
            {contador === 28 && <span>brinde</span>}
            {contador === 29 && <span>capacete</span>}
            {contador === 30 && <span>canoa</span>}
            {contador === 31 && <span>girassol</span>}
            {contador === 32 && <span>moedas</span>}
            {contador === 33 && <span>microfone</span>}
            {contador === 34 && <span>leite</span>}
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
            </strong>

            {iniciado && <button onClick={() => parar()}>Parar</button>}
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
        )}

        {!apresentacao && (
          <div>
            {!iniciado && isMountedRef.current && (
              <button onClick={() => iniciar()}>Iniciar</button>
            )}
            {!iniciado && !isMountedRef.current && (
              <button onClick={() => iniciar()}>
                <img src={reiniciar} alt="Reiniciar" />
              </button>
            )}
          </div>
        )}
        {!iniciado && !isMountedRef.current && (
          <div>
            <div>
              <Strong>
                Exercício Concluído{' '}
                <img src={icoConcluido} alt="Exercício concluído" />
              </Strong>
            </div>
          </div>
        )}

        <div> </div>
      </Prod>
    </Container>
  );
}
