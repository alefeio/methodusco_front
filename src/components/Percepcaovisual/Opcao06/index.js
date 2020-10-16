import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import history from '~/services/history';

// import history from '~/services/history';

import {
  updateProvaRequest,
  updateRespostaRequest,
} from '~/store/modules/usuario/actions';

import Barra from '~/components/Barra';

import { Prod, ListaProdutos, Strong } from './styles';

import api from '~/services/api';

import icoConcluido from '~/assets/ico-concluido.jpg';

export default function Opcoes04(props) {
  const [contador, setContador] = useState(0);
  const [contagem, setContagem] = useState(true);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [apresentacao, setApresentacao] = useState(true);

  const isMountedRef = useRef(null);

  const { ex, exercicio, pergunta, palavra, opcoes } = props;

  const exercicio_id = parseInt(exercicio);

  const dispatch = useDispatch();

  const resp = useSelector((state) => state.usuario);

  function loadContador(max) {
    let i = contador;
    const interval = setInterval(() => {
      setContagem(true);
      i += 1;
      setContador(i);

      if (i === max) {
        setContagem(false);
        isMountedRef.current = false;
        return clearInterval(interval);
      }

      if (!isMountedRef.current) return clearInterval(interval);
    }, 430);
  }

  async function loadProva() {
    const response = await api.get(`provas`);

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

  async function loadResposta(res) {
    try {
      await api.post('resposta', {
        resposta: res,
        prova_id: prova.id,
        exercicio_id,
      });

      const response = await api.get(`provas`);

      setProva(response.data);
      dispatch(updateProvaRequest(response.data));
      dispatch(updateRespostaRequest(exercicio_id));

      setContagem(true);
      setContador(null);

      setConcluido(true);

      // loadProva();

      setTimeout(() => {
        if (exercicio_id === 240) history.push('/percepcaovisual/242');
        else history.push(`/percepcaovisual/${exercicio + 1}`);
      }, 300);

      // toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      setContagem(true);
      setContador(null);

      setTimeout(() => {
        if (exercicio_id === 240) history.push('/percepcaovisual/242');
        else history.push(`/percepcaovisual/${exercicio + 1}`);
      }, 300);
    }
  }

  async function loadProximo() {
    try {
      await api.post('resposta', {
        resposta: 100,
        prova_id: prova.id,
        exercicio_id,
      });

      const response = await api.get(`provas`);

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

    if (exercicio_id === 159) setApresentacao(true);

    setTimeout(() => setApresentacao(false), 2000);

    setConcluido(false);
    setContador(0);
    setContagem(true);

    if (isMountedRef.current) loadProva();

    if (exercicio_id !== 208) loadContador(3);

    return () => {
      isMountedRef.current = false;
    };
  }, [exercicio, opcoes]);

  return (
    <>
      <Barra
        categoria="Leitura Dinâmica"
        modulo="Exercícios de percepção visual"
        exercicio={exercicio_id}
        nota={prova && prova.nota}
      />
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
            {contagem && contador === 1 && (
              <ListaProdutos
                padding={
                  exercicio_id === 209 ||
                  exercicio_id === 211 ||
                  exercicio_id === 213 ||
                  exercicio_id === 215 ||
                  exercicio_id === 219 ||
                  exercicio_id === 220 ||
                  exercicio_id === 223 ||
                  exercicio_id === 227 ||
                  exercicio_id === 233 ||
                  exercicio_id === 234 ||
                  exercicio_id === 235 ||
                  exercicio_id === 240 ||
                  exercicio_id === 242 ||
                  exercicio_id === 248 ||
                  exercicio_id === 249 ||
                  exercicio_id === 250 ||
                  exercicio_id === 256 ||
                  exercicio_id === 260 ||
                  exercicio_id === 261 ||
                  exercicio_id === 262 ||
                  exercicio_id === 263 ||
                  exercicio_id === 267 ||
                  exercicio_id === 270 ||
                  exercicio_id === 271 ||
                  exercicio_id === 276 ||
                  exercicio_id === 280 ||
                  exercicio_id === 281 ||
                  exercicio_id === 282 ||
                  exercicio_id === 283 ||
                  exercicio_id === 290 ||
                  exercicio_id === 294 ||
                  exercicio_id === 297 ||
                  exercicio_id === 298 ||
                  exercicio_id === 299 ||
                  exercicio_id === 301 ||
                  exercicio_id === 304 ||
                  exercicio_id === 307 ||
                  exercicio_id === 311 ||
                  exercicio_id === 312 ||
                  exercicio_id === 313 ||
                  exercicio_id === 314 ||
                  exercicio_id === 317 ||
                  exercicio_id === 320 ||
                  exercicio_id === 322
                    ? 5
                    : 1
                }
              >
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li>
                  <span>{palavra}</span>
                </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
              </ListaProdutos>
            )}
            {contagem && contador === 2 && (
              <ListaProdutos
                padding={
                  exercicio_id === 209 ||
                  exercicio_id === 211 ||
                  exercicio_id === 213 ||
                  exercicio_id === 215 ||
                  exercicio_id === 219 ||
                  exercicio_id === 220 ||
                  exercicio_id === 223 ||
                  exercicio_id === 227 ||
                  exercicio_id === 233 ||
                  exercicio_id === 234 ||
                  exercicio_id === 235 ||
                  exercicio_id === 240 ||
                  exercicio_id === 242 ||
                  exercicio_id === 248 ||
                  exercicio_id === 249 ||
                  exercicio_id === 250 ||
                  exercicio_id === 256 ||
                  exercicio_id === 260 ||
                  exercicio_id === 261 ||
                  exercicio_id === 262 ||
                  exercicio_id === 263 ||
                  exercicio_id === 267 ||
                  exercicio_id === 270 ||
                  exercicio_id === 271 ||
                  exercicio_id === 276 ||
                  exercicio_id === 280 ||
                  exercicio_id === 281 ||
                  exercicio_id === 282 ||
                  exercicio_id === 283 ||
                  exercicio_id === 290 ||
                  exercicio_id === 294 ||
                  exercicio_id === 297 ||
                  exercicio_id === 298 ||
                  exercicio_id === 299 ||
                  exercicio_id === 301 ||
                  exercicio_id === 304 ||
                  exercicio_id === 307 ||
                  exercicio_id === 311 ||
                  exercicio_id === 312 ||
                  exercicio_id === 313 ||
                  exercicio_id === 314 ||
                  exercicio_id === 317 ||
                  exercicio_id === 320 ||
                  exercicio_id === 322
                    ? 5
                    : 1
                }
              >
                <li>&nbsp; &nbsp; &nbsp; &nbsp; {opcoes[0]}</li>
                <li> </li>
                <li>{opcoes[3]}</li>
                <li>{opcoes[1]}</li>
                <li>
                  <strong>*</strong>
                </li>
                <li> &nbsp; &nbsp; &nbsp; &nbsp; {opcoes[4]}</li>
                <li>&nbsp; &nbsp; &nbsp; &nbsp; {opcoes[2]}</li>
                <li> </li>
                <li>{opcoes[5]}</li>
              </ListaProdutos>
            )}
            {!contagem && (
              <ListaProdutos
                padding={
                  exercicio_id === 209 ||
                  exercicio_id === 211 ||
                  exercicio_id === 213 ||
                  exercicio_id === 215 ||
                  exercicio_id === 219 ||
                  exercicio_id === 220 ||
                  exercicio_id === 223 ||
                  exercicio_id === 227 ||
                  exercicio_id === 233 ||
                  exercicio_id === 234 ||
                  exercicio_id === 235 ||
                  exercicio_id === 240 ||
                  exercicio_id === 242 ||
                  exercicio_id === 248 ||
                  exercicio_id === 249 ||
                  exercicio_id === 250 ||
                  exercicio_id === 256 ||
                  exercicio_id === 260 ||
                  exercicio_id === 261 ||
                  exercicio_id === 262 ||
                  exercicio_id === 263 ||
                  exercicio_id === 267 ||
                  exercicio_id === 270 ||
                  exercicio_id === 271 ||
                  exercicio_id === 276 ||
                  exercicio_id === 280 ||
                  exercicio_id === 281 ||
                  exercicio_id === 282 ||
                  exercicio_id === 283 ||
                  exercicio_id === 290 ||
                  exercicio_id === 294 ||
                  exercicio_id === 297 ||
                  exercicio_id === 298 ||
                  exercicio_id === 299 ||
                  exercicio_id === 301 ||
                  exercicio_id === 304 ||
                  exercicio_id === 307 ||
                  exercicio_id === 311 ||
                  exercicio_id === 312 ||
                  exercicio_id === 313 ||
                  exercicio_id === 314 ||
                  exercicio_id === 317 ||
                  exercicio_id === 320 ||
                  exercicio_id === 322
                    ? 5
                    : 1
                }
              >
                <li>
                  &nbsp; &nbsp; &nbsp; &nbsp;{' '}
                  <button onClick={() => loadResposta(1)}>1</button>
                </li>
                <li> </li>
                <li>
                  <button onClick={() => loadResposta(4)}>4</button>
                </li>
                <li>
                  <button onClick={() => loadResposta(2)}>2</button>
                </li>
                <li></li>
                <li>
                  &nbsp; &nbsp; &nbsp; &nbsp;{' '}
                  <button onClick={() => loadResposta(5)}>5</button>
                </li>
                <li>
                  &nbsp; &nbsp; &nbsp; &nbsp;{' '}
                  <button onClick={() => loadResposta(3)}>3</button>
                </li>
                <li></li>
                <li>
                  <button onClick={() => loadResposta(6)}>6</button>
                </li>
              </ListaProdutos>
            )}
            {contador === 0 && exercicio_id === 208 && (
              <>
                <button onClick={() => loadContador(3)}>Iniciar</button>
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

            {/* <div>
              {exercicio > 186 && (
              <Link to={`/percepcaovisual/${exercicio - 1}`}>Anterior</Link>
            )}
              {exercicio < 241 && (
                <Link
                  onClick={() => loadProximo()}
                  to={`/percepcaovisual/${exercicio + 1}`}
                >
                  Próximo
                </Link>
              )}
            </div> */}
          </div>
        )}
        <div> </div>
      </Prod>
    </>
  );
}
