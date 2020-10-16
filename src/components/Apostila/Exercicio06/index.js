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

import { Prod, ListaProdutos, Strong, Palavra, Voltar } from './styles';

import api from '~/services/api';

import icoConcluido from '~/assets/ico-concluido.jpg';

export default function Exercicio06(props) {
  const [contador, setContador] = useState(0);
  const [contagem, setContagem] = useState(true);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [apresentacao, setApresentacao] = useState(true);
  const [resultado, setResultado] = useState(false);
  const [resultadoparcial, setResultadoparcial] = useState(false);

  const isMountedRef = useRef(null);

  const { ex, exercicio, pergunta, palavra, palavra2, opcoes } = props;

  const exercicio_id = parseInt(exercicio);

  const dispatch = useDispatch();

  const resp = useSelector((state) => state.usuario);

  async function loadProva() {
    const response = await api.get(`provas`);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data.id;
  }

  async function loadResposta(res) {
    try {
      setContador(null);
      setConcluido(true);

      // loadProva();

      if (exercicio_id !== 150) {
        setTimeout(() => {
          history.push(`/apostila/${exercicio + 1}`);
        }, 300);
      }

      // toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      setContador(null);

      if (exercicio_id !== 150) {
        setTimeout(() => {
          history.push(`/apostila/${exercicio + 1}`);
        }, 300);
      }
    }
  }

  function loadContador(num) {
    let i = num;
    setContagem(true);
    const c16 = setInterval(() => {
      if (i > opcoes.length / 2 + 1) {
        setContagem(false);
        isMountedRef.current = false;
        return clearInterval(c16);
      }

      setContador(i);
      i += 1;

      if (!isMountedRef.current) return clearInterval(c16);
    }, 200);
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

      loadProva();
    } catch (error) {
      console.tron.log(error);
    }
  }

  useEffect(() => {
    isMountedRef.current = true;

    if (exercicio_id === 136) setApresentacao(true);

    setTimeout(() => setApresentacao(false), 2000);

    setConcluido(false);
    setContador(0);
    setContagem(true);

    if (exercicio_id >= 121 && exercicio_id <= 150 && exercicio_id !== 136)
      loadContador(1);

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
            {contador === 1 && (
              <Palavra>
                {palavra}
                <span>*</span>
                {palavra2}
              </Palavra>
            )}
            {exercicio_id <= 135 && contagem && contador > 1 && (
              <ListaProdutos>
                <li>
                  {contador === 2 && opcoes[0]}
                  <strong>*</strong>
                  {contador === 2 && opcoes[1]}
                </li>
                <li>
                  {contador === 3 && opcoes[2]}
                  <strong>*</strong>
                  {contador === 3 && opcoes[3]}
                </li>
                <li>
                  {contador === 5 && opcoes[6]}
                  <strong>*</strong>
                  {contador === 5 && opcoes[7]}
                </li>
                <li>
                  {contador === 4 && opcoes[4]}
                  <strong>*</strong>
                  {contador === 4 && opcoes[5]}
                </li>
              </ListaProdutos>
            )}

            {exercicio_id >= 136 && contagem && contador > 1 && (
              <ListaProdutos>
                <li>
                  {contador === 7 && opcoes[10]}
                  <strong>*</strong>
                  {contador === 7 && opcoes[11]}
                </li>
                <li>
                  {contador === 6 && opcoes[8]}
                  <strong>*</strong>
                  {contador === 6 && opcoes[9]}
                </li>
                <li>
                  {contador === 4 && opcoes[4]}
                  <strong>*</strong>
                  {contador === 4 && opcoes[5]}
                </li>
                <li>
                  {contador === 5 && opcoes[6]}
                  <strong>*</strong>
                  {contador === 5 && opcoes[7]}
                </li>
                <li>
                  {contador === 3 && opcoes[2]}
                  <strong>*</strong>
                  {contador === 3 && opcoes[3]}
                </li>
                <li>
                  {contador === 2 && opcoes[0]}
                  <strong>*</strong>
                  {contador === 2 && opcoes[1]}
                </li>
              </ListaProdutos>
            )}

            {/* {exercicio_id >= 136 && contagem && contador === null && (
              <ListaProdutos>
                <li>
                  {opcoes[10] === palavra && opcoes[10]}
                  {opcoes[10] === palavra && opcoes[11] === palavra2 ? (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  ) : (
                    <strong>*</strong>
                  )}
                  {opcoes[11] === palavra2 && opcoes[11]}
                </li>
                <li>
                  {opcoes[8] === palavra && opcoes[8]}
                  {opcoes[8] === palavra && opcoes[9] === palavra2 ? (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  ) : (
                    <strong>*</strong>
                  )}
                  {opcoes[9] === palavra2 && opcoes[9]}
                </li>
                <li>
                  {opcoes[4] === palavra && opcoes[4]}
                  {opcoes[4] === palavra && opcoes[5] === palavra2 ? (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  ) : (
                    <strong>*</strong>
                  )}
                  {opcoes[5] === palavra2 && opcoes[5]}
                </li>
                <li>
                  {opcoes[6] === palavra && opcoes[6]}
                  {opcoes[6] === palavra && opcoes[7] === palavra2 ? (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  ) : (
                    <strong>*</strong>
                  )}
                  {opcoes[7] === palavra2 && opcoes[7]}
                </li>
                <li>
                  {opcoes[2] === palavra && opcoes[2]}
                  {opcoes[2] === palavra && opcoes[3] === palavra2 ? (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  ) : (
                    <strong>*</strong>
                  )}
                  {opcoes[3] === palavra2 && opcoes[3]}
                </li>
                <li>
                  {opcoes[0] === palavra && opcoes[0]}
                  {opcoes[0] === palavra && opcoes[1] === palavra2 ? (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  ) : (
                    <strong>*</strong>
                  )}
                  {opcoes[1] === palavra2 && opcoes[1]}
                </li>
              </ListaProdutos>
            )} */}

            {exercicio_id <= 135 && !contagem && contador && (
              <div>
                <button onClick={() => loadResposta(1)}>Sim</button>
                <button onClick={() => loadResposta(0)}>Não</button>
              </div>
            )}
            {exercicio_id >= 136 && !contagem && contador && (
              <ListaProdutos>
                <li>
                  <button onClick={() => loadResposta(4)}>4</button>
                </li>
                <li>
                  <button onClick={() => loadResposta(3)}>3</button>
                </li>
                <li>
                  <button onClick={() => loadResposta(5)}>5</button>
                </li>
                <li>
                  <button onClick={() => loadResposta(2)}>2</button>
                </li>
                <li>
                  <button onClick={() => loadResposta(6)}>6</button>
                </li>
                <li>
                  <button onClick={() => loadResposta(1)}>1</button>
                </li>
              </ListaProdutos>
            )}
            {contador === 0 &&
              (exercicio_id === 120 || exercicio_id === 136) && (
                <button onClick={() => loadContador(1)}>Iniciar</button>
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
            )} */}
            <div>
              {!contador && !contagem && exercicio_id === 150 && (
                <Strong>
                  Exercício Concluído{' '}
                  <img src={icoConcluido} alt="Exercício concluído" />
                </Strong>
              )}
              {/* {!contagem && exercicio_id !== 150 && (
                <Link
                  onClick={() => loadProximo()}
                  to={`/apostila/${exercicio + 1}`}
                >
                  Próximo &raquo;
                </Link>
              )} */}
            </div>
          </div>
        )}
        <div> </div>
      </Prod>
    </>
  );
}
