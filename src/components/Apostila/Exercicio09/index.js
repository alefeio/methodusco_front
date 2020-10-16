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

export default function Exercicio08(props) {
  const [contador, setContador] = useState(0);
  const [contagem, setContagem] = useState(true);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [opcao, setOpcao] = useState();
  const [apresentacao, setApresentacao] = useState(true);
  const [resultado, setResultado] = useState(false);
  const [resultadoparcial, setResultadoparcial] = useState(false);

  const isMountedRef = useRef(null);

  const { ex, exercicio, pergunta, palavra, opcoes } = props;

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
    const response = await api.get(`provas`);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    setResultadoparcial(response.data.monitor09);

    const prova_id = response.data.id;
  }

  async function loadResposta(res) {
    try {
      // await api.post('resposta', {
      //   resposta: res,
      //   prova_id: prova.id,
      //   exercicio_id,
      // });

      // const response = await api.get(`provas`);

      // setProva(response.data);
      // dispatch(updateProvaRequest(response.data));
      // dispatch(updateRespostaRequest(exercicio_id));

      setContagem(true);
      setContador(null);
      setConcluido(true);

      // loadProva();

      setTimeout(() => {
        history.push(`/apostila/${exercicio + 1}`);
      }, 300);

      // toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      setContagem(true);
      setContador(null);

      setTimeout(() => {
        history.push(`/apostila/${exercicio + 1}`);
      }, 300);
    }
  }

  async function loadProximo() {
    try {
      // await api.post('resposta', {
      //   resposta: 100,
      //   prova_id: prova.id,
      //   exercicio_id,
      // });

      // const response = await api.get(`provas`);

      // setProva(response.data);
      // dispatch(updateProvaRequest(response.data));
      // dispatch(updateRespostaRequest(exercicio_id));

      setContagem(true);

      loadProva();
    } catch (error) {
      setContagem(true);
    }
  }

  useEffect(() => {
    isMountedRef.current = true;

    if (exercicio_id === 337) setApresentacao(true);

    setTimeout(() => setApresentacao(false), 2000);

    setConcluido(false);
    setContador(0);
    setContagem(true);

    if (isMountedRef.current) loadProva();

    if (exercicio_id === 357) loadContador(9);

    if (exercicio_id !== 337 && exercicio_id !== 357)
      loadContador(opcoes.length);

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
        </ul>
      </Voltar>
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
              <ListaProdutos margin="1" padding={contador * 2}>
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
              <ListaProdutos margin="1" padding={contador * 2}>
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
            {contador && !contagem && exercicio_id >= 337 && exercicio_id <= 356 && (
              <>
                <button onClick={() => loadResposta(1)}>1</button>
                <button onClick={() => loadResposta(2)}>2</button>
                <button onClick={() => loadResposta(3)}>3</button>
                <button onClick={() => loadResposta(4)}>4</button>
                <button onClick={() => loadResposta(5)}>5</button>
                <button onClick={() => loadResposta(6)}>6</button>
              </>
            )}
            {contador && !contagem && exercicio_id >= 357 && (
              <>
                <button onClick={() => loadResposta(1)}>1</button>
                <button onClick={() => loadResposta(2)}>2</button>
                <button onClick={() => loadResposta(3)}>3</button>
                <button onClick={() => loadResposta(4)}>4</button>
                <button onClick={() => loadResposta(5)}>5</button>
                <button onClick={() => loadResposta(6)}>6</button>
                <button onClick={() => loadResposta(7)}>7</button>
                <button onClick={() => loadResposta(8)}>8</button>
                <button onClick={() => loadResposta(9)}>9</button>
              </>
            )}
            {contador === 0 && exercicio_id === 337 && (
              <div>
                <button onClick={() => loadContador(opcoes.length)}>
                  Iniciar
                </button>
              </div>
            )}
            {/* {!contagem && concluido && (
              <Strong>
                Concluído <img src={icoConcluido} alt="Exercício concluído" />
              </Strong>
            )}

            {!contagem && !concluido && (
              <small>
                *A nota será contabilizada após a conclusão do exercício. <br />
                ** Ao clicar em próximo sem responder, a questão será
                contabilizada como errada.
              </small>
            )}
            {!contagem && concluido && (
              <small>*A nota deste exercício já foi contabilizada.</small>
            )}

            {!contagem && (
              <div>
                <Link
                  onClick={() => loadProximo()}
                  to={`/apostila/${exercicio + 1}`}
                >
                  Próximo &raquo;
                </Link>
              </div>
            )} */}
            <div>
              {!contador && concluido && !contador && (
                <Strong>
                  Exercício Concluído{' '}
                  <img src={icoConcluido} alt="Exercício concluído" />
                </Strong>
              )}
            </div>
          </div>
        )}
        <div> </div>
      </Prod>
    </>
  );
}
