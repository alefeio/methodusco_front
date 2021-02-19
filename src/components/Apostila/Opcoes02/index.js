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

export default function Opcoes02(props) {
  const [contador, setContador] = useState(0);
  const [contagem, setContagem] = useState(true);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [apresentacao, setApresentacao] = useState(true);

  const isMountedRef = useRef(null);

  const { ex, exercicio, pergunta, palavra, palavra2, opcoes, aula } = props;

  const exercicio_id = parseInt(exercicio);

  const dispatch = useDispatch();

  const resp = useSelector((state) => state.usuario);

  async function loadProva() {
    const response = await api.get(`provas2/${aula}`);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data.id;
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

      // loadProva();

      setTimeout(() => {
        history.push(`/apostila/${exercicio + 1}/aula/${aula}`);
      }, 300);

      // toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      setContagem(true);
      setContador(null);

      setTimeout(() => {
        history.push(`/apostila/${exercicio + 1}/aula/${aula}`);
      }, 300);
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
    }, 250);
  }

  async function loadProximo() {
    try {
      // await api.post('resposta', {
      //   resposta: 100,
      //   prova_id: prova.id,
      //   exercicio_id,
      // });

      // const response = await api.get(`provas2/${aula}`);

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

    setTimeout(() => setApresentacao(false), 2000);

    setConcluido(false);
    setContador(0);
    setContagem(true);

    if (isMountedRef.current) loadProva();

    if (exercicio_id !== 164) loadContador(1);

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
            {contador === 1 && (
              <ListaProdutos>
                <li>
                  <span>{palavra}</span>
                </li>
                <li>
                  <span>*</span>
                </li>
                <li>
                  <span>{palavra2}</span>
                </li>
              </ListaProdutos>
            )}
            {contagem && contador > 1 && (
              <ListaProdutos>
                <li>{contador === 2 && opcoes[0]}</li>
                <li>
                  <strong>*</strong>
                </li>
                <li>{contador === 2 && opcoes[1]}</li>
                <li>{contador === 3 && opcoes[2]}</li>
                <li>
                  <strong>*</strong>
                </li>
                <li>{contador === 3 && opcoes[3]}</li>
                <li>{contador === 4 && opcoes[4]}</li>
                <li>
                  <strong>*</strong>
                </li>
                <li>{contador === 4 && opcoes[5]}</li>
                <li>{contador === 5 && opcoes[6]}</li>
                <li>
                  <strong>*</strong>
                </li>
                <li>{contador === 5 && opcoes[7]}</li>
                <li>{contador === 6 && opcoes[8]}</li>
                <li>
                  <strong>*</strong>
                </li>
                <li>{contador === 6 && opcoes[9]}</li>
              </ListaProdutos>
            )}

            {!contagem && (
              <div>
                <button onClick={() => loadResposta(1)}>Sim</button>
                <button onClick={() => loadResposta(0)}>Não</button>
              </div>
            )}

            {contador === 0 && exercicio_id === 164 && (
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
          </div>
        )}
        <div> </div>
      </Prod>
    </>
  );
}
