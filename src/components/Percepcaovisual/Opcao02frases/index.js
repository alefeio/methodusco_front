import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import history from '~/services/history';

import {
  updateProvaRequest,
  updateRespostaRequest,
} from '~/store/modules/usuario/actions';

import Barra from '~/components/Barra';

import { Prod, ListaProdutos, Strong, Voltar } from './styles';

import api from '~/services/api';

import icoConcluido from '~/assets/ico-concluido.jpg';

export default function Opcoes02frases(props) {
  const [contador, setContador] = useState(0);
  const [contagem, setContagem] = useState(true);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [opcao, setOpcao] = useState();
  const [apresentacao, setApresentacao] = useState(true);
  const [resultado, setResultado] = useState(false);
  const [resultadoparcial, setResultadoparcial] = useState(false);

  const isMountedRef = useRef(null);

  const { ex, exercicio, pergunta, palavra, opcoes, aula } = props;

  const exercicio_id = parseInt(exercicio);

  const dispatch = useDispatch();

  const resp = useSelector((state) => state.usuario);

  function loadContador(max) {
    let i = contador;
    let j = 0;
    const interval = setInterval(() => {
      setContagem(true);
      setOpcao(opcoes[j]);

      if (j === max) {
        setContagem(false);
        isMountedRef.current = false;
        return clearInterval(interval);
      }

      i += 1;
      if (i > 1) j += 1;
      setContador(i);

      if (!isMountedRef.current) return clearInterval(interval);
    }, 250);
  }

  async function loadProva() {
    const response = await api.get(`provas2/${aula}`);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    if (exercicio_id === 285) setResultadoparcial(response.data.percepcao02);

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

  async function loadResposta(res) {
    try {
      await api.post('resposta', {
        resposta: res,
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

      if (exercicio_id === 285) return setResultado(true);

      if (exercicio_id !== 285) {
        setTimeout(() => {
          history.push(`/percepcaovisual/${exercicio + 1}/aula/${aula}`);
        }, 300);
      }

      // toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      setContagem(true);
      setContador(null);

      if (exercicio_id === 285) return setResultado(true);

      if (exercicio_id !== 285) {
        setTimeout(() => {
          history.push(`/percepcaovisual/${exercicio + 1}/aula/${aula}`);
        }, 300);
      }
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

    if (exercicio_id === 242) setApresentacao(true);

    setTimeout(() => setApresentacao(false), 2000);

    setConcluido(false);
    setContador(0);
    setContagem(true);

    if (isMountedRef.current) loadProva();

    if (
      exercicio_id === 246 ||
      exercicio_id === 250 ||
      exercicio_id === 253 ||
      exercicio_id === 254 ||
      exercicio_id === 261 ||
      exercicio_id === 268
    )
      loadContador(4);
    else if (
      exercicio_id === 247 ||
      exercicio_id === 248 ||
      exercicio_id === 255 ||
      exercicio_id === 264 ||
      exercicio_id === 265 ||
      exercicio_id === 270 ||
      exercicio_id === 251
    )
      loadContador(5);
    else if (
      exercicio_id === 249 ||
      exercicio_id === 256 ||
      exercicio_id === 260 ||
      exercicio_id === 262 ||
      exercicio_id === 263 ||
      exercicio_id === 266 ||
      exercicio_id === 267 ||
      exercicio_id === 269 ||
      exercicio_id === 278
    )
      loadContador(6);
    else if (
      exercicio_id === 252 ||
      exercicio_id === 257 ||
      exercicio_id === 273 ||
      exercicio_id === 274 ||
      exercicio_id === 275 ||
      exercicio_id === 276 ||
      exercicio_id === 277 ||
      exercicio_id === 279 ||
      exercicio_id === 281 ||
      exercicio_id === 284
    )
      loadContador(7);
    else if (
      exercicio_id === 258 ||
      exercicio_id === 259 ||
      exercicio_id === 285
    )
      loadContador(8);
    else if (
      exercicio_id === 271 ||
      exercicio_id === 280 ||
      exercicio_id === 282 ||
      exercicio_id === 283
    )
      loadContador(9);
    else if (exercicio_id === 272) loadContador(10);
    else if (exercicio_id !== 242) loadContador(opcoes.length);

    return () => {
      setContador(0);
      isMountedRef.current = false;
    };
  }, [exercicio, opcoes]);

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
      {/* <Barra
        categoria="Leitura Dinâmica"
        modulo="Exercícios apostila"
        exercicio={exercicio_id}
        nota={prova && prova.nota}
      /> */}
      <Prod>
        <div>
          <h3>{ex}</h3>
        </div>
        {apresentacao && (
          <div>
            <h2>{pergunta}</h2>
          </div>
        )}
        {resultado && (
          <div>
            <h2>Resultado: {resultadoparcial.toFixed(1)}%</h2>
          </div>
        )}
        {!apresentacao && (
          <div>
            {contagem && contador === 1 && (
              <ListaProdutos margin="1" padding={contador}>
                <p>{palavra}</p>
                <span>*</span>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
              </ListaProdutos>
            )}
            {contagem && contador > 1 && (
              <ListaProdutos margin="1" padding={contador}>
                <strong>{opcao}</strong>
                <span>*</span>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
              </ListaProdutos>
            )}
            {!contagem && (
              <div>
                <button onClick={() => loadResposta(1)}>Sim</button>
                <button onClick={() => loadResposta(0)}>Não</button>
              </div>
            )}
            {contador === 0 && exercicio_id === 242 && (
              <>
                <button onClick={() => loadContador(opcoes.length)}>
                  Iniciar
                </button>
              </>
            )}
            {/* {concluido && (
              <Strong>
                Concluído <img src={icoConcluido} alt="Exercício concluído" />
              </Strong>
            )}

            {!concluido && (
              <small>
                *A nota será contabilizada após a conclusão do exercício. <br />
                ** Ao clicar em próximo sem responder, a questão será
                contabilizada como errada.
              </small>
            )}
            {concluido && (
              <small>*A nota deste exercício já foi contabilizada.</small>
            )} */}

            {resultado && exercicio === 285 && (
              <div>
                <Strong>
                  Exercício Concluído{' '}
                  <img src={icoConcluido} alt="Exercício concluído" />
                </Strong>
              </div>
            )}
          </div>
        )}
        <div> </div>
      </Prod>
    </>
  );
}
