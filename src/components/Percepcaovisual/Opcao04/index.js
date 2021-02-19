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

import { Prod, ListaProdutos, Strong, Voltar } from './styles';

import api from '~/services/api';

import icoConcluido from '~/assets/ico-concluido.jpg';

export default function Opcoes04(props) {
  const [contador, setContador] = useState(0);
  const [contagem, setContagem] = useState(true);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [apresentacao, setApresentacao] = useState(true);

  const isMountedRef = useRef(null);

  const { ex, exercicio, pergunta, palavra, opcoes, aula } = props;

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
    }, 350);
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

      setTimeout(() => {
        history.push(`/percepcaovisual/${exercicio + 1}/aula/${aula}`);
      }, 300);

      // toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      setContagem(true);
      setContador(null);

      setTimeout(() => {
        history.push(`/percepcaovisual/${exercicio + 1}/aula/${aula}`);
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

    if (exercicio_id === 186) setApresentacao(true);

    setTimeout(() => setApresentacao(false), 2000);

    setConcluido(false);
    setContador(0);
    setContagem(true);

    if (isMountedRef.current) loadProva();

    if (exercicio_id !== 186) loadContador(3);

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
        {!apresentacao && (
          <div>
            {contagem && contador === 1 && (
              <ListaProdutos>
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
              <ListaProdutos>
                <li>{opcoes[0]}</li>
                <li> </li>
                <li>{opcoes[1]}</li>
                <li> </li>
                <li>
                  <strong>*</strong>
                </li>
                <li> </li>
                <li>{opcoes[2]}</li>
                <li> </li>
                <li>{opcoes[3]}</li>
              </ListaProdutos>
            )}
            {!contagem && (
              <ListaProdutos>
                <li>
                  <button onClick={() => loadResposta(1)}>1</button>
                </li>
                <li> </li>
                <li>
                  <button onClick={() => loadResposta(3)}>3</button>
                </li>
                <li> </li>
                <li>
                  <strong>*</strong>
                </li>
                <li> </li>
                <li>
                  <button onClick={() => loadResposta(2)}>2</button>
                </li>
                <li></li>
                <li>
                  <button onClick={() => loadResposta(4)}>4</button>
                </li>
              </ListaProdutos>
            )}
            {contador === 0 && exercicio_id === 186 && (
              <div>
                <button onClick={() => loadContador(opcoes.length)}>
                  Iniciar
                </button>
              </div>
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
          )}

          <div>
            {exercicio > 186 && (
              <Link to={`/percepcaovisual/${exercicio - 1}`}>Anterior</Link>
            )}
            {exercicio < 207 && (
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
